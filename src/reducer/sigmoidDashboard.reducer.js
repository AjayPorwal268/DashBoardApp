export default function SigmoidReducer(state = {}, action) {
    switch (action.type) {
      case 'FETCH_TABLE_DATA':
        return {...state, tableData:action.payload}
      case 'FETCH_BAR_CHART_DATA':
          return {...state, barChartData:action.payload}
      case 'FETCH_PIE_CHART_DATA':
          return {...state, pieChartData:action.payload}
      case 'FETCH_DATE_RANGE':
            return {...state, dateRange:action.payload}
      default:
        return state
    }
}