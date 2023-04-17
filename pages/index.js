import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Cabecalho from "../components/Cabecalho";
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <div>
      <Pagina titulo = 'Página Inicial'>
      <Container>
      <h1>Hello World!</h1>
      <p>Parágrafo 1</p>
      <p>Parágrafo 2</p>
      <p>Parágrafo 3</p>
      </Container>
      </Pagina>
      
    </div>
  )
}
