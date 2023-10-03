import React from 'react';
import FormInput from './components/form-input/form-input';
import { FormEvent, useState } from 'react';
import { getPrimeNumber } from './utils/data-utils';

const InputForm: React.FC = () => {
  const [upperLimit, setUpperLimit] = React.useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
         event.preventDefault()
        try {
          const response = await getPrimeNumber('http://localhost:8000/find-prime-numbers', parseInt(upperLimit, 10))
          console.log('Response Data:', response);
        }
        catch (error){
          alert('User Sign in Failed')
        }
      };

  const handleUpperLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpperLimit(event.target.value);
      };

  return (
    <div className='App-header'>
       <h1>
           Welcome
          </h1>
          <div className='card'>
           <h2>Enter a number</h2>
           <form onSubmit={handleSubmit}>          
            <FormInput
            label='Number for upper limit'
            type='number'
            name='upperLimit'
            value={upperLimit}
            onChange={handleUpperLimitChange}/>
            <div className='button-group'>
              <button type='submit'>Find Median</button>
            </div>
          </form>
         </div>
    </div>
  );
};

export default InputForm;