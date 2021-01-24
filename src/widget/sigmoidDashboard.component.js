import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty'
import '../style/App.css';
import SigmoidDashboardMainView from './components/sigmoidDashboard.mainView'
import Login from './components/loginComponent'

function SigmoidDashboardComponent(props) {

  const {
        userLogin,
        dateRange,
        fetchChartData,
        fetchDateRange,
        tableData, 
        pieChartData, 
        barChartData} = props;
      
  let userToken = null;
  userToken = sessionStorage.getItem("x-auth-token");
  if(isEmpty(userToken)) {
    return <Login userLogin={userLogin} />
  }
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <SigmoidDashboardMainView 
                  loginUser={userLogin}
                  dateRange={dateRange}
                  fetchDateRange= {fetchDateRange}
                  fetchChartData={fetchChartData}
                  tableData={tableData}
                  barChartData={barChartData}
                  pieChartData={pieChartData}/>
          </Route>
          <Route path="/login">
            <Login userLogin={userLogin}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default SigmoidDashboardComponent;