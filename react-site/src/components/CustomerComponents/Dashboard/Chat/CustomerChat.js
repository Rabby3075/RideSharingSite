import React, {useState, useEffect,useRef} from "react";
import axios from "axios";
import CustomerNavbar from "../Navbar/CustomerNavbar";
import Footer from "../../../riderComponents/Footer/Footer";
import { useParams } from 'react-router-dom';
import './Chat.css';

const CustomerChat = () =>{
    const { id } = useParams();
    const [chats, setChats] = useState([]);
    const [rider, setRider] = useState([]);
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        //console.log({id})
        var obj = {id: id};
        axios.post('http://127.0.0.1:8000/api/customer/chat',obj)
        .then(resp => {
            var response = resp.data;
            console.log(response);
            console.log(response.chats);
            setChats(response.chats);
            setRider(response.rider)
            setCustomer(response.customer)
            document.getElementById('rname').innerHTML=response.rider.name;
        }).catch(err => {
            console.log(err);
        });
      }, []);

    return(
        <div>
        <CustomerNavbar />
        <div class="card">
        		<div class="card-header hcd">

                    <p class="text-white mx-2" id="rname"></p>
                </div>
                <div class="ccd" id="ccd">
        		<div class="card-body height3">
        			<ul class="chat-list" id="here">
                    {chats.map(chat=>{

                        {
                            chat.rmessage !== 'null' && <li class="in">
        					<div class="chat-img">
        						<img alt="Avtar" src="" />
        					</div>
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5>{rider.name}</h5>
                                    <br />
        							<h6>{chat.rmessage}</h6>
                                    <p><small>{chat.time}</small></p>
        						</div>
        					</div>
        				</li>
                        }

                        <br />
                        {
                            chat.cmessage!==null && <h1></h1>
                        }
                    })}

                             <li class="out">
        					<div class="chat-img">
        						<img alt="Avtar" src="" />
        					</div>
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5>{customer.name}</h5>
                                    <br />
        							<h6></h6>
                                    <p><small></small></p>
        						</div>
        					</div>
        				</li>

                        <br />



        			</ul>
        		</div>
                </div>
        	</div>
         <div class="bottom_wrapper clearfix">
          <form>

         <div class="message_input_wrapper">

            <input class="message_input" placeholder="Type your message here..." type="text" name="msg" />
         </div>

         <button type="submit" class="send_message">Send</button>
          </form>
         </div>
         <Footer />
         </div>
    )

}
export default CustomerChat;
