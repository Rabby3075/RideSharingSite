import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { height } from '@mui/system';
import { Link } from 'react-router-dom';


const Dropdownlist = () =>{
  return (
    <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{width:"0.2px" ,height:"0.2px"}}>
     
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item eventKey="1">About profile</Dropdown.Item>
      
      
      <Dropdown.Item eventKey="" active><Link to="/editprofile">Update profile</Link></Dropdown.Item>
      
      <Dropdown.Item eventKey="3">
        Change password
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="1">Log out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
}

export default Dropdownlist;