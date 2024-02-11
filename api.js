// movie renting api



const movies =[
    { title: 'Barbie', year: 2023, genre: 'Fantasy', movieId: 101},
    {title: 'John Wick 4', year: 2023, genre: 'Action', movieId: 102},
    {title: 'Far From Home', year: 2022, genre: 'Drama', movieId: 103},
    {title:'Welcome to Samdalri', year:2023, genre:'Slice of Life', movieId: 104}
 ]

 const availableMovies = {
    101: 3,
    102: 4,
    103: 2,
    104: 3,
 }

 const rent_movie = []

 class Movie{
    constructor (_movie = {title, year, genre, movieId}){
        this.title = _movie.title
        this.year = _movie.year
        this.genre = _movie.genre
        this.movieId = _movie.movieId
    }


    static listMovies() {
        return movies;
    }




    addMovie(movie){
        movies.push(movie)
        availableMovies[movie.movieId] ? availableMovies[movie.movieId] + 1:1
  
        return movies
     }

     rentMovie(movieId) {
        const movieIndex = movies.findIndex(movie => movie.movieId === movieId);
    
        if (movieIndex !== -1) {
          if (availableMovies[movieId] > 0) {
            availableMovies[movieId]--;
            const rentedMovie = movies[movieIndex];
            rent_movie.push(rentedMovie);
            movies.splice(movieIndex, 1); // Remove the rented movie from the available movies array
            return rentedMovie;
          } else {
            console.log(`Movie with ID ${movieId} is not available for rent.`);
          }
        } else {
          console.log(`Movie with ID ${movieId} not found.`);
        }
      }
    
      
    }

    // adding a new movie
 const newMovie = new Movie({title:'Alchemy of Souls', year: 2023, genre: 'Fantasy', movieId: 105})
 console.log('Added', newMovie)
 console.log('Updated Movie List', newMovie.addMovie(newMovie))
    
    // Renting a movie
    const rentedMovie = newMovie.rentMovie(104);
    console.log('Rented Movie:', rentedMovie);
    console.log('Updated Movie List:', movies);
    console.log('Updated Available Movies:', availableMovies);
    console.log('Rented Movies List:', rent_movie);

     
 


// Listing all the movies
 console.log(movies);



    




