import { useState } from 'react';

export const ColorPicker = () => {


const [selectedColor, setSelectedColor] = useState('#ff0000');
const [displayColor, setDisplayColor] = useState('#050505ff');

const recuperacionColor = (event) =>{
    const color = event.target.value;
    setSelectedColor(color);
}

const colorNuevo = () => {
    setDisplayColor(selectedColor);
    console.log(`Color nuevo: ${selectedColor}`);
}


    return(
        <>
        <div className='div-re'>
        <h1>Color Picker</h1>
        <p>Escoge un color</p>
        <input type="color" className='colorPicker' value={selectedColor} onChange={recuperacionColor}/>
        <button type="submit" onClick={colorNuevo} >Cambiar color</button>
        <p style={{color:displayColor}}>Color seleccionado {selectedColor}</p>
        <div  className="div-cambio"style={{color: selectedColor}}>
fsfssf
        </div>
        </div>
        
        </>
    )

}
