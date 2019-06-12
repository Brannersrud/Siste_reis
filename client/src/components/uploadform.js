import React, {Component} from 'react';
import Dropzone from 'react-dropzone';



class Uploadform extends Component  {
    
   componentWillReceiveProps(nextProps){
       console.log(nextProps);
   }
    render(){
    return(
            <form action="/post/upload" method="post" encType="multipart/form-data">
                <label>Title of post</label>
                <input placeholder="Write the title here" type="text" name="title" />
                <label>Description</label>
                <textarea name="description"/>
                <label>Upload some images for your post</label>
                <Dropzone>
                {({getRootProps, getInputProps, isDragActive, acceptedFiles}) => (
                    <section>
                    <div className="drop-wrapper" {...getRootProps()}>
                        <input name="file" accept="image/*" className="drop-zone" {...getInputProps()} />
                        {isDragActive ? <p>Drop it</p>: <p>Drop images</p>}
                        <ul className="file-list">
                        {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                            <li key={acceptedFile.name} className="file-item">
                              {acceptedFile.name}
                            </li>
                          ))}
                        </ul>
                    </div>
                    </section>
                )}
            </Dropzone>
               
                <button onClick={(e) => e.preventDefault()} type="submit">Submit</button>
            </form>
        )

        
    }
}

export default Uploadform;