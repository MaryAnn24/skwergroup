import React, {useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Completion() {
    
    const navigate = useNavigate();
    /* DATABASE AXIOS */
    const updateData = () => { /* http://localhost:3001 */   
        Axios.post("http://localhost:3001/updatePayment", {  
        }).then(() => {});
    };

    updateData();

    useEffect(() => {
        navigate('/', {replace: true})
    });

/* END */
 return (
  <div className='order__page' >
      <h2>Thank you!</h2>
  </div>
 );
}

  