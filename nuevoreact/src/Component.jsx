import React from 'react'
import { useState } from 'react'


function Component() {

    const [text, setText] = useState()
    const [text2, setText2] = useState()
    const [text3, setText3] = useState()
    const [text4, setText4] = useState()
    const [updated, setUpdated] = useState()


    const textOnChange = (Event) => {
        setText(Event.target.value)
    }
    const text2OnChange = (Event) => {
        setText(Event.target.value)
    }
    const text3OnChange = (Event) => {
        setText(Event.target.value)
    }
    const text4OnChange = (Event) => {
        setText(Event.target.value)
    }


    const buttonOnclick = () => {
        setUpdated(text)
        setUpdated(text2)
        setUpdated(text3)
        setUpdated(text4)
       
    }   


    return (
        <div align-items='center'> 
            <label htmlFor="">Rut de Empresa</label>
            <input type="text" VALUE onChange={textOnChange} />
            <label htmlFor="">Nombre de la Empresa</label>
            <input type="text" VALUE onChange={text2OnChange} />
            <label htmlFor="">Direccion de Empresa</label>
            <input type="text" VALUE onChange={text3OnChange} />
            <label htmlFor="">telefono de Empresa</label>
            <input type="text" VALUE onChange={text4OnChange} />

            <button onClick={buttonOnclick}>Guardar</button> 
            <p>Texto input : {text}</p>
            <p>Texto Actualizado: {updated}</p>
            </div>
    )
}

export default Component



