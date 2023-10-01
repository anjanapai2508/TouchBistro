import { FormEvent, useState } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import FormInput from './components/form-input/form-input';
import { getPrimeNumber } from './utils/data-utils';

const defaultFormFields = {
  upperLimit:0
}
const App = () => {
  const [formFields, setUpperLimit] = useState(defaultFormFields)
  const {upperLimit} = formFields

 
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await getPrimeNumber('http://localhost:8000/find-prime-numbers', 300)
      console.log('Response Data:', response);
    }
    catch (error){
      alert('User Sign in Failed')
    }
  };
  

  return (
    <div className='App-header'>
      <h1>
          Welcome
         </h1>
         <div className='card'>
          <Logo className='logo'/>
          <h2>Enter a number</h2>
          <form onSubmit={handleSubmit}>          
            <FormInput
            label='Number for upper limit'
            type='number'
            name='upperLimit'
            value={upperLimit}/>
            <div className='button-group'>
              <button type='submit'>Find Median</button>
            </div>
          </form>
         </div>
    </div>
  );
}
export default App;