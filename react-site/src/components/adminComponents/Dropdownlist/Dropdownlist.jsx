import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { height } from '@mui/system';

import axios from "axios"
import { useNavigate } from "react-router-dom"

import { Link } from 'react-router-dom';

const Dropdownlist = () => {
  const navigate = useNavigate();
  //let user = JSON.parse(localStorage.getItem('user'));
  const adminLogout = (e) => {
    e.preventDefault();
    //var obj = { token: user.access_token };
    axios.post("http://127.0.0.1:8000/api/Logout")
      .then(resp => {
        if (resp.data.status === 200) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('user.userId');
          //var data = resp.data;
          //console.log(data);
          navigate('/adminlogin');
        }
      }).catch(err => {
        console.log(err);
      });
  }
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{ width: "0.2px", height: "0.2px" }}>

      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">About profile</Dropdown.Item>
        <Dropdown.Item eventKey="" active><Link to="/editprofile">Update profile</Link></Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Change password
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="1" onClick={adminLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


  );
}

export default Dropdownlist;