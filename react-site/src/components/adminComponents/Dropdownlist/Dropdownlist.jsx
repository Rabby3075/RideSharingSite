import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { height } from '@mui/system';


const Dropdownlist = () =>{
  return (
    <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{width:"0.2px" ,height:"0.2px"}}>
     
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item eventKey="1">About profile</Dropdown.Item>
      <Dropdown.Item eventKey="2">Update profile</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Change password
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="1">Log out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
}

export default Dropdownlist;