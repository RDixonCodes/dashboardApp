import React from 'react';
import { 
  ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject,  
  Tooltip,
  Category,
  Legend, 
  DataLabel,  
  StackingBarSeries
}  from '@syncfusion/ej2-react-charts';

import { stackedChartData, stackedPrimaryXAxis, stackedPrimaryYAxis,stackedCustomSeries } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';


const Stacked = () => {

  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Stacked" title="Revenue Breakdown" />
      <div className='w-full'>
        <ChartComponent
        id='charts'
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
            dataSource={stackedChartData[0]}
            xName='x'
            yName='y'
            type='StackingBar'
            name='Budget'
            />
            <SeriesDirective
            dataSource={stackedChartData[1]}
            xName='x'
            yName='y'
            type='StackingBar'
            name='Expense'
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>  

    </div>
  )
}

export default Stacked;