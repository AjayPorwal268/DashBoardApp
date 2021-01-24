import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function ColumnChart({data}) {
    const options = {
		title: {
			text: ""
		},
		animationEnabled: true,
		data: [
		{
			type: "column",
			dataPoints: data
		}
		]
	}
    return (
        <div>
			<CanvasJSChart options = {options} />
		</div>
    );
}