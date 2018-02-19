import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import 'whatwg-fetch'

const twodata = [
{date: 1496275200000, url_0: 57171, url_1: 20498}, 
{date: 1496286000000, url_0: 46453, url_1: 51767, url_2: 54510}, 
{date: 1496296800000, url_0: 13557, url_1: 31375, url_2: 34320}, 
{date: 1496307600000, url_0: 10753, url_1: 25303, url_2: 16906}, 
{date: 1496318400000, url_0: 5488, url_1: 17720, url_2: 6508}, 
{date: 1496329200000, url_0: 1658, url_1: 10202, url_2: 934}, 
{date: 1496340000000, url_0: 2513, url_1: 9604, url_2: 2228, url_3: 20443}, 
{date: 1496350800000, url_0: 5087, url_1: 11904, url_2: 5032, url_3: 91289}
];


class StackedBarChart extends React.Component {
  render () {
    return (
      <BarChart width={600} height={300} data={twodata}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
      <Bar dataKey="url_0"  stackId="a" fill="#8874d8" />
      <Bar dataKey="url_1" stackId="a" fill="#82fa9d" />
      <Bar dataKey="url_2" stackId="a" fill="#82cb9d" />
      <Bar dataKey="url_3" stackId="a" fill="#22ca9d" />
      <Bar dataKey="url_4" stackId="a" fill="#82ca3d" />
      <Bar dataKey="url_5" stackId="a" fill="#82cf9d" />
      <Bar dataKey="url_6" stackId="a" fill="#80ca9d" />
      <Bar dataKey="url_7" stackId="a" fill="#82ca1d" />
      <Bar dataKey="url_8" stackId="a" fill="#81ca9d" />
      <Bar dataKey="url_9" stackId="a" fill="#82ca93" />
      </BarChart>
    );
  }
}

 ReactDOM.render(
   <StackedBarChart />,
   document.getElementById('container')
 );

