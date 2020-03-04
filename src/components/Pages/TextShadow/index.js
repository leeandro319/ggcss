import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, DivAround, SecAround, SecAround2, DivRange } from '../../mainStyle';
import { ShadowText } from './TextStyle'

import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'

export default function TextShadow() {

  const [hoffset, setHoffset] = useState(10)
  const [voffset, setVoffset] = useState(10)
  const [blur, setBlur] = useState(2)

  const [displayColorPicker, setdisplayColorPicker] = useState(false)
  const [color, setColor] = useState({ r: '0', g: '0', b: '0', a: '0.4' })

  function changeHorizontalOffiset(e) {
    setHoffset(e.target.value)
  }

  function changeVerticalOffiset(e) {
    setVoffset(e.target.value)
  }

  function changeBlur(e) {
    setBlur(e.target.value)
  }

  function resetValues() {
    setHoffset(0)
    setVoffset(0)
    setBlur(0)
    setColor({ r: '0', g: '0', b: '0', a: '0.4' })
  }


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



  return (
    <div>
      <Container>
        <h1>TextShadow</h1>
      </Container>

      <Container>
        <ShadowText
          colorR={color.r}
          colorG={color.g}
          colorB={color.b}
          colorA={color.a}
          hoffset={hoffset}
          voffset={voffset}
          blurText={blur}>

          Your Text</ShadowText>

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
            <label>Select Horizontal offset:</label>
            <input type="range" min={-40} max={40} value={hoffset} className="slider" onChange={changeHorizontalOffiset} />
          </DivRange>

          <DivRange>
            <label>Select Vertical offset:</label>
            <input type="range" min={-40} max={40} value={voffset} className="slider" onChange={changeVerticalOffiset} />
          </DivRange>

          <DivRange>
            <label>Select Shadow blur:</label>
            <input type="range" min={0} max={20} value={blur} className="slider" onChange={changeBlur} />
          </DivRange>

        </SecAround>

        <SecAround2>

          <DivAround>
            <span> text-shadow: {hoffset}px {voffset}px {blur}px rgba({color.r},{color.g},{color.b}, {color.a})</span>

            <div className="painel">
              <button onClick={resetValues}>Resetar Valores</button>
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
