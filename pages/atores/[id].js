import React from 'react'
import Pagina from '../../components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'
import apiFilmes from '../../services/apiFilmes'
import Link from 'next/link'

const detalhesAtor = ({ator, filmes, imagens}) => {
  return (
    <Pagina titulo={ator.name}>
        <Row className="mb-3">
            <Col md={3}>
                <Card className='mb-3'>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />

                </Card>
            </Col>
            <Col md={9}>
                <p><strong>Data de nascimento:</strong> {ator.birthday}</p>
                <p><strong>Local de nascimento:</strong> {ator.place_of_birth}</p>
                <p>{ator.biography}</p>

            </Col>
        
        
      </Row>
      <Row className="mb-3">
        <h2>Imagens</h2>
        {imagens.map(item => (
           <Col md={1}>
            <Card className='mb-3'>
            <Link href={'/atores/' + item.id}> 
                <Card.Img variant='top'src={'https://image.tmdb.org/t/p/w500/' + item.file_path} />
            </Link>
          </Card>
          </Col>
          ))}
      </Row>
      <Row className="mb-3" >
        <h2>Filmes em que atou</h2>
        {filmes.map(item => (
           <Col md={2}>
            <Card className='mb-3'>
            <Link href={'/filmes/' + item.id}> 
                <Card.Img variant='top'src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
            </Link>
          </Card>
          </Col>
          ))}
      </Row>
    </Pagina>
  )
}

export default detalhesAtor

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/person/' + id + '?language=pt-BR')
    const ator = resultado.data

    const resFilmes = await apiFilmes.get('/person/' + id + '/movie_credits?language=pt-BR')
    const filmes = resFilmes.data.cast

    const resImagens = await apiFilmes.get('/person/' + id + '/images?language=pt-BR')
    const imagens = resImagens.data.profiles    

    return {
      props: {ator, filmes, imagens},
    }
  }