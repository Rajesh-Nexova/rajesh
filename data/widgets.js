// export var marketChartData = {
//   labels: [80.0, 80.0, 60.0, 20.0, 70.0, 0, 80.0, 60.0, 110.0, 20.0, 60.0, 100, 70, 30],
//   series: [[80.0, 80.0, 60.0, 20.0, 70.0, 0, 80.0, 60.0, 110.0, 20.0, 60.0, 100, 70, 30]],
// };
// export var marketChartOptions = {
//   axisX: {
//     showGrid: false,
//     showLabel: true,
//     offset: 0,
//   },
//   axisY: {
//     showGrid: false,
//     low: 0,
//     showLabel: true,
//     offset: 0,
//   },
//   tooltips: {
//     disabled: true,
//   },
//   toolTipContent: "<a href = {name}> {label}</a><hr/>Views: {y}",
//   chartPadding: {
//     bottom: 0,
//     top: 0,
//     left: 0,
//   },
//   responsive: true,
//   height: 200,
// };
import configDB from "../data/customizer/config";

const primary = localStorage.getItem("primary_color") || configDB.data.color.primary_color;
const secondary = localStorage.getItem("secondary_color") || configDB.data.color.secondary_color;

export var marketChartData = {
  series: [
    {
      name: ["80.0", "80.0", "60.0", "20.0", "70.0", "0", "80.0", "60.0", "110.0", "20.0", "60.0", "100", "70", "30"],
      data: [80.0, 80.0, 60.0, 20.0, 70.0, 0, 80.0, 60.0, 110.0, 20.0, 60.0, 100, 70, 30],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 210,
      offsetY: 25,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
      },
    },
    colors: ["#3156f1"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
  },
  responsive: [
    {
      breakpoint: undefined,
    },
  ],
};

export var EarningChartData = {
  series: [
    {
      name: ["80.0", "80.0", "60.0", "20.0", "70.0", "0", "80.0", "60.0", "110.0", "20.0", "60.0", "100", "70", "30"],
      data: [60.0, 110.0, 20.0, 60.0, 100.0, 70, 30.0, 80.0, 80.0, 60.0, 20.0, 70, 0, 80],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 210,
      offsetY: 25,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
      },
    },
    colors: ["#3156f1"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
  },
  responsive: [
    {
      breakpoint: undefined,
    },
  ],
};

// const labels = ["1", "2", "3", "4", "5", "6"],

export const liveData = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      data: [1, 5, 2, 5, 4, 3, 6],
      lineTension: 0.5,
      borderColor: "#FFFFFF",
      // backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const liveOption = {
  maintainAspectRatio: false,
  height: 360,
  width: 500,
  bezierCurve: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  color: ["#FFFFFF"],
  responsive: true,
  scales: {
    y: {
      border: { dash: [4, 4] }, // for the grid lines
      grid: {
        color: "#FFFFFF", // for the grid lines
        tickColor: "#FFFFFF", // for the tick mark
        tickBorderDash: [2, 3], // also for the tick, if long enough
        tickLength: 10, // just to see the dotted line
        tickWidth: 2,
        offset: false,
        drawTicks: false, // true is default
        drawOnChartArea: true, // true is default
      },
      ticks: { color: "#FFFFFF", beginAtZero: true },
    },
    x: {
      border: { dash: [4, 4] }, // for the grid lines
      grid: {
        color: "#FFFFFF", // for the grid lines
        tickColor: "#FFFFFF", // for the tick mark
        tickBorderDash: [2, 3], // also for the tick, if long enough
        tickLength: 10, // just to see the dotted line
        tickWidth: 2,
        offset: false,
        drawTicks: false, // true is default
        drawOnChartArea: true, // true is default
      },
      ticks: { color: "#FFFFFF", beginAtZero: true },
    },
  },
};

export var turnoverData = {
  series: [
    {
      name: ["1", "2", "3", "4", "5", "6"],
      data: [1.9, 4.4, 1.5, 5, 4.4, 3.4],
    },
    {
      name: ["1", "2", "3", "4", "5", "6"],
      data: [6.4, 5.7, 7, 4, 5.5, 3.5],
    },
    {
      name: ["1", "2", "3", "4", "5", "6"],
      data: [5, 2.3, 3.6, 6, 3.6, 2.3],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 320,
      toolbar: {
        show: false,
      },
    },
    colors: ["#FFFFFF", "#B3E6F8", "#66CCF1"],
    plotOptions: {
      bar: {
        columnWidth: "50%",
        rangeBarOverlap: true,
        rangeBarGroupRows: false,
      },
    },
    stroke: {
      colors: ["transparent"],
      width: 5,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#ffffff",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6"],
      show: true,
    },
    legend: {
      show: false,
    },
    tooltips: {
      show: false,
    },
  },
};

