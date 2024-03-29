import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function FormSelect() {
  return (
    <>
            <Form.Select className='mb-4 w-100' aria-label="Floating label select example">
                <option>Selezziona Regione </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            
            <Form.Select className='mb-4' aria-label="Floating label select example">
                <option>Selezziona Provincia </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select className='mb-4' aria-label="Floating label select example">
                <option>Selezziona Città </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Button className=' mb-4' variant="dark">Meteo</Button>
            
    </>
  )
}
