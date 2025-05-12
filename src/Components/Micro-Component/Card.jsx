import ButtonCom from "./ButtonCom";






function Card(props) {


    return (

        <div className="card">
            <img src={props.img} className="card-img-top img-fluid" alt="GST" id="gst-logo" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-start">{props.content}
                </p>
                <ButtonCom name="Learn More..." link={props.link} />

            </div>
        </div>

    )
}



export default Card