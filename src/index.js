import React, { useState } from "react"
import ReactDOM from "react-dom"

/* CODE of 1.3 to 1.5
const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ content }) => {
  return (
    <>
      {content.map((element, key) => (
        <Element
          key={key}
          title={element.title}
          excercises={element.excercises}
        />
      ))}
    </>
  )
}

const Element = ({ title, excercises }) => {
  return (
    <p>
      {title} : {excercises}
    </p>
  )
}

const Total = ({ content }) => {
  const sum = content.reduce((total, element) => {
    return total + element.excercises
  }, 0)

  return <p>Number of excercises : {sum}</p>
}

const App = () => {
  const course = {
    name: " Half Stack application development",
    parts: [
      {
        title: "Fundamentals of React",
        excercises: 10,
      },
      {
        title: "Using props to pass data",
        excercises: 7,
      },
      {
        title: "State of a component",
        excercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  )
}
*/

/* Code of 1.6 to 1.11
const Header = () => {
  return <h1>GIVE FEEDBACK</h1>
}

const Button = ({ text, value, setState }) => {
  const handleClick = () => {
    setState(value + 1)
  }

  return <button onClick={handleClick}>{text}</button>
}

const Statistic = ({ name, value, hasPercent = false }) => {
  return (
    <tr>
      <th>{name}</th>
      <th>{hasPercent ? value * 100 + " %" : value}</th>
    </tr>
  )
}

const Statistics = ({ values }) => {
  const total = values.reduce((total, element) => {
    return total + element.value
  }, 0)

  const average =
    values.reduce((total, element) => {
      const value =
        element.name === "good" ? 1 : element.name === "bad" ? -1 : 0

      return total + element.value * value
    }, 0) / total

  const positive = values[0].value / total

  return (
    <div>
      <h1>STATISTICS</h1>
      {total !== 0 ? (
        <table>
          <tbody>
            {values.map((value, key) => (
              <Statistic key={key} name={value.name} value={value.value} />
            ))}

            <Statistic name={"total"} value={total} />
            <Statistic name={"average"} value={average} />
            <Statistic name={"positive"} value={positive} hasPercent />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const values = [
    { name: "good", value: good },
    { name: "neutral", value: neutral },
    { name: "bad", value: bad },
  ]

  return (
    <div>
      <Header />

      <Button value={good} setState={setGood} text={"good"} />
      <Button value={neutral} setState={setNeutral} text={"neutral"} />
      <Button value={bad} setState={setBad} text={"bad"} />

      <Statistics values={values} />
    </div>
  )
}

*/

// Code of 1.12 to 1.14

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const total = anecdotes.length
  const [votes, setVotes] = useState(Array(total).fill(0))
  const [popularAnecdote, setPopularAnecdote] = useState(undefined)

  const handleSelectedItem = () => {
    setSelected(Math.floor(Math.random() * total))
  }
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] = newVotes[selected] + 1
    setVotes(newVotes)
    setPopularAnecdote(anecdotes[votes.indexOf(Math.max(...votes))])
  }
  console.log(popularAnecdote)

  return (
    <div>
      <h1>ANECDOTE OF THE DAY</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSelectedItem}>next anecdote</button>
      {popularAnecdote ? (
        <>
          <h1>ANECDOTE WITH MOST VOTES</h1>
          <p>{popularAnecdote}</p>
          <p>has {Math.max(...votes)} votes</p>
        </>
      ) : null}
    </div>
  )
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"))
