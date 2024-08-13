import {useState} from 'react'
import Statics from '../../unicafe_9/src/components/Statics'

const App = () =>{
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const handleGoodButtom = () => setGood(good+1)
  const handleNeutralButtom = () => setNeutral(neutral+1)
  const handleBadButtom = () => setBad(bad+1)

  const total = good + neutral + bad
  const average = (good - bad) /total
  const positive = (100 * good) / total

  return(
    <div>
      <h1>Give feedback</h1>
    <div>
      <button onClick={handleGoodButtom}>good</button>
      <button onClick={handleNeutralButtom}>neutral</button>
      <button onClick={handleBadButtom}>bad</button>

    </div>
      <h2>statics</h2>
      <Statics text="good" value={good} ></Statics>
      <Statics text="neutral" value={neutral}></Statics>
      <Statics text="bad" value={bad}></Statics>
      <Statics text="All" value={total} ></Statics>
      <Statics text="average" value={average}></Statics>
      <Statics text="positive" value={positive}></Statics>
    </div>
  )

}

export default App;
