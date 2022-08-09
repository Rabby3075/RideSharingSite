import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = () => {

      const [riders, setRiders] = useState([]);
      useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/riderList')
                  .then(data => {
                        // console.log(data);
                        const loadedData = data.data;
                        const riderData = loadedData.map(rider => {
                              const name = rider.name;
                              const balance = rider.balance;
                              const ph = {
                                    name: name,
                                    balance: balance
                              };
                              return ph;
                        });
                        setRiders(riderData);
                        console.log(riderData);
                  })
      }, {})
      return (
            <div className='ms-5'>
                  <h4 className='text-center mt-3 text-secondary'>Riders Balance according to their Name</h4>
                  <BarChart width={1200} height={400} data={riders}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="balance" fill="#8884d8" />
                        {/* <Bar dataKey="name" fill="#82ca9d" /> */}
                  </BarChart>
            </div>
      );
};

export default Barchart;