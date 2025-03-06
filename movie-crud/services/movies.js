const token =  ""

export const getAllMovies = async ()=>{
    const fetchResponse = fetch("https://api.themoviedb.org/3/account/21863347/rated/movies?language=en-US&page=1&sort_by=created_at.asc",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
  
            }
    })
    const dataMovies = (await fetchResponse).json()
    return dataMovies
}