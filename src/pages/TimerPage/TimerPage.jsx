import { SetTimer } from "../settimerpage/setTimer"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './TimerPage.scss'
import useTimer from 'easytimer-react-hook';

export const TimerPage = () => {
    const [timer, isTargetAchieved] = useTimer({
        countdown: true
    });
    const GoToPage = useNavigate();
    console.log(isTargetAchieved)
    const [myTime, setmyTime] = useState(10)
    const [color, setColor] = useState({key: 'black', hidden: false, })
    const ToggleMenu = () => {
        if (color.hidden) {
            setColor({key: 'black', hidden: false})
        } else {
           setColor({key: 'white', hidden: true}) 
        } 
    } 
    const menyText = {
        analog: 'ANALOG TIMER',
        digital: 'DIGITAL TIMER',
        visual: 'VISUAL TIMER',
        text: 'TEXT TIMER',
        circles: 'CIRCLES TIMER'
    }

    const decrease = () => {
        if ( myTime > 0 ) {setmyTime(myTime - 1)}
    }
    const increase = () => {
        setmyTime(myTime + 1)
    }
    const [toggleShow, settoggleShow] = useState(true)
    const [toggleTimer, setToggleTimer] = useState(false)
    let headline = 'Intervall'

    const startTimer = () => {
        timer.start({ startValues: {seconds: 0, minutes: myTime}})
        settoggleShow(false)
        setToggleTimer('Digital')
        console.log(timer.getTotalTimeValues().toString())
        console.log(timer.getTimeValues().minutes)
    }
    const [Pauser, setPauser] = useState(false)
    const [buttonText, setButtonText] = useState('Paus');
    const pausTimer = () => {
        if (!Pauser) {
            setPauser(true);
            timer.pause();
            setButtonText('Start')
        } else {
            setPauser(false);
            timer.start();
            setButtonText('Paus')
        }

        
    }

    return (
        <div className="timer--wrapper">
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
                        <div className="meny--wrapper">
                        <div className='meny--text' onClick={() => setToggleTimer('Analog')}>{menyText.analog}</div>
                        <div className='meny--text' onClick={() => setToggleTimer('Digital')}>{menyText.digital}</div>
                        <div className='meny--text' onClick={() => setToggleTimer('Visual')}>{menyText.visual}</div>
                        <div className='meny--text' onClick={() => setToggleTimer('Text')}>{menyText.text}</div>
                        <div className='meny--text' onClick={() => setToggleTimer('Circles')}>{menyText.circles}</div>
                    </div>
                )}
            { toggleShow && (
                <SetTimer myTime={myTime} increase={increase} decrease={decrease} startTimer={startTimer}/>
            )}
            { (toggleTimer == 'Digital') && !isTargetAchieved &&  (
                timer.getTotalTimeValues().hours > 0 ? 
                (<div >
                    <div>{timer.getTimeValues().toString(['hours', 'minutes', 'seconds'])}</div>
                    <button onClick={pausTimer}>{buttonText}</button>
                </div>) : 
                (<div >
                    <div >{timer.getTimeValues().toString(['minutes', 'seconds'])}</div>
                    <button onClick={pausTimer}>{buttonText}</button>
                </div>)
            )}
            { (toggleTimer == 'Analog') && !isTargetAchieved && (
                <div> 
                    <div >Analog Timer</div>
                    <button onClick={pausTimer}>{buttonText}</button>
                </div>
            )}
            { (toggleTimer == 'Visual') &&  !isTargetAchieved &&(
                <div>
                    <div>VVisual timer</div>
                    <button onClick={pausTimer}>{buttonText}</button>
                </div>
            )}
            { (toggleTimer == 'Text') && !isTargetAchieved && (
                <div>
                    <div>Text timer</div>
                    <button onClick={pausTimer}>{buttonText}</button>
                </div>
            )}
            { (toggleTimer == 'Circles') && !isTargetAchieved && (
                <div>
                    <div>Circles timer</div>
                    <button onClick={pausTimer}>{buttonText}</button>
                </div>
            )}
            
            { (isTargetAchieved) && (
                <div>
                    ALARM!!
                </div>
            )}
        </div>
    )
}