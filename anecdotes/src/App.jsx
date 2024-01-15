import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  )
}

const AnecdoteLine = (props) => {
  return (
    <div>
      <p>{props.text}<br></br>has {props.points} votes</p>
    </div>
  )
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

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  // Generates a random integer from 0 to rangeMax - 1
  const generateRandomInt = (rangeMax) => Math.floor(Math.random() * rangeMax)

  const getRandomAnecdote = () => setSelected(generateRandomInt(anecdotes.length))

  const voteForCurrentAnecdote = () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
  }

  return (
    <div>
      <AnecdoteLine text={anecdotes[selected]} points={points[selected]}/>
      <div style={{ display: 'flex', gap: '2px'}}>
        <Button handleClick={voteForCurrentAnecdote} text="Vote" />
        <Button handleClick={getRandomAnecdote} text="Next anecdote" />
      </div>
    </div>
  )
}

export default App