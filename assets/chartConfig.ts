export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        borderColor: '#0D58C6',
        backgroundColor: "#0D58C6",
        data: [40, 39, 10, 40, 39, 80, 40]
      },
      {
        label: 'Data two',
        borderColor: "#F59E0B",
        backgroundColor: "#F59E0B",
        data: [40, 39, 20, 30, 50, 70, 80]
      }
    ]
  }
  
  export const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
        }
      },
      y: {
      }
    },
    plugins: {
      legend: {
      display: true
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        titleColor: '#00000066',
        backgroundColor: '#fff',
        bodyColor: 'rgba(0, 0, 0, 0.88)',
        bodySpacing: 2,
        padding: 20,
        boxPadding: 6,
        displayColors: true,
        bodyFont: {
          size: 16,
          weight: 500,
          lineHeight: 2
        },
        callbacks: {
          label(tooltipItems: any) {
            return ` ${tooltipItems.formattedValue}% ${tooltipItems.dataset.label}`
        },
        },
      }
   },
  hover: {
  mode: 'nearest',
  intersect: false
    },
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point:{
        borderWidth: 1,
          radius: 0
      }
  }
}