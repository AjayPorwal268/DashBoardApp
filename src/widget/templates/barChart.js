import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

function addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if(order > suffixes.length - 1)
        order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}

export default function BarChartCanvas({data}) {
    const options = {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: ""
        },
        axisX: {
            title: "",
            reversed: true,
        },
        axisY: {
            title: "",
            labelFormatter: addSymbols
        },
        data: [{
            type: "bar",
            dataPoints: data
        }]
    }
    return (
        <div>
			<CanvasJSChart options = {options} />
		</div>
    );
}