import React, { useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import FormText from '../Componenti/FormText'
import FormSelect from '../Componenti/FormSelect'



export default function HomePage() {

    
  return (
    <>
        <Container className='w-50 mt-4'>
            <Row>
                <Col>
                    <FormText />
                </Col>
                <Col>
                    <FormSelect/>
                </Col>
            </Row>
        </Container>
    </>
  )
}
