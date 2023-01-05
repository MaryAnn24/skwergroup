import './App.css';
import Form from './components/Form/Form';
import Completion from "./components/Payment/Completion";
// import Testing from './components/Testing/Testing';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>

      {/* <Testing /> */}
      <BrowserRouter basename='/order-online'>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>

    </>
  );

}

export default App;
