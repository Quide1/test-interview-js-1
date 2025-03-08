import { createMovieCard } from "../../components/movieCard.js";
import { getAllTrendingMovies } from "../../services/trendingMovies.js";
export const viewAllTrendingMovies = async () => {
  try {
    /**Creo un fragment para agregarlo de una sola vez al dom y evitar re renders */
    const fragment = document.createDocumentFragment();

    /** Selecciono lugar donde van las peliculas */
    const allTrendingMoviesSection = document.getElementById(
      "trending-movies-section"
    );

    /**Creo las películas para luego agregarlas al fragment y meterlas de una en la seccion, no lo meto directo ya que estoy
     * utilizando el innerthtml para poder limpiar las películas en trending.
     */
    const allMovies = document.createElement("div");
    allMovies.classList.add("trending-movies");
    allMovies.innerHTML = "";

    const allMoviesData = await getAllTrendingMovies();

    allMoviesData.results.map((element) => {
      const newMoviePoster = createMovieCard(element);
      allMovies.appendChild(newMoviePoster);
    });
    fragment.appendChild(allMovies);
    allTrendingMoviesSection.appendChild(fragment);
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
};
