import React from 'react';
import Chart from '../Chart';
import { marketData } from '../../data/statista';

const Slide2: React.FC = () => {
  // 模拟过去 5 年市场规模
  const trendData = [
    { year: '2021', value: 360 },
    { year: '2022', value: 396 },
    { year: '2023', value: 450 },
    { year: '2024', value: marketData.revenue2024 },
    { year: '2025', value: marketData.revenue2025 },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">全球游戏市场规模与增长</h2>
      <p>
        预计2025年全球游戏市场规模将达到 {marketData.revenue2025} 十亿美元，
        较2023年的396十亿美元显著增长。 :contentReference[oaicite:4]{index=4}
      </p>
      <Chart
        data={trendData}
        xKey="year"
        yKey="value"
        title="2021–2025 年全球游戏市场规模 (十亿美元)"
      />
    </div>
  );
};

export default Slide2;
