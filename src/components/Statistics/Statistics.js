import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'

const Statistics = () => {
    const allData = useLoaderData();
    const {data} = allData;

    console.log(data);

    return (
        <div>
            <h3>Statistics</h3>
            <BarChart width={650} height={400} data={data} className='bar-chart'>
            <XAxis dataKey="name" /> <YAxis />
            <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;