 function createMovieCard({ poster_path, original_title,addFavInteraction}) {
  try {
    /**Url de las peticiones para traer imágenes de Tmdb, para no tener un magic string */
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    /**Creo los nodos de las etiquetas para ir agregandolas al fragment */
    const newMoviePoster = document.createElement("article");
    newMoviePoster.classList.add("movieArticle");

    const imagePoster = document.createElement("img");
    imagePoster.src = poster_path
      ? imageUrl + poster_path
      : "https://via.placeholder.com/500?text=No+Image";

    const title = document.createElement("h3");
    title.textContent = original_title;

    const footerSection = document.createElement("div");
    footerSection.classList.add('footerImage')

    newMoviePoster.append(title, imagePoster, footerSection);
    
    if(addFavInteraction){
        footerSection.innerHTML = "<button>Agregar a favoritos</button>";
    }
    return newMoviePoster;
  } catch (error) {}
}

export { createMovieCard };
