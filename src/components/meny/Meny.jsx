import './Meny.scss'

export const Meny = ( setToggleTimer ) => {
    const menyText = {
        analog: 'ANALOG TIMER',
        digital: 'DIGITAL TIMER',
        visual: 'VISUAL TIMER',
        text: 'TEXT TIMER',
        circles: 'CIRCLES TIMER'
    }

    const setDigital = () => {
        setToggleTimer('Digital');
    }
    const setAnalog = () => {
        setToggleTimer('Analog')
    }
    return (
        <>
        <div className="meny--wrapper">
            <div className='meny--text' onClick={setAnalog}>{menyText.analog}</div>
            <div className='meny--text' onClick={setDigital}>{menyText.digital}</div>
            <div className='meny--text' onClick={() => setToggleTimer('Visual')}>{menyText.visual}</div>
            <div className='meny--text' onClick={() => setToggleTimer('Text')}>{menyText.text}</div>
            <div className='meny--text' onClick={() => setToggleTimer('Circles')}>{menyText.circles}</div>
        </div>
        </>
    )
}