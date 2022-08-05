import React from 'react';
import { useParams } from 'react-router-dom';

const RiderView = () => {


      // const { id } = useParams();
      // const { name } = useParams();
      // const { cus_id } = useParams();
      // const { dob } = useParams();
      // const { email } = useParams();
      // const { phone } = useParams();
      return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>


                  {/* 
                  <div className='rounded fs-6' style={{ padding: "50px", background: "#B0C4DE" }}>
                        <h1>Customer Information</h1>
                        <br />
                        <p>UserID: {id}</p>
                        <p>Customer Name: {name}</p>
                        <p>Customer Id: {cus_id}</p>
                        <p>Date of Birth: {dob}</p>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                  </div> */}


            </div>
      );
};

export default RiderView;