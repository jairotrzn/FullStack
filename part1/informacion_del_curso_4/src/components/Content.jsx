import Parts from "./Parts";

const Content = (props) =>{
    return(
      <div>
  <Parts part={props.parts1} exercices={props.exercises1}/>
  <Parts part={props.parts2} exercices={props.exercises2}/>
  <Parts part={props.parts3} exercices={props.exercises3}/>

      </div>
    )
  }

  export default Content;