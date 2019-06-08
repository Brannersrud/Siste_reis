import React, {Component} from 'react';
import Dropzone from 'react-dropzone';


const Uploadform = () => {
 
            return(
            <form onSubmit={handleOnSubmit} action="/post/upload" method="post" encType="multipart/form-data">
                <input placeholder="Write the title here" type="text" name="title" />
                <textarea name="description"/>
                <Dropzone>
            {({getRootProps, getInputProps, isDragActive, acceptedFiles}) => (
                <section>
                <div className="drop-wrapper" {...getRootProps()}>
                    <input name="file" accept="image/*" className="drop-zone" {...getInputProps()} />
                    <div>{isDragActive ? <p>Drop it</p>: <p>Drop images</p>}</div>
                    <ul>
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
                <button type="submit">Submit</button>
            </form>
        )

        function handleOnSubmit(e){
            e.preventDefault();
        }
    }
export default Uploadform;