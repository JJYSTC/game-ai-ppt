import React from 'react';
import Chart from '../Chart';

const Slide4: React.FC = () => {
  // Epic Games 财报示例数据
  const epicRevenue = [
    { year: '2021', value: 5.1 },
    { year: '2022', value: 6.0 },
    { year: '2023', value: 7.3 },
    // TODO: 用 data.ai 或财报数据替换
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">案例：Epic Games 的 AI 应用</h2>
      <ul className="list-disc pl-6">
        <li>Unreal Engine 中的 AI 生成关卡与动画优化</li>
        <li>Fortnite 中智能对手与匹配系统</li>
        <li>2023 年营收趋势：见下图</li>
      </ul>
      <Chart
        data={epicRevenue}
        xKey="year"
        yKey="value"
        title="Epic Games 年度营收 (十亿美元)"
      />
    </div>
  );
};

export default Slide4;
