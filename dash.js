var canvas1 = document.getElementById("myChart1");
var canvas2 = document.getElementById("myChart2");
var canvas3 = document.getElementById("myChart3");
var canvas4 = document.getElementById("myChart4");

const data1 = [
  5587, 5000, 5709, 5100, 5123, 5349, 5298, 4923, 5001, 5003, 5006, 4898,
];
const data2 = [12, 19, 6789, 5, 2, 3];
const data3 = [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3];
const data4 = [12, 19, 3, 5, 2, 3];

// A function to generate colors based on the data
function generateColors(data) {
  const colors = [];
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      colors.push("rgba(255, 255, 0, 0.65)"); // The first bar to yellow
    } else if (data[i] > data[i - 1]) {
      colors.push("rgba(50, 255, 50, 0.65)"); // Next bar is bigger => green
    } else {
      colors.push("rgba(255, 50, 50, 0.8)"); // Next bar is smaller => red
    }
  }
  return colors;
}

if (canvas1) {
  new Chart(canvas1, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Fév",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Dépot (en Million MRU)",
          data: data1,
          borderWidth: 1,
          backgroundColor: generateColors(data1),
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          min: 4800,
          max: 5800,
          ticks: {
            stepSize: 100,
          },
        },
      },
    },
  });
}

if (canvas2) {
  new Chart(canvas2, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Fév",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Crédit (en Million MRU)",
          data: data2,
          borderWidth: 1,
          backgroundColor: generateColors(data2),
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          min: 5600,
          max: 7000,
          ticks: {
            stepSize: 200,
          },
        },
      },
    },
  });
}

if (canvas3) {
  new Chart(canvas3, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Fév",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Clients",
          data: data3,
          borderWidth: 1,
          backgroundColor: generateColors(data3),
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          min: 21500,
          max: 26500,
          ticks: {
            stepSize: 500,
          },
        },
      },
    },
  });
}

if (canvas4) {
  new Chart(canvas4, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Fév",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Comptes",
          data: data4,
          borderWidth: 1,
          backgroundColor: generateColors(data4),
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          min: 22000,
          max: 28000,
          ticks: {
            stepSize: 1000,
          },
        },
      },
    },
  });
}
