import './loading.scss'
import { useNavigate } from 'react-router-dom'

const LoadingVy = () => {
    const GoToPage = useNavigate()

    const GoToSetTimer = () => {
        GoToPage('/timer')
    }
    return (
        <>
            <div className="loading--wrapper">
                <div>
                    <div className='icon' onClick={GoToSetTimer}>
                        <figure className='icon-one'></figure>
                        <figure className='icon-two'></figure>
                        <figure className='icon-three'></figure>
                        <figure className='icon-four'></figure>
                    </div>
                </div>
                <h1>INTERVALL</h1>
                <h2>For all your timing needs</h2>
            </div>
        </>
    )
}

export default LoadingVy