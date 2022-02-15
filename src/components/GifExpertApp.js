import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GitExpertApp = ()=>{

    const [categories, setcartegories] = useState(['Dragon Ball']);
    
    // const handleAdd = ()=>{
    //     setcartegory ([...category, 'Death note']);
    // }

    return (
        <>
        <h2>GitExpertApp</h2>
        <AddCategory setcartegory = {setcartegories}/>
        <hr/>   
        <ol>
            {
                categories.map( category =>(
                   <GifGrid 
                    key = {category}
                   category = {category}
                   />
                ))
            }
        </ol>
        </>

    )
}