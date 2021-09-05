import React from "react";

import Chart from "../Chart/Chart";
import "./FinanceChart.css";

const FinanceChart = (props) => {
  const chartDataPoints = [
    { monthNumber: 1, label: "Jan", value: 0 },
    { monthNumber: 2, label: "Feb", value: 0 },
    { monthNumber: 3, label: "Mar", value: 0 },
    { monthNumber: 4, label: "Apr", value: 0 },
    { monthNumber: 5, label: "May", value: 0 },
    { monthNumber: 6, label: "Jun", value: 0 },
    { monthNumber: 7, label: "Jul", value: 0 },
    { monthNumber: 8, label: "Aug", value: 0 },
    { monthNumber: 9, label: "Sep", value: 0 },
    { monthNumber: 10, label: "Oct", value: 0 },
    { monthNumber: 11, label: "Nov", value: 0 },
    { monthNumber: 12, label: "Dec", value: 0 },
  ];

  // for of as we are going trought array (if object, in should be used)
  for (const finance of props.filteredFinance) {
    // sum of values
    const financeMonth = finance.date.getMonth(); //starting at 0 (January)
    // I can use thi index as months start in index 0
    chartDataPoints[financeMonth].value += finance.price;
  }

  return <Chart dataPoints={chartDataPoints}></Chart>;
};

export default FinanceChart;
