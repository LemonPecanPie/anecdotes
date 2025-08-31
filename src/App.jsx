import { useState } from 'react'

function getRandInt(max) {
  return Math.floor(Math.random() * max);
}

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}

const Header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const Stat = ({ numVotes }) => {
  return (
    <>
      <p>has {numVotes} votes</p>
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [votesArray, setVotesArray] = useState(new Uint8Array(anecdotes.length));

  const setToVotesArray = (votesArray) => {
    console.log('votesArray:', votesArray);
    const copy = [...votesArray];
    copy[selected]++;
    console.log('copy:', copy);
    setVotesArray(copy);
  };

  let idxOfMax = indexOfMax(votesArray);

  return (
    <div>
      <Header text='Anecdote of the day' />
      {anecdotes[selected]}
      <Stat numVotes={votesArray[selected]} />
      {/* {console.log('in return:', votesArray)} */}
      <Button onClick={() => setToVotesArray(votesArray)} text={'vote'} />
      <Button onClick={() => setSelected(getRandInt(anecdotes.length))} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      {anecdotes[idxOfMax]}
      <Stat numVotes={(votesArray[idxOfMax])} />
    </div>
  )
}

export default App