export var MonthlySaleData = {
  series: [
    {
      name: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
    {
      name: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
  ],
  options: {
    chart: {
      type: "bar",
      stacked: true,
      height: 320,
      toolbar: {
        show: false,
      },
    },
    colors: ["#FFFFFF", "#B3E6F8"],
    stroke: {
      colors: ["transparent"],
      width: 5,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        horizontal: false,
        borderRadius: 1,
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#ffffff",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
      show: true,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export const usesData = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      data: [1, 5, 2, 5, 4, 3],
      lineTension: 0.5,
      borderColor: "#FFFFFF",
      // backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      data: [2, 3, 4, 8, 1, 2],
      lineTension: 0.5,
      borderColor: "#FFFFFF",
      // backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      data: [5, 4, 3, 2, 1, 0.5],
      lineTension: 0.5,
      borderColor: "#FFFFFF",
      // backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const usesOption = {
  maintainAspectRatio: false,
  height: 360,
  width: 500,
  bezierCurve: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  color: ["#FFFFFF"],
  responsive: true,
  scales: {
    y: {
      border: { dash: [4, 4] }, // for the grid lines
      grid: {
        color: "#FFFFFF", // for the grid lines
        tickColor: "#FFFFFF", // for the tick mark
        tickBorderDash: [2, 3], // also for the tick, if long enough
        tickLength: 10, // just to see the dotted line
        tickWidth: 2,
        offset: false,
        drawTicks: false, // true is default
        drawOnChartArea: true, // true is default
      },
      ticks: { color: "#FFFFFF", beginAtZero: true },
    },
    x: {
      border: { dash: [4, 4] }, // for the grid lines
      grid: {
        color: "#FFFFFF", // for the grid lines
        tickColor: "#FFFFFF", // for the tick mark
        tickBorderDash: [2, 3], // also for the tick, if long enough
        tickLength: 10, // just to see the dotted line
        tickWidth: 2,
        offset: false,
        drawTicks: false, // true is default
        drawOnChartArea: true, // true is default
      },
      ticks: { color: "#FFFFFF", beginAtZero: true },
    },
  },
};

export const financeData = {
  series: [
    {
      name: ["01", "02", "03", "04", "05", "06", "07"],
      data: [0, 5, 10, 7, 40, 30, 50],
    },
    {
      name: ["01", "02", "03", "04", "05", "06", "07"],
      data: [3, 27, 24, 32, 27, 47, 70],
    },
  ],
  options: {
    chart: {
      height: 200,
      type: "area",
      offsetY: 15,
      // offsetX: 20,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#3c79ed", "#4b83ee"],
    stroke: {
      width: 2,
      curve: "straight",
      colors: ["#005cea", "#005cea"],
    },
    grid: {
      show: false,
      padding: {
        left: -5,
        right: -10,
        top: -70,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
      followCursor: false,
    },
    legend: {
      show: false,
    },
  },
};

export const orderData = {
  series: [
    {
      name: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17"],
      data: [40, 15, 25, 20, 15, 20, 10, 25, 35, 13, 35, 10, 30, 20, 10, 15, 20],
    },
  ],
  options: {
    chart: {
      height: 200,
      type: "area",
      offsetY: 15,
      // offsetX: 20,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1ab3ea"],
    stroke: {
      width: 2,
      curve: "straight",
      colors: [secondary],
    },
    grid: {
      show: false,
      padding: {
        left: -5,
        right: -10,
        top: -70,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
      followCursor: false,
    },
    legend: {
      show: false,
    },
  },
};

export const skillData = {
  series: [
    {
      name: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17"],
      data: [5, 10, 20, 14, 17, 21, 20, 10, 4, 13, 0, 10, 30, 40, 10, 15, 20],
    },
  ],
  options: {
    chart: {
      height: 200,
      type: "area",
      offsetY: 15,
      // offsetX: 20,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#4b83ee"],
    stroke: {
      width: 2,
      curve: "straight",
      colors: ["#005cea"],
    },
    grid: {
      show: false,
      padding: {
        left: -5,
        right: -10,
        top: -30,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
      followCursor: false,
    },
    legend: {
      show: false,
    },
  },
};

export const browserData = {
  series: [500, 600, 400, 700],
  options: {
    chart: {
      height: 300,
      type: "donut",
    },
    colors: [primary, secondary, "#51bb25", "#544fff", "#fb740d"],
    legend: {
      show: false,
    },
    label: {
      show: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "75%",
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
            position: "bottom",
          },
        },
      },
    ],
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
  },
};
