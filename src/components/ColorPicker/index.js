import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'


const ColorPicker = () => {

  const [displayColorPicker, setdisplayColorPicker] = useState(false)
  const [color, setColor] = useState({ r: '10', g: '10', b: '10', a: '10' })

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
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
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
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? <div style={styles.popover}>
        <div style={styles.cover} onClick={handleClose} />
        <SketchPicker color={color} onChange={handleChange} />
      </div> : null}
      {color.r}
    </div>
  );

}

export default ColorPicker;