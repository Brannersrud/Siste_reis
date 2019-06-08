import React, {Component} from 'react';
import Dropzone from 'react-dropzone';


export default class Uploadform extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:'',
            img:[]

        }
    }


    render(){
        console.log(this.state);
        return(
            <form action="/user/upload" method="post" encType="multipart/form-data">
                <input placeholder="Write the title here" type="text" value={this.state.title} onChange={(e) => this.setState({title:e.target.value})}/>
                <textarea onChange={(e) => this.setState({description:e.target.value})} value={this.state.description} placeholder="Write your post here"/>
                <Dropzone>
            {({getRootProps, getInputProps, isDragActive, acceptedFiles}) => (
                <section>
                <div className="drop-wrapper" {...getRootProps()}>
                    <input name="file" accept="image/*" className="drop-zone" {...getInputProps()} />
                    <div>{isDragActive ? <p>Drop it</p>: <p>Drop images</p>}</div>
                    <ul>
                    {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                        <li className="file-item">
                          {acceptedFile.name}
                        </li>
                      ))}
                    </ul>
                </div>
                </section>
            )}
        </Dropzone>
            </form>
        )
    }
}