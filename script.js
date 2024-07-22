var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-reponsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

var barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2],
        name: "Products",
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#2962ff",
        "#d50620",
        "#2e7d32",
        "#ff6620",
        "#583cb3"
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnwidth:"40%",
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#55596c",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#15f7ff",
        },
        show: true,
        position: "top"
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 1
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
     categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
        title: {
            style: {
                colors: "#f5f7ff",
            },
        },
        axisBorder: {
            show: true,
            color: "#55596e",
        },
        axisTricks: {
            show: true,
            color:"#55596e",
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            text: "count",
            style: {
                color: "#f5f7ff"
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTricks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },

};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
 barChart.render();


 var areaChartOptions = {
    series: [{
    name: 'TEAM A',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    name: 'TEAM B',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Series A',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Series B',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();
