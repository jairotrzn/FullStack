const Total = (props) =>{

    return(
      <div>
   <p>Total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises } exercises</p>
       </div>
    )
  }

  export default Total;