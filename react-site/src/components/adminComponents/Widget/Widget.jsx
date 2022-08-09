import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Card from 'react-bootstrap/Card';

const Widget = () => {
  // let data;

  // //temporary
  // const amount = 100;
  // const diff = 20;

  // switch (type) {
  //   case "user":
  //     data = {
  //       title: "USERS",
  //       isMoney: false,
  //       link: "See all users",
  //       icon: (
  //         <PersonOutlinedIcon
  //           className="icon"
  //           style={{
  //             color: "crimson",
  //             backgroundColor: "rgba(255, 0, 0, 0.2)",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "order":
  //     data = {
  //       title: "ORDERS",
  //       isMoney: false,
  //       link: "View all orders",
  //       icon: (
  //         <ShoppingCartOutlinedIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(218, 165, 32, 0.2)",
  //             color: "goldenrod",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "earning":
  //     data = {
  //       title: "EARNINGS",
  //       isMoney: true,
  //       link: "View net earnings",
  //       icon: (
  //         <MonetizationOnOutlinedIcon
  //           className="icon"
  //           style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "balance":
  //     data = {
  //       title: "BALANCE",
  //       isMoney: true,
  //       link: "See details",
  //       icon: (
  //         <AccountBalanceWalletOutlinedIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(128, 0, 128, 0.2)",
  //             color: "purple",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   default:
  //     break;
  // }

  return (
    <div className="widget">
      <div>
    <Card style={{ width: '17rem',height:'10rem',backgroundColor:"#194d33" }}>
    
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem',height:'10rem',backgroundColor:"#ab149e" }}>
    
    <Card.Body>This is some text within a card body.</Card.Body>
  </Card>
  </div>
  <div>
  <Card style={{ width: '17rem',height:'10rem',backgroundColor:"#ff6900"  }}>
    
    <Card.Body>This is some text within a card body.</Card.Body>
  </Card>
  </div>
  <div>
  <Card style={{ width: '17rem',height:'10rem',backgroundColor:"#1976d2"  }}>
    
    <Card.Body>This is some text within a card body.</Card.Body>
  </Card>
  </div>

    </div>
    
  );
};

export default Widget;