import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function PieChart({data}) {
    const options = {
		exportEnabled: true,
		animationEnabled: true,
		title: {
			text: ""
		},
		data: [{
			type: "pie",
			startAngle: 75,
			toolTipContent: "<b>{label}</b>: {y}%",
			indexLabelFontSize: 16,
			indexLabel: "{label} - {y}%",
			dataPoints: data
		}]
	}
    return (
        <div>
			<CanvasJSChart options={options} />
		</div>
    );
}