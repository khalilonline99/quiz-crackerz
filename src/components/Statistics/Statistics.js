import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'

const Statistics = () => {
    const allData = useLoaderData();
    const { data } = allData;

    console.log(data);

    return (
        <div className='stat'>
            <h3>Statistics</h3>
            <p>Please check the statistics of total quiz per module.</p>
            <ResponsiveContainer width="95%" height={300}>

                <BarChart width={650} height={400} data={data} className='bar-chart'>
                    <XAxis dataKey="name" /> <YAxis />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>

            </ResponsiveContainer>
            <p>As you can see that, Git has the highest no of quiz in this</p>
        </div>
    );
};

export default Statistics;