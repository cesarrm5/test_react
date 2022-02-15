import { useState, useEffect } from "react/cjs/react.development"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs =(category)=>{

    const [state, setState] = useState({
    data:[],
    loading: true
    });    

    useEffect(()=>{
        getGifs(category)
            .then(imgs=>{
                    console.log(imgs);
                    setState({
                        data:imgs,
                        loading:false
                    });

            })

       },[category]) //[] solo se dispara una vez cuando se renderiza.
 
       return state; 
}