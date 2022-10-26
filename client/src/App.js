import './App.css';
import Form from './components/Form/Form';
// import { useState } from "react";
import Axios from "axios";

function App() {
  // const [registration, setRegistration] = useState([]);
  // const [jurisdiction, setJurisdiction] = useState("");
  // const [p_name, setPName] = useState("");
  // const [email, setEmail] = useState("");

  const jurisdiction = "Canada";
  const p_name = "Mary";
  const email = "text@gmail.com";


  const addData = () => {
    // setJurisdiction("Canada");
    // setPName("Test");
    // setEmail("test@gmail.com");

    // Axios.post("http://localhost:3001/saveData", {
    //     jurisdiction: jurisdiction,
    //       p_name: p_name,
    //       email: email,
      
    // }).then(() => {
    //   setRegistration([
    //     ...registration,
    //     {
    //       jurisdiction: jurisdiction,
    //       p_name: p_name,
    //       email: email,
    //     },
    //   ]);

      
    // });

    console.log(jurisdiction);

    Axios.post("http://localhost:3001/saveData", {
      jurisdiction: jurisdiction,
      p_name: p_name,
      email: email
    }).then(() => {
            console.log("sucess");
    });

    //console.log(registration);
  };

  

  return (
    <>
      <Form />
      <button onClick={addData}>Add DATA</button>
    </>
  );
}

export default App;
