import React,{useRef, useEffect, useState} from "react";

const MyForm = ({onSubmit}) => {
    //State input variable and it setter function initialized to empty string
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);//Access to input emelent directly

    useEffect(() => {
        if (inputRef.current){
            inputRef.current.focus();//Focus on input element
        }

    }, []);//Empty dependency array 
    
    //Change event for an input field
    const handleChange = (event) => {
        setInputValue(event.target.value);//Update inputValue with the current value
    };

    //Render HTML Form Element
    return (
        <form action="" method="POST">
            <input
                type="text"
                ref={inputRef}
                value={inputValue}
                onChange={handleChange}/>
            <button type="button" onClick={() => onSubmit(inputValue)}>Save</button>
        </form>

    );

};

export default MyForm;
