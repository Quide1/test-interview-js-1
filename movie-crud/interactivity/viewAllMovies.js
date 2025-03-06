import { getAllMovies } from "../services/movies.js"

export const viewAllMovies  =async ()=>{
     const allMoviesSection = document.getElementById('all-movies-section')
     const allMoviesData= await getAllMovies()
     console.log(allMoviesData)
}