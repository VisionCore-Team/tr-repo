import React from 'react';
import { useTranslation } from 'react-i18next';
import './chartbar.css';
import '../../../../App.css';
import './chartbar_translate';

type ChartBarProps = {
  topText: {
    value: string;
    unit: string;
  };
  bottomText: string;
  barClass: string;
};

const Chart = () => {
  
  const { t } = useTranslation();

  const chartBarData = [ 
    { value: '100', unit: t('billion'), text: t('billion_text'), barClass: 'chart-bar-1' },
    { value: '13', unit: t('trillion'), text: t('trillion_text'), barClass: 'chart-bar-2' }
  ]

  const ChartBar = React.forwardRef<HTMLDivElement, ChartBarProps>(
    ({ topText, bottomText, barClass }, ref) => {
      return (
        <div className={`chart-bar ${barClass}`}>
          <div className="chart-container ">
            <div
              ref={ref}
              className="chart-graph" // Başlangıçta "inactive" sınıfı eklenir
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
      <div className="cicek-text mb-8">
        <div className="">
          <div className="et_pb_text_inner ">
            <h2 className='cicek-text'>{`${t('chartbar_title1')}:`}
              <br/> 
              <span className="moving-gradient-text text-transparent bg-clip-text ">{t('chartbar_title2')}</span>
            </h2>
            <p className='mt-8 additional-text' style={{ fontSize: 14 }}>
              {t('chartbar_text1')}
            </p>
          </div>
        </div>
        <div className="">
          <div className="et_pb_text_inner mt-4 " style={{ fontSize: 17 }}>
            <p>{t('chartbar_text2')}</p>
          </div>
        </div>
      </div>
      <div className="chart mt-8">
        {chartBarData.map((barData, index) => (
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
