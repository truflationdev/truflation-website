export const options = {
  scales: {
    x: {
      type: "time",
      time: {
        unit: "month",
      },
    },
    y: {},
  },
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: "index",
      intersect: false,
      titleColor: "#00000066",
      backgroundColor: "#fff",
      bodyColor: "rgba(0, 0, 0, 0.88)",
      bodySpacing: 2,
      padding: 20,
      boxPadding: 6,
      displayColors: true,
      bodyFont: {
        size: 16,
        weight: 500,
        lineHeight: 2,
      },
      callbacks: {
        title: function (context) {
          return `UTC+0 ${context[0].label} `;
        },
        label(tooltipItems: any) {
          return ` ${tooltipItems.formattedValue}% ${tooltipItems.dataset.label}`;
        },
      },
    },
  },
  hover: {
    mode: "nearest",
    intersect: false,
  },
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.1,
    },
    point: {
      borderWidth: 1,
      radius: 0,
    },
  },
};
