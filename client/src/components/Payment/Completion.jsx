import React, {useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Completion() {
    
    const navigate = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search);
    const juris = queryParameters.get("j");
    const total = queryParameters.get("p");
    /* DATABASE AXIOS */
    const updateData = () => { /* http://localhost:3001 https://api.skwergroup.com */   
        Axios.post("http://localhost:3001/updatePayment", {  
        }).then(() => {});
    };

    updateData();

    /* REDIRECT AFTER SAVING */
    useEffect(() => {
        navigate(`/thankyou?j=${juris}&p=${total}`, {replace: true})
    });

/* END */
 return (
  <div className='order__page' >
      <h2>Completion Page!</h2>
  </div>
 );
}