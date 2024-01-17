import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiKey } from '../Assets/Dati'
import { Container, ListGroup } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function Risultato() {

    const [tempo, settempo]= useState({})

    const {citta} = useParams()
    console.log(tempo, citta);

    useEffect(()=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+citta+"&appid="+ApiKey+"&units=metric").then(response=>response.json()).then(json=>{console.log(json);settempo(json)})
    },[]);

  return (
    <>
       {tempo.name && <Container className='w-50'>
            <h3>In {tempo.name} the weather is {tempo.weather[0].main}</h3>
            <ListGroup>
                <ListGroup.Item>Humidity : {tempo.main.humidity} g / m³</ListGroup.Item>
                <ListGroup.Item><i className="bi bi-thermometer-low"></i> Temperature : {tempo.main.temp}</ListGroup.Item>
                <ListGroup.Item><i className="bi bi-thermometer-low"></i> Temperature Max : {tempo.main.temp_max}</ListGroup.Item>
                <ListGroup.Item><i className="bi bi-thermometer-low"></i> Temperature Min : {tempo.main.temp_min}</ListGroup.Item>
                <ListGroup.Item><i className="bi bi-wind"></i> Wind Speed : {tempo.wind.speed}</ListGroup.Item>
            </ListGroup>
        </Container>}
    </>
  )
}
