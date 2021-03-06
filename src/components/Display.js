import React, {useState, useEffect} from "react";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons'

import { StyledDisplay } from "../styles/StyledDisplay";
import {mediaType} from './Helpers'


function Display({LSLikedList}){
    
    const[photo, setPhoto] = useState({})
    const[temp, setTemp] = useState('')
    const[inputValue, setInputValue] = useState('')
    const[likedList, setLikedList] = useState(LSLikedList);
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
    
        if(handleCheck(photo.date) === true){
            setIcon(faHeart)
            setLiked('Unlike')
            setClassName('liked')
        } else if(handleCheck(photo.date) === false){
            setIcon(farHeart)
            setLiked('Like')
            setClassName('like')
        }
    },[inputValue, photo.date] ) //eslint-disable-line


    const handleCheck = (date)=> {
        return likedList.some(function(el){
            return el.date === date
        });
    }
  
    const addToLikedList = photo => {
        setLikedList([...likedList, photo])
    }

    const deleteLikedList = (date) => {
        const newList = likedList.filter((photo) => photo.date !== date)
        setLikedList(newList)
    }
    
    const changeInput = evt => {
        const { value } = evt.target;
        setTemp(value)
    }

    const onClickInput = (e) =>{
        e.preventDefault();
        setInputValue(temp)
        setTemp('')
    }

    const changeClass = () =>{
        if(handleCheck(photo.date) === true){
            setLiked('Like')
            deleteLikedList(photo.date)
            setIcon(farHeart)
            setClassName('like')
        }else{
            setLiked('Unlike')
            addToLikedList(photo)
            setIcon(faHeart)
            setClassName('liked')
        }
    }
    const API_KEY = 'DXUUGOwFmoJZyyyeWI355njm4JXCa4licvy0cZNu'

    localStorage.setItem("likedList", JSON.stringify(likedList));

    return(
        <StyledDisplay>
            <div className='display-box'>
                <h2>{photo.title}</h2>
                {mediaType(photo)}
                <p>{photo.copyright}</p>
                    <div className={className} onClick={changeClass} >
                        <FontAwesomeIcon icon={icon} size='2x' />
                        <p>{liked}</p>
                    </div>
                <h3>Date: {photo.date}</h3>
                <p>{photo.explanation}</p>
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
        )
    };
              
                
export default Display;