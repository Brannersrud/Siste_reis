import React, {Component} from 'react';

export default class FrontPage extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('/post/getAllPosts')
        .then((res) => res.json())
        .then((resdata) => console.log(resdata))
        .catch((err) => console.log(err));
    }  
 render(){
     return(
         <div>
            <p>frontpage</p>
         </div>
     )
 }   
}

