import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: any[];
  xKey: string;
  yKey: string;
  title: string;
}

const Chart: React.FC<ChartProps> = ({ data, xKey, yKey, title }) => (
  <div className="w-full h-64 my-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={yKey} stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
