import Parts from "./Parts";

const Content = (props) =>{
    return(
      <div>
  <Parts part={props.parts[0].name} exercices={props.parts[0].exercises}/>
  <Parts part={props.parts[1].name} exercices={props.parts[1].exercises}/>
  <Parts part={props.parts[2].name} exercices={props.parts[2].exercises}/>

      </div>
    )
  }

  export default Content;