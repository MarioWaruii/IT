
const ctx = document.getElementById('PieChartOne')
  const PieChartOne = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['expenditure', 'loss', 'profit', 'sales'],
      datasets: [{
        label: 'Sample Data',
        data: [45, 22, 5, 28], // 4 data slots
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: false,
          text: 'My 4-Slot Pie Chart'
        }
      }
    }
  });
const ctx2 = document.getElementById('PieChartTwo')
  const PieChartTwo = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['gross', 'salary', 'fixed', 'liquid'],
      datasets: [{
        label: 'Sample Data',
        data: [50, 23, 15, 12], // 4 data slots
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',    
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
       },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: false,
          text: 'My 4-Slot Pie Chart'
        }
      }
    }
  });