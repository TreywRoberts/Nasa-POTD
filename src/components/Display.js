import React, {useState, useEffect} from "react";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons'

import { StyledDisplay } from "../styles/StyledDisplay";


function Display(){
    const[photo, setPhoto] = useState({})
    const[temp, setTemp] = useState('')
    const[inputValue, setInputValue] = useState('')
    const[likedList, setLikedList] = useState([]);
    const[className, setClassName] = useState('like')
    const[liked, setLiked] = useState('Like')
    const[icon, setIcon] = useState(farHeart)


  useEffect(() =>{
    const fetchImage = () =>{
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${inputValue}`)
      .then(res=>{
        setPhoto(res.data)
      })
      .catch(err=>{
      })
    }
    fetchImage()
  },[inputValue] )
  

  const addToLikedList = photo => {
    setLikedList([...likedList, photo])
  }
  const deleteLikedList = (date) => {
    const newList = likedList.filter((photo) => photo.date !== date)
    setLikedList(newList)
    console.log(date)
  }
  
  const changeInput = evt => {
    const { value } = evt.target;
    setTemp(value)
  }


  const onClickInput = (e) =>{
      e.preventDefault();
      setInputValue(temp)
      setLiked('Like')
      setClassName('like')
      setIcon(farHeart)
  }

  const changeClass = () =>{
    if(liked === 'Like'){
        setLiked('Unlike')
        addToLikedList(photo)
        setIcon(faHeart)
        setClassName('liked')
    }else{
        setLiked('Like')
        deleteLikedList(photo.date)
        setIcon(farHeart)
        setClassName('like')
    }
  }
  const API_KEY = 'DXUUGOwFmoJZyyyeWI355njm4JXCa4licvy0cZNu'

  sessionStorage.setItem("likedList", JSON.stringify(likedList));





  return (
    <StyledDisplay>
      <div className='display-box'>

        <h2>{photo.title}</h2>
        <img src={photo.url} alt='photo of the day'/>
          <div className={className} onClick={changeClass}>
          <FontAwesomeIcon icon={icon} size='2x' />
          <p>{liked}</p>
          </div>
        <h3>Date: {photo.date}</h3>
        <p>
          {photo.explanation}
        </p>
        <p>by {photo.copyright}</p>
    </div>
  

      <div className='search'>
          <h4>Check out some photos from different days!</h4>
          <p>format: YYYY-MM-DD</p>
          <form onSubmit={onClickInput}>
            <input id='input' type='text' onChange={changeInput} value={temp} />
            <button type='submit'>Submit</button>
          </form>
      </div>
  </StyledDisplay>
);
}

export default Display;