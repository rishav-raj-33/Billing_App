import { useState } from "react";

function Config() {

    let [password, setPassword] = useState("");
    let [Cpassword, setCPassword] = useState(false);


    // function trueUser() {
    //     fetch('')
    //         .then(res => res.json())
    //         .then((data) => {
    //             setProduct(data.identity);

    //         }
    //         )
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }







    return (
        <div id="config-div">


            <div id="config-modal">
                <h1 className="text-center mt-3">CONFIGURATION</h1>
                <div>
                    <form className="config-form">
                        <div className="mb-3">
                            <label htmlFor="tax" className="form-label">Tax (%):</label>
                            <input type="number" className="form-control" id="phone" placeholder="Enter Tax in %" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tax" className="form-label">Minimum Stock:</label>
                            <input type="number" className="form-control" id="phone" placeholder="Enter Minimum Stock" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Change Password:</label>
                            <input type="number" className="form-control" id="phone" placeholder="Enter Old Password" onChange={
                                (e) => {
                                    const timeId = setTimeout(() => {
                                        setCPassword(e.target.value);
                                        trueUser();
                                    }, 500)

                                }
                            } />
                            {
                                (password) ? <input type="number" className="form-control" id="phone" placeholder="Enter New Password" /> : null
                        }
                        </div>
                        <button className="btn-hover">Submit</button>
                    </form>

                </div>

            </div>

        </div>
    )

}


export default Config;