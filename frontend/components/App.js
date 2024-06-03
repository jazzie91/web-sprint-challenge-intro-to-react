import React from 'react'
import axios from 'axios'
import Character from './Character'
import { useEffect, useState } from 'react'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'


    function App() {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        
        async function getData(){
          const[peopleRes, planetsRes] = await Promise.all([axios.get(urlPeople), axios.get(urlPlanets)])
          let people = peopleRes.data.map(person => {
            return {
            ...person,
            homeworld: planetsRes.data.find(planet => planet.id === person.homeworld)}
        });
        setData(people)
        }
        getData()
    }, 
      []);
      
      
      return (
    <div>
      <h2>Star Wars Characters</h2>
          <p>See the README of the project for instructions on completing this challenge</p>
        {data.map(person => 
          <Character key={person.id} data={person}/>
        )}
        
    </div>
  
  )}


export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
