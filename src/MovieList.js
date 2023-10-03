import { Component } from "react";
import MovieCard from "./Moviecard";
class MovieList extends Component{
    constructor(){
        super()
        this.state={
            movies:[
                {
                    title: "The Avengers",
                    plot:"Movie full of superheros",
                    price:"199",
                    imdb:8.9,
                    stars:0,
                    favourite: false,
                    cart: false
                },
                {
                    title: "The Avengers 2",
                    plot:"Movie full of superheros",
                    price:"199",
                    imdb:9.0,
                    stars:0,
                    favourite: false,
                    cart: false
                },
                {
                    title: "The Avengers 3",
                    plot:"Movie full of superheros",
                    price:"199",
                    imdb:9.1,
                    stars:0,
                    favourite: false,
                    cart: false
                }

            ]


        }
    }
    addStars=(movie)=>{

        const {movies}=this.state;
        const movieId=movies.indexOf(movie);
        if(movies[movieId].stars>=5){
            return;
        }
        movies[movieId].stars+=0.5;

        this.setState({movies})
    }

    subtractStars=(movie)=>{
        const {movies}=this.state;
        const movieId=movies.indexOf(movie);
        if(movies[movieId].stars<=0){
            return;
        }
        movies[movieId].stars-=0.5;

        
        this.setState({movies})
    }

    render(){
        const {movies}=this.state
        return (
            <div className="movie-list">
                {movies.map((movie)=>(<MovieCard movie={movie} addStars={this.addStars} subtractStars={this.subtractStars}/>))}
            </div>)
    }
}

export default MovieList;