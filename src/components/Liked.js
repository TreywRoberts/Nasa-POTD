import React from "react";

import { StyledLiked} from './../styles/StyledLiked'
import {mediaType} from './Helpers'

function Liked({LSLikedList, removePhoto}){
  
    if(LSLikedList.length <= 0){
        return(
            <StyledLiked>
                <div className='noPhoto'>
                    <h2>You haven't liked any photos.<br></br> Go check some out!</h2>
                </div>
            </StyledLiked>
        )
    } else {
        return (
            <StyledLiked>
                <div className='display-box'>
                    <h2>Photos You Have Liked</h2>
                    {LSLikedList.map(photo=>(
                        <div key={photo.date}>
                            {mediaType(photo)}
                            <h3>{photo.title}</h3>    
                            <p>{photo.date}</p>
                            <button onClick={()=>{removePhoto(photo)}}>Remove</button>
                        </div>
                        ))
                    }
                </div>
            </StyledLiked>
  );
}
}

export default Liked