import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const index = ({atores}) => {

  return (
    <Pagina titulo='Atores'>
        <h1>Lista de atores mais populares</h1>
        <Row md={4} className="mb-3">
        {atores.map(item => (
           <Col key={item.id}>
            <Card className='mb-3'>
              <Link href={'/atores/' + item.id}>
                <Card.Img variant='top'src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />  
              </Link>
          </Card>
          </Col>
          ))}
        
        
      </Row>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiFilmes.get('/person/popular?language=pt-BR')
  const atores = resultado.data.results
  return {
    props: {atores}, // will be passed to the page component as props
  }
}