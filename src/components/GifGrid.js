import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
    const {data:images, loading} = useFetchGifs(category);
    console.log(loading);
    // useEffect(()=>{
    //     getGifs(category)
    //         .then (setImages)
    // },[category]) //[] solo se dispara una vez cuando se renderiza.
    
  return (
     <>
    <h3 className="animate__animated animate__fadeInLeftBig"> {category} </h3>
    { loading && <p className="animate__animated animate__flash">Loading..</p> }


   <div className='animate__animated animate__fadeInBottomLeft'>
    <ol>
        {
            images.map(ima =>(
                <GifGridItem 
                key={ima.id}
                {... ima}
                />
            ))
        }
        
    </ol>
  </div> 
  </> 
  )
};

