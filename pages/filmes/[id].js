import React from 'react'
import apiFilmes from '../../services/apiFilmes'
import Pagina from '../../components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'
import moment from 'moment'
import Link from 'next/link'


const Detalhes = ({filme, atores}) => {
  return (
    <Pagina titulo={filme.title}>
        <Row className="mb-3">
            <Col md={3}>
                <Card className='mb-3'>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />

                </Card>
            </Col>
            <Col md={9}>
                <p><strong>Lançamento:</strong> {filme.release_date}</p>
                <p><strong>Nota:</strong> {filme.vote_average}</p>
                <p><strong>Orçamento:</strong> {filme.budget}</p>
                <p><strong>Duração:</strong> {filme.runtime} min</p>
                <div><strong>Gêneros:</strong>
                  <ul>
                    {filme.genres.map(item => (
                      <li>{item.name}</li>
                    ) )}
                  </ul>
                </div>
                <p>{filme.overview}</p>
            </Col>
        
        
      </Row>
      <Row className="mb-3">
        <h2>Atores</h2>
        {atores.map(item => (
           <Col md={2}>
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

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/movie/' + id + '?language=pt-BR')
    const filme = resultado.data

    const resAtores = await apiFilmes.get('/movie/' + id + '/credits?language=pt-BR')
    const atores = resAtores.data.cast

    return {
      props: {filme, atores},
    }
  }