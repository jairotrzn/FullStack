import {useState} from 'react'
import Anecdotes from './components/Anecdotes'
import Buttom from './components/Buttom'
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected,setSelected] = useState(0)

  const nextAnecdote = () => {
    if(selected +1 >= anecdotes.length){
      setSelected(0)
    } else {
      setSelected(selected + 1)
    }
  }
  return(
    <div>
      <Anecdotes text={anecdotes[selected]}></Anecdotes>
      <Buttom onClick={nextAnecdote} text="Siguiente anecdota" ></Buttom>
    </div>
  )
}

export default App;
