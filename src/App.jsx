import { useState } from 'react';
import MyForm from './MyForm';
import './App.css';

function App() {
  //Declare state variables showForm and message
  const [showForm, setShowForm] = useState(false);//Initialize to false
  const [message, setMessage] = useState(null);//Initialaize to null
  //Function to toggle visibility of the form and clear message
  const toggleForm = () => {setShowForm(prev => !prev); 
                            setMessage(null);};
  //Function to handle Form submission with input value
  const handleSubmit = (inputValue) => {
        setShowForm(false);//Hide the FOrm after submission
        //Set delay(1sec) to displae the message
        setTimeout(() => {
            setMessage(`Submitted value: ${inputValue}`);
        }, 1000);
    };
  //Render the components, button, message(div), and MyForm
  return (
    <>
      <button className="jonel-btn" onClick={toggleForm}>
        {showForm ? 'Hide' : 'Show'} Form
      </button>
      {message && (<div>{message}</div>)}
      {showForm && <MyForm onSubmit={handleSubmit} />}
    </>
  )
  
}

export default App
