// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import RiderData from './RiderData';
// const RiderList = () => {

//       const [riders, setRiders] = useState([]);

//       useEffect(() => {
//             axios.get("http://127.0.0.1:8000/api/riderList")

//                   .then(resp => {
//                         console.log(resp);
//                         setRiders(resp.data);
//                   }).catch(err => {
//                         console.log(err);
//                   });
//       }, []);
//       return (

//             <div className="container" style={{ padding: "10px" }}>

//                   {
//                         riders.map(riders =>
//                               <RiderData
//                                     key={riders.id}
//                                     riders={riders}
//                               ></RiderData>
//                         )
//                   }




//             </div>
//       );
// };

// export default RiderList;