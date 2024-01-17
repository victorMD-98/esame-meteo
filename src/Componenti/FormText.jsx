import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function FormText() {
    const [citta, setcitta] = useState("")
    const [valore, setvalore]= useState("")
    const navigate = useNavigate()

  return (
    <>           
        <Form.Control onChange={(e)=>setvalore(e.target.value)} className='mb-4' type="text" placeholder="inserisci citta" />
        <Button onClick={()=>{setcitta(valore);navigate("/risultato/"+ valore)}} className=' mb-4' variant="dark">Meteo</Button>    
    </>
  )
}
