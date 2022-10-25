import React from 'react';

function ClientDetails({formData, setFormData}) {
  return (
    <div>
        <input className='form-control'
          type="text" 
          placeholder='Your Name'
          name="p_name"
          value={formData.p_name}
          onChange={(event) => setFormData({
            ...formData, p_name: event.target.value
          })}
  
        />

        <input className='form-control'
          type="text" 
          placeholder='Your Email'
          name="p_name"
          value={formData.email}
          onChange={(event) => setFormData({
            ...formData, email: event.target.value
          })}
  
        />
        <input className='form-control'
          type="text" 
          placeholder='Your Contact Number'
          name="p_name"
          value={formData.contact_no}
          onChange={(event) => setFormData({
            ...formData, contact_no: event.target.value
          })}
  
        />

          <br></br>
        <textarea className='form-control' name="address" id="" cols="70" rows="10" placeholder='Company Address '
          onChange={(event) => setFormData({
            ...formData, address: event.target.value
          })}
        >
        {formData.address}

        </textarea>

        
    </div>
  )
}

export default ClientDetails