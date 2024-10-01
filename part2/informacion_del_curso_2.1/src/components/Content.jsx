import Part from "./Part";

const Content = ({parts}) =>{
    return(
      <div>        
        {parts.map((part) => {
  
         return <Part part = {part}/>
        })}
      </div>
    )
  }

  export default Content;