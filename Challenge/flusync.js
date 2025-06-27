/*const ctx = document.getElementById('chart1');
const chart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Data',
            data: [65, 59, 80, 81],
            fill: true,
            backgroundColor: 'rgb(0, 0, 0,1)',
            borderColor: 'rgb(0, 0, 0)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
    
        }
    }
});
const options = {
    maintainaspectratio: false,
}
chart1.resize(300, 150);*/



const data = {
    labels: ["item", "Item 2", "Item 3", "Item 4"],
    datasets: [{
        data: [19, 66, 87, 34],
        backgroundColor: ['#febef1'],
        borderRadius: 5,
    }],
    
};const config = {
type: 'bar',
data: data,
label: 'Data',
options: {
    scales: {
        y: {
            max: 100,
            ticks: {
                callback: value => `${value}%`
            },
            display: false,
            grid: {
                display: false
            }
        },
        x:{
            grid:{
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: context => `${context.raw}%`
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,


}
};


new Chart(
document.getElementById('chart1'),
config
);
const ctx = document.getElementById('chart2');
const chart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f',],
        datasets: [{
            data: [73, 65, 87, 74, 98, 35, 10],
            fill: false,
            backgroundColor: 'rgb(0, 0, 0,1)',
            borderColor: 'rgb(0, 0, 0)',
            tension: 0.5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                display: true,
                grid: {
                    display: true
                }
            },
            x:{
                grid:{
                    display: false
                }
            }
        },
        elements: {
            point: {
                radius: 0
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
    
        }
    }
});
const options = {
    maintainaspectratio: false,
}

const ctx2 = document.getElementById('chart3');
const chart3 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            data: [73, 65, 87, 74, 98, 36, 15],
            fill: false,
            backgroundColor: '#d0c9f0',
            borderColor: 'rgb(0, 0, 0)',
            tension: 0.5,
            borderRadius: 10,
            barThickness: 5,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {

                max: 100,
                ticks: {
                    callback: function(value,index) {
                        const labels = ['25%', '50%', '75%', '100%'];
                        return labels[index];
                    },
                },
                display: false,
                grid: {
                    display: true
                }
            },
            x:{
                position: 'top',
                grid:{
                    display: false
                },
                stacked: false,

            },

        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
    
        }
    }
});

let globalUsername;

// const username = document.getElementById('username').value;
const displayUsername = document.getElementById('displayUsername')
const username = localStorage.getItem('username')


displayUsername.innerText += username

let login = document.getElementById('upgrade');

// if(username === ''){
//     login.innerText = "signup"
// }
// else{
//     login.innerText = "welcome"
// }

