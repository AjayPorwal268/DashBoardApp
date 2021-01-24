import baseApi from "./baseApi"
import {createPayloadForTableData, createPayloadForBarChart,
    createPayloadForPieChart, createPayloadForDateRange} from "./requestPayload"

class SigmoidDashboardApi extends baseApi{
    constructor(dispatch) {
        super();
        this.dispatch = dispatch;
    }

    transfornData(chartData = [], key, label) {
        return chartData.map((data) => {
            return {"y": data[key]-0, label: data[label]}
        });
    }
 
    fetchChartData(dateRange, action) {
        let payload = '';
        let key = '';
        let label = '';
        if (action === "FETCH_TABLE_DATA") {
            payload = createPayloadForTableData(dateRange);
            key = "impressions_offered";
            label = "publisherId";
        }else if (action === "FETCH_BAR_CHART_DATA") {
            payload = createPayloadForBarChart(dateRange);
            key = "impressions_offered";
            label = "appSiteId";
        } else if (action === "FETCH_PIE_CHART_DATA") {
            payload = createPayloadForPieChart(dateRange);
            key = "CM001_percent";
            label = "advertiserId";
        } else {
            return;
        }
        this.request.post(`/api/v1/getData`, payload).then(res => {
            const data = res.data && res.data.result && res.data.result.data;
            this.dispatch({ type: action, payload : this.transfornData(data, key, label)});
        })
    }

    userLogin(payload) {
        return this.request.post(`/signIn`, payload).then(res => {
        })
    }

    fetchDateRange() {
        const payLoad = createPayloadForDateRange();
        this.request.post(`/api/v1/getDateRange`, payLoad).then(res => {
            const data = res.data && res.data.result && res.data.result;
            this.dispatch({ type: "FETCH_DATE_RANGE", payload : data});
        })
    }
}

export default SigmoidDashboardApi;