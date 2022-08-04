import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

const CustomerRegistration = () =>{
    return(

        <div className='container-fluid vh-100'>
            <div className=''>
                <div className='rounded d-flex justify-content-center'>
                    <div className='col-md-4 col-sm-12 shadow-lg bg-light'>
                        <div className='text-center'>
                            <h3 className='text-primary'>Create Account</h3>
                        </div>
                        <form className='form-group'>
                            <div className='p-4'>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-person text-white'></i>
                                    </span>
                                    <input type="text" className='form-control' name="name" id="name" placeholder="Name"></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-calendar text-white'></i>
                                    </span>
                                    <input type="date" className='form-control' name="dob" id="dob" ></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-telephone text-white'></i>
                                    </span>
                                    <input type="tel" className='form-control' name="phone" id="phone" placeholder='Phone Number' ></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-geo-alt text-white'></i>
                                    </span>
                                    <input type="text" className='form-control' name="address" id="address" placeholder='Address'></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-person-plus-fill text-white'></i>
                                    </span>
                                    <input type="text" className='form-control' name="username" id="username" placeholder='Username'></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-envelope text-white'></i>
                                    </span>
                                    <input type="email" className='form-control' name="email" id="email" placeholder='Email Address'></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text bg-primary'>
                                        <i className='bi bi-key-fill text-white'></i>
                                    </span>
                                    <input type="password" className='form-control' name="password" id="password" placeholder='Password'></input>
                                </div>

                                <div class="d-grid col-12 mx-auto">
                                    <input type="submit" class="btn btn-primary" value="Sign Up" ></input>
                                </div>

                                <p class="text-center mt-3">Already have an account?
                                    <span class="text-primary"><a href="#">Sign in</a></span>

                                </p>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CustomerRegistration;
