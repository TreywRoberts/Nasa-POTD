import React from "react";

    export const mediaType = (photo) => {
        if(photo.media_type === 'image'){
            return(<div>
                <img src={photo.url} alt='pic of the day'/>
            </div>
                )
            } else if(photo.media_type === 'video') {
            return(
                <iframe title='video of the day'
                source src={`${photo.url}&controls=0`} >
                </iframe>
            ) 
        }
    }
  

