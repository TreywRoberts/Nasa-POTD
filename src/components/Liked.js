import React, { useEffect } from "react";
import { StyledLiked} from './../styles/StyledLiked'

function Liked({likedListt, removePhoto}){

    
    if(likedListt.length <= 0){
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
                <h2>Photos You Liked</h2>
                {likedListt.map(photo=>(
                    <div key={photo.date}>
                    <img src={photo.url} />
                    <h3>{photo.title}</h3>    
                    <p>{photo.date}</p>
                    <div>
                    <button onClick={()=>{removePhoto(photo)}}>Remove</button>
                    </div>
                    </div>
                ))
                    }
                </div>
            </StyledLiked>
  );
}
}

export default Liked