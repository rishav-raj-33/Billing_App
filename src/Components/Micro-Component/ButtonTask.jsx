import ReactDOM from 'react-dom/client';


function ButtonTask(props) {


  
    return (


        <button className="btn-hover" onClick={props.task}>{props.name}</button>



    )


}

export default ButtonTask;