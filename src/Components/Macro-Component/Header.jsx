import { Link } from "react-router-dom";




function Header({ handleChange, isChecked }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="header">
            <div className="container-fluid">
                <div id="div-logo">
                    <i className="bi bi-receipt" id="logo"></i>
                    <h1 id="invoice">Invoice</h1>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i className="bi bi-blockquote-right"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/product"} className="nav-link active" aria-current="page">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/generate"} className="nav-link active" aria-current="page">Generate Bill</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/config"} className="nav-link active" aria-current="page">Configuration</Link>
                        </li>
                    </ul>

                    {/* Theme */}

                    <div id="theme-box">
                        <input type="checkbox" className="checkbox" id="checkbox" onChange={handleChange} checked={isChecked} />
                        <label htmlFor="checkbox" className="checkbox-label">
                            <i className="bi bi-moon-stars-fill" id="fa-moon"></i>
                            <i className="bi bi-brightness-high-fill" id="fa-sun"></i>
                            <span className="ball"></span>
                        </label>
                    </div>
                </div>

            </div>
        </nav>
    )
}


export default Header;