import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setcartegory}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange =(e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{

        e.preventDefault();
        if(inputValue.trim().length>2){
            setcartegory( e => [ inputValue, ...e] );
            setinputValue('')
        }
        
    }
  return (
      <>
        <h1>{inputValue}</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
      </>
  )
};

AddCategory.propTypes ={
    setcartegory:PropTypes.func.isRequired
}