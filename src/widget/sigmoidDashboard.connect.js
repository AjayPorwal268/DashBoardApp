import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import SigmoidDashboardComponent from './sigmoidDashboard.component'

import sigmoidDashboardAPI from '../api/sigmoidDashboard.api'

export default function SigmoidDashboardConnect () {
  const dispatch = useDispatch();
  const tableData = useSelector(state => state.sigmoidDashboard.tableData) || [];
  const pieChartData = useSelector(state => state.sigmoidDashboard.pieChartData) || [];
  const barChartData = useSelector(state => state.sigmoidDashboard.barChartData) || [];
  const dateRange = useSelector(state => state.sigmoidDashboard.dateRange);
  const sigmoidDashboardApiInstance = new sigmoidDashboardAPI(dispatch);
  
  const mapStateToProps = () => {
      return {
        tableData,
        pieChartData,
        barChartData,
        dateRange
      };
  }

  const mapStateToDispatch = () => {
      return {
        userLogin: async (payload) => {
          try {
            sigmoidDashboardApiInstance.userLogin(payload).then(() => {
              window.location.replace("/dashboard");
            });
          }
          catch (e) {
            window.location.replace("/login");
          }
        },

        fetchDateRange: async () => {
          await sigmoidDashboardApiInstance.fetchDateRange();
        },

        fetchChartData: async (dateRange) => {
            await sigmoidDashboardApiInstance.fetchChartData(dateRange,"FETCH_TABLE_DATA");
            await sigmoidDashboardApiInstance.fetchChartData(dateRange,"FETCH_BAR_CHART_DATA");
            await sigmoidDashboardApiInstance.fetchChartData(dateRange,"FETCH_PIE_CHART_DATA");
        }
      }
  }
 
  const componentsProps = {
    ...mapStateToProps(),
    ...mapStateToDispatch()
  }
  return <SigmoidDashboardComponent  {...componentsProps } />
}