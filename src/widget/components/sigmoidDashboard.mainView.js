import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import isEmpty from 'lodash/isEmpty'
import BarChartCanvas from '../templates/barChart'
import ColumnChart from '../templates/columnChart'
import PieChart from '../templates/pieChart'
import "react-datepicker/dist/react-datepicker.css";

function SigmoidDashboardMainView(props) {
  const tableData = props.tableData;
  const barChartData = props.barChartData;
  const pieChartData = props.pieChartData;
  const {startDate:startDateTime , endDate:endDateTime} = props.dateRange || {
    startDate: 1491004800000,
    endDate:   1493593200000
  };
  const [startDate, setStartDate] = useState(new Date(startDateTime-0));
  const [endDate, setEndDate] = useState(new Date(endDateTime-0));

  useEffect(() => {
    props.fetchDateRange();
  }, []);

  useEffect(() => {
    if (startDate && endDate && startDate !== endDate) {
      const dateRange = {
        "startDate": startDate.getTime()+"",
        "endDate": endDate.getTime()+""
      }
      props.fetchChartData(dateRange);
    }
  }, [startDate, endDate]);
  
  if(isEmpty(props.dateRange)) {
    return null;
  }
  return (
    <div className="container-fluid">
      <div className="row date-picker">
        <label className="date-label">Select Date</label>
        {startDate &&
          <DatePicker 
            selected={startDate} 
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date(startDateTime-0)}
            maxDate={new Date(endDateTime-0)}
        />}
        {endDate &&
          <DatePicker 
            selected={endDate} 
            onChange={date => setEndDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date(startDateTime-0)}
            maxDate={new Date(endDateTime-0)}
          />}
      </div>
      <div className="row">
        <div className="col"> {
          !isEmpty(tableData) && <ColumnChart data={tableData}/>
        }
        </div>
        <div className="col">{
          !isEmpty(barChartData) && <BarChartCanvas data={barChartData} />
        }
        </div>
        <div className="col">
        {
          !isEmpty(pieChartData) && <PieChart data={pieChartData}/>
        }</div>
      </div>
    </div>
  );
}

export default SigmoidDashboardMainView;