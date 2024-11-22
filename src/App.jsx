
import './App.css'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

  const [bmi, setBmi] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [category, setCategory] = useState('');


  const calculateBmi = () => {
    const mass = parseFloat(document.getElementById('mass').value);
    const height = parseFloat(document.getElementById('height').value/100);

    if (mass && height) {
      const result = (mass / (height * height)).toFixed(2);
      setBmi(result);
      setShowResult(true);
      setCategory(getBmiCategory(result))
    }
  }
  const resetForm = () => {
    document.getElementById('mass').value = '';
    document.getElementById('height').value = '';
    // document.getElementById('age').value = '';
    setShowResult(false);
    setBmi('');
  }
  const getBmiCategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return 'Overweight';
    } else {
      return 'Treatment Needed';
    }
  }
  const getBackgroundColor = () => {
    switch (category) {
      case 'Underweight':
        return 'bg-warning';
      case 'Normal weight':
        return 'bg-primary';
      case 'Overweight':
        return 'bg-danger';
      case 'Obese':
        return 'bg-danger';
      default:
        return 'bg-danger';
    }
  }

  return (
    <>
      <div className='bg-dark d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
        <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>
          <h1 className='text-center'>BMI Calculator</h1>
          <p className='text-center mb-4'>Know your BMI</p>

          {showResult && (
          <div className={`result ${getBackgroundColor()} p-3 d-flex justify-content-center align-items-center flex-column mt-3 rounded-2 animate-fade-in`}>
            <h1>{bmi} <span>kg/m<sup>2</sup></span></h1>
            <p className='bmi-category'>{category}</p>
          </div>
        )}

          <div>
            <div className='my-3'>
              <TextField type='number' id="mass" className='w-100 no-spinner' label="Mass (kg)"  variant="outlined" />
            </div>
            <div className='my-3'>
              <TextField type='number' id="height" className='w-100 no-spinner' label="Height (cm)" variant="outlined" />
            </div>
            {/* <div className='my-3'> 
              <TextField type='number' id="age" className='w-100' label="Age"  variant="outlined" />
            </div> */}
            <div className='mb-3 d-flex justify-content-between'>
            <Button className='p-3' variant="contained" style={{width:'190px'}} color='success' onClick={calculateBmi}>Calculate</Button>
            <Button className='p-3' variant="outlined" style={{width:'190px'}} onClick={resetForm}>Reset</Button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
