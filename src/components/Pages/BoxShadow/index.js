import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { Container, DivAround, SecAround, SecAround2, DivRange } from '../../mainStyle';
import { ShadowBoxStyle } from './ShadowStyle'

import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'


const ShadowBox = () => {

  const [Hlength, setHlength] = useState(10);
  const [Vlength, setVlength] = useState(10);
  const [BRadius, setBRadius] = useState(10);
  const [SRadius, setSRadius] = useState(10);

  const [displayColorPicker, setdisplayColorPicker] = useState(false)
  const [color, setColor] = useState({ r: '5', g: '5', b: '5', a: '0.2' })

  function handleClick() {
    setdisplayColorPicker(!displayColorPicker)
  }

  function handleClose() {
    setdisplayColorPicker(false)
  }

  function handleChange(color) {
    setdisplayColorPicker(color.rgb)
    setColor(color.rgb)
  }

  const styles = reactCSS({
    'default': {
      color: {
        width: '195px',
        height: '7px',
        borderRadius: '5px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        marginTop: '10px',
        padding: '0',
        background: '#fff',
        borderRadius: '5px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',

      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  function ChangeHorizontalLength(e) {
    setHlength(e.target.value)

  }

  function ChangeVerticalLength(e) {
    setVlength(e.target.value)
  }

  function ChangeBlurRadius(e) {
    setBRadius(e.target.value)
  }

  function ChangeSpreadRadius(e) {
    setSRadius(e.target.value)
  }

  function ClearValuesShadow() {
    setHlength(0)
    setVlength(0)
    setBRadius(0)
    setSRadius(0)
  }

  return (
    <div>
      <Container>
        <h1>BoxShadow</h1>
      </Container>

      <Container>
        <ShadowBoxStyle
          Hlength={Hlength}
          Vlength={Vlength}
          BRadius={BRadius}
          SRadius={SRadius}
          colorR={color.r}
          colorG={color.g}
          colorB={color.b}
          colorA={color.a}
        />
      </Container>
      <Container>

        <SecAround>
          <p>Insira os valores desejados, depois copie o novo código em sua folha de estilo.</p>

          <DivRange>
            <label>Select Shadow Color:</label>
            <br />
            <div>
              <div style={styles.swatch} onClick={handleClick}>
                <div style={styles.color} />
              </div>
              {displayColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={handleClose} />
                <ChromePicker color={color} onChange={handleChange} />
              </div> : null}
            </div>
          </DivRange>

          <DivRange>
            <label>Horizontal Length</label>
            <input type="range" min={-200} max={200} value={Hlength} className="slider" onChange={ChangeHorizontalLength} />
          </DivRange>

          <DivRange>
            <label>Vertical Length</label>
            <input type="range" min={-200} max={200} value={Vlength} className="slider" onChange={ChangeVerticalLength} />
          </DivRange>

          <DivRange>
            <label>Blur Radius</label>
            <input type="range" min={0} max={300} value={BRadius} className="slider" onChange={ChangeBlurRadius} />
          </DivRange>

          <DivRange>
            <label>Spread Radius</label>
            <input type="range" min={-220} max={220} value={SRadius} className="slider" onChange={(ChangeSpreadRadius)} />
          </DivRange>





        </SecAround>

        <SecAround2>

          <DivAround>


            <span>-webkit-box-shadow: {Hlength}px {Vlength}px {BRadius}px {SRadius}px rgba({color.r},{color.g},{color.b},{color.a});</span><br />
            <span>-moz-box-shadow: {Hlength}px {Vlength}px {BRadius}px {SRadius}px rgba({color.r},{color.g},{color.b},{color.a});</span><br />
            <span>box-shadow: {Hlength}px {Vlength}px {BRadius}px {SRadius}px rgba({color.r},{color.g},{color.b},{color.a});</span> <br />

            <div className="painel">
              <button onClick={ClearValuesShadow}>Resetar Valores</button>
            </div>
            <div className="painel">
            <Link to="/"><button>Voltar para Home</button></Link>
            </div>

          </DivAround>


        </SecAround2>

      </Container>

    </div>
  );
}

export default ShadowBox;