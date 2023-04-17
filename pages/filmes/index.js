import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const index = () => {

    const [filmes, setFilmes] = useState([])
 
    useEffect(() => {
        apiFilmes.get('/movie/popular').then(resultado => {
            setFilmes(resultado.data.results)
        })
    }, [])


  return (
    <Pagina titulo='Filmes'>
        <h1>Lista de filmes mais populares</h1>
        <Row md={5} className="mb-3">
        {filmes.map(item => (
           <Col key={item.id}>
            <Card className='mb-3'>
            <Link href={'/'}> 
                <Card.Img variant='top'src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
            </Link>
           

          </Card>
          </Col>
          ))}
        
        
      </Row>
    </Pagina>
  )
}

export default index