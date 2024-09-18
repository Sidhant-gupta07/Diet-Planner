import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegetarian: false,
    vegan: false,
    keto: false,
    paleo: false,
    glutenFree: false,
    dairyFree: false
  });
  const [fitnessGoal, setFitnessGoal] = useState('');

  const handleDietaryChange = (e) => {
    const { name, checked } = e.target;
    setDietaryPreferences(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleFitnessGoalChange = (e) => {
    setFitnessGoal(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Your Profile</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height:</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="cm"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight:</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="kg"
            />
          </div>
        </div>
{/* Ignore this comment */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Dietary Preferences:</h3>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="vegetarian"
                checked={dietaryPreferences.vegetarian}
                onChange={handleDietaryChange}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-700">Vegetarian</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="vegan"
                checked={dietaryPreferences.vegan}
                onChange={handleDietaryChange}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-700">Vegan</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="keto"
                checked={dietaryPreferences.keto}
                onChange={handleDietaryChange}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-700">Keto</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="paleo"
                checked={dietaryPreferences.paleo}
                onChange={handleDietaryChange}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-700">Paleo</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="glutenFree"
                checked={dietaryPreferences.glutenFree}
                onChange={handleDietaryChange}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-700">Gluten-Free</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="dairyFree"
                checked={dietaryPreferences.dairyFree}
                onChange={handleDietaryChange}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-700">Dairy-Free</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Fitness Goal:</h3>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="fitnessGoal"
                value="loseWeight"
                checked={fitnessGoal === 'loseWeight'}
                onChange={handleFitnessGoalChange}
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-700">Lose Weight</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="fitnessGoal"
                value="gainMuscle"
                checked={fitnessGoal === 'gainMuscle'}
                onChange={handleFitnessGoalChange}
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-700">Gain Muscle</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="fitnessGoal"
                value="maintain"
                checked={fitnessGoal === 'maintain'}
                onChange={handleFitnessGoalChange}
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-700">Maintain</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
        <button type="button" className="bg-indigo-500 text-white px-4 py-1 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-2">
            Create Profile
          </button>

          <button type="button" className="bg-gray-200 text-gray-800 px-4 py-1 rounded-lg hover:bg-gray-300 focus:outline-none ">
            Next: Ingredients on Hand
          </button>

        </div>
      </form>
    </div>
  );
};

export default Profile;
