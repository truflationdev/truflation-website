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
    plugins: {
      legend: {
      display: true
      },
      tooltip: {
      mode: 'index',
      intersect: false,
      titleFontColor: '#000',
      bodyFontColor: 'rgba(0, 0, 0, 0)',
      displayColors: true
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
          radius: 0
      }
  },
  }
  