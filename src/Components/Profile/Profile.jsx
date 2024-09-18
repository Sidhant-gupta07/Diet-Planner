import React, { useState } from "react";
import IngredientsForm from "../IngredientsForm/IngredientsForm";
import CreateProfile from "../Profile/Profile";

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [dietPreferences, setDietPreferences] = useState({
    vegetarian: false,
    vegan: false,
    keto: false,
    paleo: false,
    glutenFree: false,
    dairyFree: false
  });
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [currentForm, setCurrentForm] = useState('profile'); // Start with 'profile' form

  const handleNextToIngredients = () => {
    setCurrentForm('ingredients'); // Correctly set the form to 'ingredients'
  };

  const handleGenerateMeals = () => {
    alert("Meal suggestions generated!");
    setCurrentForm(''); 
  };

  const handleDietChange = (e) => {
    const { name, checked } = e.target;
    setDietPreferences({ ...dietPreferences, [name]: checked });
  };

  const handleFitnessGoalChange = (goal) => {
    setFitnessGoal(goal);
  };

  return (
    <>
      {/* Conditional Rendering for Forms */}
      {currentForm === 'profile' && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Create Your Profile</h2>
            <form>
              <label className="block mb-4">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </label>
              <label className="block mb-4">
                Age:
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </label>
              <label className="block mb-4">
                Gender:
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full mt-2 p-2 border rounded"
                  required
                >
                  <option value="" disabled>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <div className="flex space-x-4 mb-4">
                <label className="block">
                  Height (cm):
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full mt-2 p-2 border rounded"
                    required
                  />
                </label>
                <label className="block">
                  Weight (kg):
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full mt-2 p-2 border rounded"
                    required
                  />
                </label>
              </div>

              {/* Dietary Preferences */}
              <label className="block mb-4">Dietary Preferences:</label>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {["Vegetarian", "Vegan", "Keto", "Paleo", "Gluten-Free", "Dairy-Free"].map((diet) => (
                  <label key={diet} className="flex items-center">
                    <input
                      type="checkbox"
                      name={diet.toLowerCase().replace(" ", "")}
                      checked={dietPreferences[diet.toLowerCase().replace(" ", "")]}
                      onChange={handleDietChange}
                    />
                    <span className="ml-2">{diet}</span>
                  </label>
                ))}
              </div>

              {/* Fitness Goal */}
              <label className="block mb-4">Fitness Goal:</label>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {["Lose Weight", "Gain Muscle", "Maintain"].map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    className={`p-2 rounded ${fitnessGoal === goal ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleFitnessGoalChange(goal)}
                  >
                    {goal}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextToIngredients}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Next: Ingredients on Hand
              </button>
            </form>
          </div>
        </div>
      )}

      {currentForm === 'ingredients' && (
        <IngredientsForm onGenerateMeals={handleGenerateMeals} />
      )}
    </>
  );
};

export default Profile;
