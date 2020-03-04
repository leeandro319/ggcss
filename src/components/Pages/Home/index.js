import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from '../../mainStyle'
import { HomeContainer, HeaderHome } from './StyleHome'

export default function Home() {
  return (
    <div>
      <Container>
        <HeaderHome>
          
          <h1>GG CSS</h1>
            <p>Facilite seu desenvolvimento de CSS!</p>
            <p>Selecione a propriedade que deseja criar, coloque os valores que necessita, e copie código o gerado para o seu código.</p>
          
        </HeaderHome>
      </Container>
      <Container>
        <HomeContainer> 
          <Link to="/border">Border</Link>
          <Link to="/borderradius">Borderradius</Link>
          <Link to="/boxshadow">Boxshadow</Link>
          <Link to="/textshadow">Textshadow</Link>
          <Link to="/transform">Transform</Link>
        </HomeContainer>
      </Container>
    </div>
  );
}
