import ButtonTask from '../Micro-Component/ButtonTask'


function Starter() {


    let task = () => {

    }


    return (


        <section className="bg-primary py-3 py-md-5 py-xl-8" id='log-in'>
            <div className="container">
                <div className="row gy-4 align-items-center" id='container-full'>
                    <div className="col-12 col-md-6 col-xl-7" >
                        <div className="d-flex justify-content-center text-bg-primary" id='starter-content'>
                            <div className="col-12 col-xl-9">
                                <i className="bi bi-receipt" id="invoice-logo"></i>
                                <span id='invoice'>Invoice</span>
                                <hr className="border-primary-subtle mb-4" />
                                <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                                <p className="lead mb-5">An invoice login page serves as a secure gateway for individuals or businesses to access their invoice-related information</p>
                                <div className="text-endx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                        <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                        <div className="card border-0 rounded-4" id='card'>
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-4">
                                            <h3>Sign in</h3>
                                        </div>
                                    </div>
                                </div>
                                <form action="#!">
                                    <div className="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                                                <label htmlFor="email" className="form-label">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" required />
                                                <label htmlFor="password" className="form-label">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                                                <label className="form-check-label text-secondary" htmlFor="remember_me">
                                                    Keep me logged in
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <ButtonTask name="Log in now" task={task} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                                            <a href="#!">Forgot password</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    )

}


export default Starter