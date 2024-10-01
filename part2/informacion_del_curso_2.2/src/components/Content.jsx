import Part from "./Part";

const Content = ({parts}) =>{
  const sumExer = parts.reduce((total, part) => total + part.exercises,0);
    return(
      <div>        
        {parts.map((part) => {
  
         return <Part part = {part}/>
        })}
        <b>Total of {sumExer} exercises</b>
      </div>
    )
  }

  export default Content;