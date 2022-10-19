import React, { useState } from 'react';
import './App.css';
import { getOptions, myInfo } from './clients/UserInfo'


function App() {
  const [currentOption, setCurrentOption] = useState('Información personal')
  const options = getOptions()

  const infoForDisplay = () => {
    return myInfo.find((value) => {
      return value.title === currentOption;
    })
  }

  return (
    <div className="App">
      <div className='image-container'>
        <img className='image' src='/logo192.png' />
      </div>
      <div className='options-container'>
        {options.map((option) => {
          const isSelected = option === currentOption;
          return (
            <div 
              key={option}
              className={isSelected ? 'option-selected' : 'option'}
              onClick={() => setCurrentOption(option)}
            >
              {option}
            </div>
          )
        })}
      </div>
      <div className='description'>
        <h2>{infoForDisplay().title}</h2>
        <p>{infoForDisplay().description}</p>
        {infoForDisplay().skills && infoForDisplay().skills.map((skill) => {
          return (
            <div key={skill.title}>
              <p><strong>{skill.title}</strong></p>
              <p>{skill.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
