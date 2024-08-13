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
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const nextAnecdote = () => {
    setSelected((selected + 1) % anecdotes.length);
  };

  const voteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const mostVotedAnecdote = () => {
    const maxVotes = Math.max(...votes);
    const mostVotedIndex = votes.indexOf(maxVotes);
    return {
      text: anecdotes[mostVotedIndex],
      votes: maxVotes,
    };
  };

  const mostVoted = mostVotedAnecdote();

  return (
    <div>
      <Anecdotes text={anecdotes[selected]} />
      <h3>Votos de la anécdota: {votes[selected]}</h3>
      <Buttom onClick={nextAnecdote} text="Siguiente anécdota" />
      <Buttom onClick={voteAnecdote} text="Votar" />

      <h2>Anecdota con más votos</h2>
      {mostVoted.votes > 0 ? (
        <div>
          <p>{mostVoted.text}</p>
          <p>Tiene {mostVoted.votes} votos</p>
        </div>
      ) : (
        <p>Aún no hay votos.</p>
      )}
    </div>
  );
};

export default App;