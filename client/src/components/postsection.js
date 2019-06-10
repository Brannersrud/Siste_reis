import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Postsection extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('/post/getAllPosts')
        .then((res) => res.json())
        .then((resdata) => this.setState({data: resdata}))
        .catch((err) => console.log(err));
    } 


    render(){
        return(
            <main>
                {this.state.data.map((posts) => {
                    return(
                        <div key={posts.id}>
                            <div className="image-wrapper">
                                {posts.images.length <= 1 ? 
                                    <img src={posts.images[0]} alt={posts.title + " image"}/>
                                :
                                    undefined}
                            </div>
                        <h1>{posts.title}</h1>
                        <p>{posts.description}</p>
                    
                        {posts.images.length > 1 ? 
                            <Carousel className="carousel">
                                {posts.images.map((image) => {
                                    return(
                                    <img key={posts.id} src={image} alt="imagecarousel for the current post"/>
                                    )
                                })}
                            </Carousel>
                            : undefined
                            }
                        </div>
                        
                    )
                })}

            
            </main>
        )
    }
}