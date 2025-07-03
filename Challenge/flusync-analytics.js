

// const data = {
//     labels: ["item", "Item 2", "Item 3", "Item 4"],
//     datasets: [{
//         data: [19, 66, 87, 34],
//         backgroundColor: ['#febef1'],
//         borderRadius: 5,
//     }],
    
// };const config = {
// type: 'bar',
// data: data,
// label: 'Data',
// options: {
//     scales: {
//         y: {
//             max: 100,
//             ticks: {
//                 callback: value => `${value}%`
//             },
//             display: false,
//             grid: {
//                 display: false
//             }
//         },
//         x:{
//             grid:{
//                 display: false
//             }
//         }
//     },
//     plugins: {
//         legend: {
//             display: false,
//             position: 'top',
//         },
//         tooltip: {
//             callbacks: {
//                 label: context => `${context.raw}%`
//             }
//         }
//     },
//     responsive: true,
//     maintainAspectRatio: false,


// }
// };


// new Chart(
// document.getElementById('chart1'),
// config
// );
const ctx = document.getElementById('PieChartOne')
  const PieChartOne = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['expenses', 'loss', 'profit', 'sales'],
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
  const ctxx = document.getElementById('PieChartTwo')
  const PieChartTwo = new Chart(ctxx, {
    type: 'doughnut',
    data: {
      labels: ['liquid', 'assets', 'equity', 'fixed'],
      datasets: [{
        label: 'Sample Data',
        data: [10, 45, 5, 30], // 4 data slots
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