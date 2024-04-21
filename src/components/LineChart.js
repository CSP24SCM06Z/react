import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Refer the high charts "https://github.com/highcharts/highcharts-react" for more information

const LineChart = (props) => {
  const config = {
    chart: {
      type: "line" 
    },
    title: {
      text: props.title,
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Issues",
      },
    },
    legend: {
      enabled: true, // Enabled legend for line chart to identify lines if needed
    },
    tooltip: {
      pointFormat: "Issues: <b>{point.y} </b>",
    },
    series: [
      {
        name: props.title,
        data: props.data,
        marker: {
          enabled: true, // Enable markers on each datapoint
          radius: 4  // Adjust marker radius
        },
        dataLabels: {
          enabled: true,
          format: "{point.y}", // one decimal
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
      />
    </div>
  );
};

export default LineChart;
