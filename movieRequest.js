/*
http://www.omdbapi.com/?apikey=[yourkey]&

Poster API requests:

http://img.omdbapi.com/?apikey=[yourkey]&

//f4ff18d7
*/

//const urlData = 'https://www.omdbapi.com/?apikey=[f4ff18d7]&t=star+wars'
//const urlPoster = 'https://img.omdbapi.com/?apikey=[f4ff18d7]&t=star+wars'
//let urlData = 'https://jsonplaceholder.typicode.com/posts'
/*
class Post {
  constructor(Title) {
    this.Title = Title
  }

let posts = []
*/
//let injectMovie = document.querySelector("injectMovie")
$( document ).ready(function() {

  var injectMovie = document.getElementById("injectMovie")

  fetch('https://www.omdbapi.com/?apikey=f4ff18d7&s=star+wars').then(function(response) {
      //console.log(response)
      return response.json();
    }).then(function(myJson) {
      //posterFetch(myJson)
      //let body = document.querySelector("body")

      let movieArray = myJson.Search
      //console.log(movieObj)
      console.log(myJson)
      console.log(movieArray)
      console.log(movieArray[0])

      console.log(injectMovie)
      injectMovie.innerHTML = " "

      movieArray.forEach(function(eachMovie){
        //let post = new Post(eachMovie.Title)
        //posts.push(post)
        let titleMovie = `<div>${eachMovie.Title}
          </div>
          <img src="${eachMovie.Poster}">`


        injectMovie.innerHTML += titleMovie
        console.log(titleMovie)
        $("injectMovie").on('mouseover', {
          return this.eachMovie
      })


    }).then(function(bigMovie){

        let bigMovie.innerHTML = ""
        let showMovie = `
        <img src="bigMovie.">
        <div>Year:${bigMovie.} </div>
        <div>Rated: ${bigMovie.} </div>
        <div>Released: ${bigMovie.}</div>
        <div>Director: ${bigMovie.}</div>

        `


});

/*

  })
//<img src="${eachMovie.Poster}">
  }
  */

/*
http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=insertyourkeyhere
const posterFetch = function(myJson) {
  fetch('https://img.omdbapi.com/?apikey=f4ff18d7&s=star+wars')

  .then(function(response) {
    console.log(myJson)
    let movieInfo = " "
    $.each(data, function(key, value) {
      let thisMovie = `

      `
    })
    return response.json();

  })
  .then(function(myJson) {
    console.log(myJson);
  });
}
*/
///////////////////////////////////////////
