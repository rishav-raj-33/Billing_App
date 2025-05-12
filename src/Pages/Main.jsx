import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Product, GenerateBill, Config } from ".";
import Header from "../Components/Macro-Component/Header";



function Main({ handleChangeMethod, isChecked }) {
    return (





        <div data-theme={isChecked ? "dark" : "light"}>
            <Header isChecked={isChecked} handleChange={handleChangeMethod} />
            <hr className="line"></hr>

            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path='/generate' element={<GenerateBill />} />
                <Route path="/product" element={<Product />} />
                <Route path="/config" element={<Config />} />








            </Routes>



        </div>



    )
}


export default Main;