import { Timer } from "easytimer.js"

export const DigitalTimer = ( countDown  ) => {
    // console.log(minutes)
    // console.log(seconds)
    // const timer = new Timer()
    // timer.start({ countdown: true, startValues: {seconds: seconds, minutes: minutes}})
    console.log(countDown.getTotalTimeValues().toString())
    return (
        <div>
            <p>{countDown.getTotalTimeValues().toString(['minutes', 'seconds'])}</p>
        </div>
    )
}