import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
import './App.css'
import { Starter, Main } from "./Pages"


function App() {


  const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);







  return (



    <BrowserRouter>


      <div data-theme={darkTheme ? "dark" : "light"}>
        <Main isChecked={darkTheme} handleChangeMethod={() => {
          setDarkTheme(!darkTheme);
        }} />

        <Routes>
          <Route path='/' element={<Starter />}></Route>



        </Routes>











      </div>

    </BrowserRouter>










  )
}

export default App
