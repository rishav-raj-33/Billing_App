


function Slider() {
    return (


        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/slider-2.jpg" className="d-block w-100" alt="Tax-banner" />
                    <div className="carousel-caption">
                        <h5>Tax</h5>
                        <p>Save Time and Effort with Automated Tax Calculations</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/slider-3.jpg" className="d-block w-100" alt="Automation-banner" />
                    <div className="carousel-caption">
                        <h5>Automation</h5>
                        <p>Streamline Your Invoicing Process with Automation</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/slider-1.jpg" className="d-block w-100" alt="Business-banner" />
                    <div className="carousel-caption">
                        <h5>Business</h5>
                        <p>Professional Invoices That Reflect Your Business</p>
                    </div>
                </div>
            </div>
            <div id="div-button">
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span aria-hidden="true"><i className="bi bi-arrow-left-circle-fill"></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span aria-hidden="true"> <i className="bi bi-arrow-right-circle-fill"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>







    )
}


export default Slider