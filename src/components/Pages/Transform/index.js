import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, DivAround, SecAround, SecAround2, DivRange } from '../../mainStyle';
import { BoxTrasnform } from './TransforStyle'


const TransformCss = () => {


  const [rotateOBJ, setRotateOBJ] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [screwX, setScrewX] = useState(0);
  const [screwY, setScrewY] = useState(0);

  function changeRotate(e) {
    setRotateOBJ(e.target.value)

  }

  function changeRotateX(e) {
    setTranslateX(e.target.value)


  }
  function changeRotateY(e) {
    setTranslateY(e.target.value)

  }

  function changeScrewX(e) {
    setScrewX(e.target.value)

  }
  function changeScrewY(e) {
    setScrewY(e.target.value)

  }

  function ClearValues() {
    setRotateOBJ(0)
    setTranslateX(0)
    setTranslateY(0)
    setScrewX(0)
    setScrewY(0)

  }

  return (
    <div>
      <Container>
        <h1>CSS transform</h1>

      </Container>

      <Container>
        <BoxTrasnform
          rotateObj={rotateOBJ}
          translateX={translateX}
          translateY={translateY}
          screwX={screwX}
          screwY={screwY}

        />
      </Container>
      <Container>

        <SecAround>
          <p>Insira os valores desejados, depois copie o novo código em sua folha de estilo.</p>



          <DivRange>
            <label>Translate X:</label>
            <input type="range" min={-200} max={200} value={translateX} className="slider" onChange={changeRotateX} />
          </DivRange>

          <DivRange>
            <label>Translate Y:</label>
            <input type="range" min={-200} max={200} value={translateY} className="slider" onChange={changeRotateY} />
          </DivRange>

          <DivRange>
            <label>Skew X:</label>
            <input type="range" min={-90} max={90} value={screwX} className="slider" onChange={changeScrewX} />
          </DivRange>

          <DivRange>
            <label>Skew y:</label>
            <input type="range" min={-90} max={90} value={screwY} className="slider" onChange={changeScrewY} />
          </DivRange>

          <DivRange>
            <label>Rotate:</label>
            <input type="range" min={0} max={360} value={rotateOBJ} className="slider" onChange={changeRotate} />
          </DivRange>

        </SecAround>

        <SecAround2>

          <DivAround>
            <span>transform: rotate({rotateOBJ}deg) skew({screwX}deg, {screwY}deg) translate({translateX}px, {translateY}px);</span><br />
            <span>-webkit-transform: rotate({rotateOBJ}deg) skew({screwX}deg, {screwY}deg) translate({translateX}px, {translateY}px);</span><br />
            <span>-moz-transform: rotate({rotateOBJ}deg) skew({screwX}deg, {screwY}deg) translate({translateX}px, {translateY}px);</span> <br />

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

export default TransformCss;
