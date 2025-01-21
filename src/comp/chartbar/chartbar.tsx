import React from 'react';
import './chartbar.css';
import '../../App.css';

type ChartBarProps = {
  topText: {
    value: string;
    unit: string;
  };
  bottomText: string;
  barClass: string;
};




const Chart = () => {
  

  const ChartBar = React.forwardRef<HTMLDivElement, ChartBarProps>(
    ({ topText, bottomText, barClass }, ref) => {
      return (
        <div className={`chart-bar ${barClass}`}>
          <div className="chart-container ">
            <div
              ref={ref}
              className="chart-graph sm:mb-12   " // Başlangıçta "inactive" sınıfı eklenir
              data-height={barClass === 'chart-bar-1' ? '59%' : '100%'}
            >
              <div className="chart-top-text">
                <span className="chart-top-value">{topText.value}</span>
                <span className="chart-top-unit">{topText.unit}</span>
              </div>
            </div>
          </div>
          <div className="chart-bottom-text">
            <p>{bottomText}</p>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="chart-container-wrapper ">
      <div className="cicek-text ">
        <div className="">
          <div className="et_pb_text_inner ">
            <h2 className='cicek-text'>
            The oil of the new world: <br/> <span className="moving-gradient-text text-transparent bg-clip-text ">AI-powered computer vision</span>
            </h2>
            <p className='mt-8 additional-text' style={{ fontSize: 14 }}>
              Computer Vision (CV) is an artificial intelligence technology that detects, processes, and instantly analyzes thousands of visual objects, images, or actions in video images but does so in nanoseconds, versus the time it takes a human being.
            </p>
          </div>
        </div>
        <div className="">
          <div className="et_pb_text_inner mt-4 " style={{ fontSize: 17 }}>
            <p>The technology can take immediate action when images, pictures, or patterns of images are detected. Think of it as artificial eyes and brains, only more highly evolved.</p>
          </div>
        </div>
      </div>
      <div className="chart mt-8">
        {[ 
          { value: '100', unit: 'Billion', text: 'Estimated USD Value in 2021', barClass: 'chart-bar-1' },
          { value: '13', unit: 'Trillion', text: 'Estimated AI USD Value in 2030', barClass: 'chart-bar-2' }
        ].map((barData, index) => (
          <ChartBar
            key={index}
           
            topText={{ value: barData.value, unit: barData.unit }}
            bottomText={barData.text}
            barClass={barData.barClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
