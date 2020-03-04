import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, DivAround, SecAround, SecAround2, DivRange } from '../../mainStyle';
import { BoxStyleRadius } from './boxStyleRadius'


const BorderRadius = () => {


  const [topLBorder, setTopLBorder] = useState(0);
  const [topRBorder, setTopRBorder] = useState(0);
  const [bottomRBorder, setBottomRBorder] = useState(0);
  const [bottomLBorder, setBottomLBorder] = useState(0);

  function LeftTopChangeValue(e) {
    setTopLBorder(e.target.value)

  }
  function RightTopChangeValue(e) {
    setTopRBorder(e.target.value)


  }
  function RightBottomChangeValue(e) {
    setBottomRBorder(e.target.value)


  }
  function LeftBottomChangeValue(e) {
    setBottomLBorder(e.target.value)

  }

  function ClearValues() {
    setTopLBorder(0)
    setTopRBorder(0)
    setBottomRBorder(0)
    setBottomLBorder(0)
  }

  return (
    <div>
      <Container>
        <h1>Border Radius</h1>

      </Container>

      <Container>
        <BoxStyleRadius
          valorLTop={topLBorder}
          valorRTop={topRBorder}
          valorRBottom={bottomRBorder}
          valorLBottom={bottomLBorder}
        />
      </Container>
      <Container>

        <SecAround>
          <p>Insira os valores desejados, depois copie o novo código em sua folha de estilo.</p>

          <DivRange>
            <label>Top Left</label>
            <input type="range" min={0} max={200} value={topLBorder} className="slider" onChange={LeftTopChangeValue} />
          </DivRange>

          <DivRange>
            <label>Top Right</label>
            <input type="range" min={0} max={200} value={topRBorder} className="slider" onChange={RightTopChangeValue} />
          </DivRange>

          <DivRange>
            <label>Bottom Left</label>
            <input type="range" min={0} max={200} value={bottomLBorder} className="slider" onChange={LeftBottomChangeValue} />
          </DivRange>

          <DivRange>
            <label>Bottom Right</label>
            <input type="range" min={0} max={200} value={bottomRBorder} className="slider" onChange={RightBottomChangeValue} />
          </DivRange>

        </SecAround>

        <SecAround2>

          <DivAround>
            <span>border-radius: {topLBorder}px {topRBorder}px {bottomRBorder}px {bottomLBorder}px;</span><br />
            <span>-moz-border-radius: {topLBorder}px {topRBorder}px {bottomRBorder}px {bottomLBorder}px;</span><br />
            <span>-webkit-border-radius: {topLBorder}px {topRBorder}px {bottomRBorder}px {bottomLBorder}px;</span> <br />

            <div className="painel">
              <button onClick={ClearValues}>Resetar Valores</button>
            </div>
            <div className="painel">
            <Link to="/"><button>Voltar para Home</button></Link>
            </div>
          </DivAround>


        </SecAround2>

      </Container>


    </div>
  );



};

export default BorderRadius;
