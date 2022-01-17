import React from "react"
import ReactDOM from "react-dom"

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

ReactDOM.render(<App />, document.getElementById("root"))
