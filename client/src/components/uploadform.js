import React,{Component, Fragment} from 'react';
import Dropzone from 'react-dropzone';



const Uploadform = () =>  {
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
                        <p>{isDragActive ? <p>Drop it</p>: <p>Drop images</p>}</p>
                        <ul className="file-list">
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
               
                <button type="submit">Submit</button>
            </form>
        )

        
    }

export default Uploadform;