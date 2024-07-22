const Content = (props) =>{
    return(
      <div>
        <p>{props.parts1 + " " + props.exercises1}</p>
        <p>{props.parts2 + " " + props.exercises2}</p>
        <p>{props.parts3 + " " + props.exercises3}</p>
  
      </div>
    )
  }

  export default Content;