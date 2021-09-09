import React from "react";
import { StyledLiked} from './../styles/StyledLiked'

function Liked(){
    const liked = JSON.parse(sessionStorage.getItem('likedList'))
    if(liked.length <= 0){
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
                <h2>Photos You Liked</h2>
                <div className='display-box'>
                {liked.map(photo=>(
                    <div>
                    <img src={photo.url} />
                    <h3>{photo.title}</h3>    
                    <p>{photo.date}</p>
                    </div>
                ))
                    }
                </div>
            </StyledLiked>
  );
}
}

export default Liked