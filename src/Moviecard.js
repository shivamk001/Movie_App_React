import {Component} from "react";

export default class MovieCard extends Component{


    toggleFavourite=()=>{
        this.setState((prevState)=>
            {return {favourite: !prevState.favourite}}
        )
    }

    toggleCart=()=>{
        this.setState((prevState)=>
            {return {cart: !prevState.cart}}
        )
    }
    render(){
        const {movie, addStars, subtractStars}=this.props;
        const {title, plot, price, imdb, stars, favourite, cart}=movie
        console.log(title, plot, price, imdb, stars)
        return (
            
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
                                    onClick={()=>subtractStars(movie)}/>
                                <h3>{stars}</h3>
                                <img alt="stars" 
                                    className="star-img" 
                                    src="https://cdn-icons-png.flaticon.com/128/616/616490.png"/>
                                <img alt="increase" 
                                    className="plus-img" 
                                    src="https://cdn-icons-png.flaticon.com/128/11668/11668524.png"
                                    onClick={()=>addStars(movie)}/>
                            </div>
                            <div className="movie-card-btns">
                                
                                <button className={favourite?"movie-card-unfav-btn":"movie-card-fav-btn"} onClick={this.toggleFavourite}>{favourite?"Un-favourite":"Favourite"}</button>
                                <button className={cart?"movie-card-uncart-btn":"movie-card-cart-btn"} onClick={this.toggleCart}>{cart?"Remove from cart":"Add to cart"}</button>
                            </div>
                        </div>
                    </div> 
                </div>
        )
    }
} 