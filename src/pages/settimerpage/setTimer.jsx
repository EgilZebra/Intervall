
export const SetTimer = ({ myTime, increase, decrease, startTimer }) => {

    return (
        <>
            <div className="setTimer--wrapper">
                <div className="setTimer--BigTimer">
                    <button onClick={decrease}>
                        decrease
                    </button>
                    <div>
                        {myTime} minutes
                    </div>
                    <button onClick={increase}>increase</button>
                    </div>
                <div> 
                    <p>enable intervals

                    </p>
                </div>
                <div > 
                    <button onClick={startTimer}>start button</button></div>
            </div>
        </>
    )
}