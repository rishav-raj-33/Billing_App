import ReactDOM from 'react-dom/client';


function ButtonCom(props) {


    function open() {
        window.location.href=props.link;
    }


    return (


        <button className="btn-hover" onClick={open}>{props.name}</button>



    )


}

export default ButtonCom;