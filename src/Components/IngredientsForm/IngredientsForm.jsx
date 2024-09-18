import React, { useState } from "react";

const IngredientsForm = ({ onGenerateMeals }) => {
  const [ingredient, setIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState(["Chicken", "Broccoli", "Rice", "Eggs"]);

  const handleAddIngredient = () => {
    if (ingredient.trim() !== "") {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient('');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Ingredients on Hand</h2>
        <div>
          <label className="block mb-4">
            Enter ingredients you have:
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                className="flex-grow p-2 border rounded"
              />
              <button
                type="button"
                onClick={handleAddIngredient}
                className="ml-4 p-2 bg-green-500 text-white rounded"
              >
                + Add Ingredient
              </button>
            </div>
          </label>

          {/* List of Ingredients */}
          <div className="mb-6">
            <p className="mb-2">Your Ingredients:</p>
            <div className="flex flex-wrap gap-2">
              {ingredientsList.map((item, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 rounded">{item}</span>
              ))}
            </div>
          </div>

          {/* Generate Meals Button */}
          <button
            type="button"
            onClick={onGenerateMeals}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Generate Meals
          </button>
        </div>
      </div>
    </div>
  );
};

export default IngredientsForm;
