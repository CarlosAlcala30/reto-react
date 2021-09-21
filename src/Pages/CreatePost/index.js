import React,{useState} from "react";


import "./style.scss";

import FilterLink from "../../Components/Links/FilterLink";

const CreatePostPage = (props) => {

    const [coverImage,setCoverImage]=useState();

    const handlerImg = (event) => {
        event.preventDefault();
        setCoverImage({file:URL.createObjectURL(event.target.files[0])})
    }

  return (
    <main className="main">
      <div className="header-container">
        <div>
          <h4>Create Post</h4>
        </div>
        <div>
        <ul>
          <FilterLink text="Edit" />
          <FilterLink text="Preview" />
        </ul>
        </div>
      </div>
      <form className="form-container">        
            {
                coverImage ? 
                (
                    <div class="cover">
                        <img src={coverImage.file} alt="" />
                        <label for="cover" className="btn-add">Change</label>
                        <input type="file" id="cover" onChange={handlerImg}></input>
                        <button type="button" className="btn-remove" onClick={ () => { setCoverImage()} }>Remove</button>
                    </div>
                ) 
                    : 
                (
                    <div class="cover">
                        <label for="cover" className="btn-add">Add a cover image</label>
                        <input type="file" id="cover" onChange={handlerImg}></input>
                    </div>
                    
                ) 
            }          
        

      </form>
    </main>
  );
};

export default CreatePostPage;
