import { getAllMovies } from "../services/movies.js";

export const viewAllMovies = async () => {
  try {
    const fragment = document.createDocumentFragment();
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const allMoviesSection = document.getElementById("all-movies-section");
    allMoviesSection.innerHTML = ""; // Limpiar antes de agregar nuevas películas

    const allMoviesData = await getAllMovies();

    allMoviesData.results.forEach((element) => {
      const newMoviePoster = document.createElement("article");
      newMoviePoster.classList.add("movieArticle");

      const imagePoster = document.createElement("img");
      imagePoster.src = element.poster_path
        ? imageUrl + element.poster_path
        : "https://via.placeholder.com/500?text=No+Image";

      const title = document.createElement("h3");
      title.textContent = element.original_title;



      const date = document.createElement("p");
      date.classList.add("date");
      date.textContent = `Fecha: ${element.release_date}`;

      newMoviePoster.append(title, imagePoster, date);
      fragment.appendChild(newMoviePoster);
    });

    allMoviesSection.appendChild(fragment);
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
};
