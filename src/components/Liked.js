import React, { useEffect } from "react";
import { StyledLiked} from './../styles/StyledLiked'

function Liked({LSLikedList, removePhoto}){

    const mediaType = (photo) => {
        if(photo.media_type === 'image'){
            return(<div>
                <img src={photo.url} alt='pic of the day'/>
                <p>Hellloooo</p>
            </div>
                )
            } else if(photo.media_type === 'video') {
            return(
                <iframe
                    source src={photo.url}>
                </iframe>
            ) 
        }
    }
  
    if(LSLikedList.length <= 0){
        return(
            <StyledLiked>
                <div className='noPhoto'>
                    <h2>You haven't liked any photos.<br></br> Go check some out!</h2>
                </div>
            </StyledLiked>
        )
    } else{
        return (
            <StyledLiked>
                <div className='display-box'>
                    <h2>Photos You Have Liked</h2>
                    {LSLikedList.map(photo=>(
                        <div key={photo.date}>
                            {/* <img src={photo.url} alt='prev liked pic' /> */}
                            {console.log(photo.media_type)}
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