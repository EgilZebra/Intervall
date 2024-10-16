import { useState } from 'react';
import { Meny } from './meny/Meny';
import './Header.scss';

export const Header = ({ headline, setToggleTimer }) => {

    const [color, setColor] = useState({key: 'black', hidden: false, })
    const ToggleMenu = () => {
        if (color.hidden) {
            setColor({key: 'black', hidden: false})
        } else {
           setColor({key: 'white', hidden: true}) 
        } 
    } 

    const setDigital = () => {
        setToggleTimer('Digital');
    }
    const setAnalog = () => {
        setToggleTimer('Analog')
    }
    return (
        <>
        <nav className='header--wrapper'>   
            <div style={{ zIndex: 5}} className="header--meny" onClick={ToggleMenu}>
                <figure style={{backgroundColor: color.key}} className='menu--icon menu--icon-one'></figure>
                <figure style={{backgroundColor: color.key}} className='menu--icon menu--icon-two'></figure>
                <figure style={{backgroundColor: color.key}} className='menu--icon menu--icon-three'></figure>
                <figure style={{backgroundColor: color.key}} className='menu--icon menu--icon-four'></figure>
            </div>
            <h1>{headline}</h1>
        </nav>
        { color.hidden && (
                <Meny setToggleTimer={setToggleTimer} digital={setDigital} analog={setAnalog}  />
        )}
        </>
    )
}