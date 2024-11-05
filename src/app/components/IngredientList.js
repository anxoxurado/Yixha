const IngredientList = ({ ingredients }) => (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {ingredients.map((ingredient) => (
        <button
          key={ingredient}
          className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white"
        >
          {ingredient}
        </button>
      ))}
    </div>
  );
  
  export default IngredientList;
  