import { useState } from 'react'

const Statistics = (props) => {
  if (props.allClicks === 0) {
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
      <table>
        <tbody>
          <tr>
            <StatisticLine text="Good: " value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="Neutral: " value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="Bad: " value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="All: " value={props.allClicks} />
          </tr>
          <tr>
            <StatisticLine text="Average: " value={props.average} />
          </tr>
          <tr>
            <StatisticLine text="Positive (%): " value={props.posPercent} />
          </tr>
        </tbody>
      </table>
  </div>
  )
}

const StatisticLine = ({text, value}) => (
<>
  <td>
    {text}
  </td>
  <td>
    {text === "Positive (%): " 
      ? `${value}%`
      : `${value}`}
  </td>
</>
)

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
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
    setAverage(((good - bad) / allClicks).toFixed(1));
    setPositivePercentage(((good / allClicks) * 100).toFixed(1));
  };


  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={handleGoodClick} text="Good" />
        <Button handleClick={handleNeutralClick} text="Neutral" />
        <Button handleClick={handleBadClick} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} average={average} posPercent={posPercent} />
    </div>
  )
}

export default App