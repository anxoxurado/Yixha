"use client";

import { useState, useEffect } from 'react';
import IngredientList from './IngredientList';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function SearchBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  // API ID y API KEY de Edamam
  const APP_ID = 'a0f42d58'; // Tu APP_ID aquí
  const APP_KEY = 'a37a1875555387084afdd66970b84a80'; // Tu APP_KEY aquí

  const fetchIngredients = async (query) => {
    if (!query) return; // No realizar búsqueda si no hay consulta

    setLoading(true);
    try {
      const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setIngredients(data.hints.map(hint => hint.food.label)); // Extraemos los nombres de los ingredientes
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      setIngredients([]); // Vaciar ingredientes en caso de error
    } finally {
      setLoading(false);
    }
  };

  // Efecto para buscar ingredientes cuando el query cambia
  useEffect(() => {
    if (isDropdownOpen && query) {
      const debounceFetch = setTimeout(() => fetchIngredients(query), 300);
      return () => clearTimeout(debounceFetch); // Limpiar timeout si cambia la consulta
    }
  }, [query, isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value); // Actualiza el valor de la barra de búsqueda
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mb-4">
      {/* Barra de búsqueda */}
      <div className="flex items-center justify-between bg-white border-2 border-yellow-500 rounded-md p-2 cursor-pointer" onClick={toggleDropdown}>
        <input
          type="text"
          placeholder="Buscar ingredientes"
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          value={query}
          onChange={handleInputChange} // Maneja el cambio de input
        />
        {/* Icono de flecha */}
        <button onClick={toggleDropdown} className="text-gray-500 focus:outline-none">
          {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Lista de ingredientes desplegable */}
      <div
        className={`overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'max-h-60' : 'max-h-0'} mt-2`}
      >
        {loading ? (
          <div className="text-gray-500 text-center">Cargando...</div>
        ) : (
          <IngredientList ingredients={ingredients} />
        )}
      </div>
    </div>
  );
}
