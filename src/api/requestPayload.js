function createPayloadForTableData(dateRange) {
    return {
      "_id": "dashboard1516252439345",
      "emailId": "candidate@sigmoid.com",
      "orgViewReq": {
        "organization": "DemoTest",
        "view": "Auction"
      },
      "chartObject": {
        "metadata": {
          "title": "chartobject:1516252439345",
          "img_thumbnail": "../img/chart.png",
          "chartType": "table",
          "dataLimit": 10
        },
        "requestParam": {
          "granularity": "hour",
          "timeZone": {
            "name": "UTC (+00:00)",
            "location": "UTC"
          },
          "dateRange": dateRange,
          "xAxis": [
            "D044"
          ],
          "yAxis": [
            "M002"
          ],
          "approxCountDistinct": [],
          "specialCalculation": [],
          "filter": [],
          "orderBy": {
            "metricOrdByList": [
              {
                "id": "M002",
                "desc": true
              }
            ]
          },
          "percentCalList": []
        }
      }
    }
  }
  
  function createPayloadForBarChart(dateRange) {
    return {
      "_id": "dashboard1516252235693",
      "emailId": "candidate@sigmoid.com",
      "orgViewReq": {
        "organization": "DemoTest",
        "view": "Auction"
      },
      "chartObject": {
        "metadata": {
          "title": "chartobject:1516252235693",
          "img_thumbnail": "../img/chart.png",
          "chartType": "table",
          "dataLimit": 30
        },
        "requestParam": {
          "granularity": "hour",
          "timeZone": {
            "name": "UTC (+00:00)",
            "location": "UTC"
          },
          "dateRange": dateRange,
          "xAxis": [
            "D017"
          ],
          "yAxis": [
            "M002"
          ],
          "approxCountDistinct": [],
          "specialCalculation": [],
          "filter": [],
          "orderBy": {
            "metricOrdByList": [
              {
                "id": "M002",
                "desc": true
              }
            ]
          },
          "percentCalList": []
        }
      }
    }
  }
  
  function createPayloadForPieChart(dateRange) {
    return {
      "_id": "Datastory_ChartId_1535224664111",
      "emailId": "candidate@sigmoid.com",
      "orgViewReq": {
        "organization": "DemoTest",
        "view": "Auction"
      },
      "chartObject": {
        "metadata": {
          "title": "",
          "img_thumbnail": "images/pie.png",
          "chartType": "pie",
          "dataLimit": 20
        },
        "text": [],
        "requestParam": {
          "granularity": "hour",
          "timeZone": {
            "name": "UTC (+00:00)",
            "location": "UTC"
          },
          "dateRange": dateRange,
          "xAxis": [
            "D005"
          ],
          "yAxis": [],
          "approxCountDistinct": [],
          "specialCalculation": [
            "CM001"
          ],
          "filter": [],
          "orderBy": {
            "customMetricOrdByList": [
              {
                "id": "CM001",
                "desc": true
              }
            ]
          },
          "percentCalList": [
            {
              "id": "CM001"
            }
          ]
        }
      }
    }
  }
  
  function createPayloadForDateRange() {
    return {"organization":"DemoTest","view":"Auction"};
  }

  export {
    createPayloadForTableData,
    createPayloadForBarChart,
    createPayloadForPieChart,
    createPayloadForDateRange
  }