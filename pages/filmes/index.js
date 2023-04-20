import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const index = ({filmes}) => {

  return (
    <Pagina titulo='Filmes'>
        <h1>Lista de filmes mais populares</h1>
        <Row md={4} className="mb-3">
        {filmes.map(item => (
           <Col key={item.id}>
            <Card className='mb-3'>
                <Card.Img  height="150" width="300" variant='top'src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
            <Card.Body>
              <Card.Title className='text-center' >{item.title}</Card.Title>
              <p>Lançamento: {item.release_date}</p>
              <p>Nota: {item.vote_average}</p>
              <Button href={'/filmes/' + item.id} variant="danger" >Detalhes</Button>
              
            </Card.Body>
          </Card>
          </Col>
          ))}
        
        
      </Row>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiFilmes.get('/movie/popular?language=pt-BR')
  const filmes = resultado.data.results
  return {
    props: {filmes}, // will be passed to the page component as props
  }
}