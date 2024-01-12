import { useState } from 'react'

const Statistics = ({good, neutral, bad, allClicks, average, posPercent}) => {
  if (allClicks === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback is given</p>
      </div>
    )
  }
  
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {allClicks}</p>
      <p>Average: {average}</p>
      <p>Positive (%): {posPercent}%</p>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [posPercent, setPositivePercentage] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
    calculateStatistics(good+1, bad, allClicks+1)
  }
  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
    calculateStatistics(good, bad, allClicks+1)
  }
  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
    calculateStatistics(good, bad+1, allClicks+1)
  }

  const calculateStatistics = (good, bad, allClicks) => {
    setAverage((good - bad) / allClicks);
    setPositivePercentage((good / allClicks) * 100);
  };


  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} average={average} posPercent={posPercent} />
    </div>
  )
}

export default App