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
        {parts.map(part => <p key={part.id}>{part.name}: {part.exercises} exercises</p> )}
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

  export default Course