import {Component} from "react";

export default class MovieCard extends Component{
    constructor(){
        super()
        this.state={
            title: "The Avengers",
            plot:"Movie full of superheros",
            price:"199",
            imdb:8.9,
            stars:0
        }
    }
    subtractStars=()=>{
        this.setState((prevState)=>{
            if(prevState.stars>0){
                return{
                    stars: prevState.stars-0.5
                }
            }
            else{
                return{
                    stars: prevState.stars
                }
            }
        })
        console.log("Stars are sub:", this.state.stars)
    }
    addStars=()=>{
        this.setState((prevState)=>{
            if(prevState.stars<5){
                return{
                    stars: prevState.stars+0.5
                }
            }
            else{
                return{
                    stars: prevState.stars
                }
            }
        }, 
        ()=>console.log("Stars inside callback:", this.state.stars))

        // this.setState((prevState)=>({stars: prevState.stars+0.5}))

        console.log("Stars are added:", this.state.stars)
    }
    render(){
        const {title, plot, price, imdb, stars}=this.state
        console.log(title, plot, price, imdb, stars)
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="movie-card-left">
                        <img alt="The Avengers Poster" src="https://www.themoviedb.org/t/p/original/n3G6dLQPDDdKvUKWMlCI7LRH9TQ.jpg"/>
                    </div>
                    <div className="movie-card-right">
                        <div className="movie-card-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="movie-card-plot">
                            <p>{plot}</p></div>
                        <div className="movie-card-price">
                            <p>Rs. {price}</p>
                        </div>
                        <div className="movie-card-footer">
                            <div className="movie-card-imdb">
                                <img alt="imdb" 
                                    className="imdb-img" 
                                    src="https://cdn-icons-png.flaticon.com/128/889/889199.png"/> 
                                <p>{imdb}</p>
                            </div>
                            <div className="movie-card-stars">
                                
                                <img alt="decrease" 
                                    className="minus-img" 
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                                    onClick={this.subtractStars}/>
                                <h3>{stars}</h3>
                                <img alt="stars" 
                                    className="star-img" 
                                    src="https://cdn-icons-png.flaticon.com/128/616/616490.png"/>
                                <img alt="increase" 
                                    className="plus-img" 
                                    src="https://cdn-icons-png.flaticon.com/128/11668/11668524.png"
                                    onClick={this.addStars}/>
                            </div>
                            <div className="movie-card-btns">
                                <button className="movie-card-fav-btn">Add to Favourites</button>
                                <button className="movie-card-card-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
} 