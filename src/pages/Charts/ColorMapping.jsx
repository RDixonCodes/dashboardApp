import React from 'react';
import { 
  ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject, 
  Tooltip, 
  Category,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective, 
  ColumnSeries
}  from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';


const ColorMapping = () => {

  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />
      <div className='w-full'>
        <ChartComponent
        id='charts'
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ mode: 'Range', background: 'white'}}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
            dataSource={colorMappingData[0]}
            xName='x'
            yName='y'
            name='USA'
            type='Column'
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item}/>)}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>  

    </div>
  )
}

export default ColorMapping;