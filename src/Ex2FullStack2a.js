/*  Exercices 2.1 - 2.5, from https://fullstackopen.com/en/part2/rendering_a_collection_modules#exercises-2-1-2-5 */
const Header = (props) => {
    return(
      <>
         <h1>{props.course.name}</h1>
      </>
    )
  }
  
  const Content = ({parts}) => {
    return(
    <div>
        {parts.map(part => <p>{part.name}: {part.exercises} exercises</p> )}
    </div>
    )}


  const Total = ({parts}) =>{
    let initialValue=0;
    
    return(
      <div> 
        <p>Total number of exercises {parts.reduce((accumulator, object)=> accumulator + object.exercises, initialValue)} </p>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course = {course} />
        <Content parts = {course.parts} />  
        <Total parts = {course.parts}/>
      </div>
    )
  }

  const Courses = ({courses}) => {
    return(
        <div>{courses.map(course => <Course course={course}/>)}</div>
    )
  }

const Ex2FullStack2a = () => {
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
  
    return <Courses courses={courses} />
  }
  
  export default Ex2FullStack2a