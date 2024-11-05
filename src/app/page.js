// src/app/page.js
import RecipeGrid from './components/RecipeGrid';
import SearchBar from './components/SearchBar';
import IngredientList from './components/IngredientList';

export default function HomePage() {
  return (
    <div className="bg-yellow-50 p-8 rounded-lg shadow-lg">
      {/* Título principal */}
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold text-yellow-900">Yixha</h1>
        <p className="text-lg text-gray-700">Recetas personalizadas con tus ingredientes</p>
      </section>

      {/* Botón "Sorpréndeme" */}
      <div className="flex justify-center mb-6">
        <button className="bg-black text-yellow-50 py-2 px-6 rounded-md text-lg hover:bg-yellow-700 hover:text-black transition-all">
          Sorpréndeme
        </button>
      </div>

      {/* Sección de recetas sugeridas */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-yellow-900 mb-6">Puedes probar:</h2>
        <RecipeGrid />
      </section>

      {/* Barra de búsqueda y filtros de ingredientes */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-yellow-900 mb-4">Filtrar por ingredientes:</h3>
        <div className="flex flex-col items-center">
          <SearchBar />
        </div>
      </section>
    </div>
  );
}
