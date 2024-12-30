import React, { Fragment, useState } from 'react'

const AddMovies = (props) => {
    const [title,setTitle] = useState("");
    const [url,setUrl] = useState("");
    const [number,setNumber] = useState('');

    const TitleChangeHandler = (e)=>{
        setTitle(e.target.value);

    }
    const NumberChangeHandler = (e)=>{
        setNumber(e.target.value);

    }
    const UrlChangeHandler = (e)=>{
        setUrl(e.target.value);

    }


    const FormSubmitHandler =(e)=>{
        e.preventDefault();
        const val={
            title:title,
            year:number,
            poster:url
        }
        props.onShave(val);


    }
  return (
    <Fragment>

        <form onSubmit={FormSubmitHandler} >
            <label htmlFor="">Title</label>
            <input type="text"
            onChange={TitleChangeHandler}
            value={title} name='title'
             />
            <label htmlFor="">Poster</label>
            <input type='img' onChange={UrlChangeHandler} value={url}  name='url'/>
            <label htmlFor="">Year</label>
            <input type="tel" onChange={NumberChangeHandler} value={number} name='number' />
            <button type='Submit' >Add</button>
        </form>

    </Fragment>

  )
}

export default AddMovies