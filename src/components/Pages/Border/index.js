import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, DivAround, SecAround, SecAround2, DivRange } from '../../mainStyle';
import { BorderStyle } from './BorderStyle'

import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'

export default function Border() {

  const [borderStyle, setBorderStyle] = useState('solid');

  const [borderWidth, setBorderWidth] = useState('1');

  const [displayColorPicker, setdisplayColorPicker] = useState(false)
  const [color, setColor] = useState({ r: '0', g: '0', b: '0', a: '1' })

  function borderWidthChange(e) {
    setBorderWidth(e.target.value)
  }

  function borderChange(e) {
    setBorderStyle(e.target.value)
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

  function ClearValuesBorder() {
    setBorderStyle('solid')
    setBorderWidth(1)
    setColor({ r: '0', g: '0', b: '0', a: '1' })
  }

  return (
    <div>
      <Container>
        <h1>Border</h1>
      </Container>

      <Container>
        <BorderStyle
          borderWidth={borderWidth}
          borderStyle={borderStyle}
          borderColorR={color.r}
          borderColorG={color.g}
          borderColorB={color.b}
          borderColorA={color.a}
        />
      </Container>
      <Container>

        <SecAround>
          <p>Insira os valores desejados, depois copie o novo código em sua folha de estilo.</p>

          <DivRange>
            <label>Select Border Style</label>
            <select value={borderStyle} onChange={borderChange}>
              <option value="dotted">dotted</option>
              <option value="dashed">dashed</option>
              <option value="solid">solid</option>
              <option value="double">double</option>
            </select>
          </DivRange>

          <DivRange>
            <label>Select Border Width</label>
            <input type="range" min={0} max={50} value={borderWidth} className="slider" onChange={borderWidthChange} />
          </DivRange>

          <DivRange>
            <label>Select Border Color:</label>
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

        </SecAround>

        <SecAround2>

          <DivAround>
            <span>border-style: {borderStyle}</span>
            <span>border-width: {borderWidth}px {borderWidth}px {borderWidth}px {borderWidth}px</span>
            <span>border-color: rgba({color.r},{color.g},{color.b}, {color.a})</span>

            <div className="painel">
              <button onClick={ClearValuesBorder}>Resetar Valores</button>
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
