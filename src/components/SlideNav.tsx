import React from 'react';

interface NavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const SlideNav: React.FC<NavProps> = ({ current, total, onPrev, onNext }) => (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
    <button
      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      onClick={onPrev}
      disabled={current === 1}
    >
      上一页
    </button>
    <span>{current} / {total}</span>
    <button
      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      onClick={onNext}
      disabled={current === total}
    >
      下一页
    </button>
  </div>
);

export default SlideNav;
