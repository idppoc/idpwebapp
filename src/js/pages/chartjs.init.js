/*
Template Name: Highdmin - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Chart js init
*/

! function ($) {
    "use strict";

    var ChartJs = function () {
        this.$body = $("body"),
            this.charts = []
    };

    ChartJs.prototype.respChart = function (selector, type, data, options) {

        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        //default config
        Chart.defaults.global.defaultFontColor = "#8391a2";
        Chart.defaults.scale.gridLines.color = "rgba(150, 150, 150, 0.1)";

        // this function produce the responsive Chart JS
        function generateChart() {
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width());
            var chart;
            switch (type) {
                case 'Line':
                    chart = new Chart(ctx, { type: 'line', data: data, options: options });
                    break;
                case 'Doughnut':
                    chart = new Chart(ctx, { type: 'doughnut', data: data, options: options });
                    break;
                case 'Pie':
                    chart = new Chart(ctx, { type: 'pie', data: data, options: options });
                    break;
                case 'Bar':
                    chart = new Chart(ctx, { type: 'bar', data: data, options: options });
                    break;
                case 'Radar':
                    chart = new Chart(ctx, { type: 'radar', data: data, options: options });
                    break;
                case 'PolarArea':
                    chart = new Chart(ctx, { data: data, type: 'polarArea', options: options });
                    break;
            }
            return chart;
        };
        // run function - render chart at first load
        return generateChart();
    },
        // init various charts and returns
        ChartJs.prototype.initCharts = function () {
            var charts = [];
            var defaultColors = ["#1abc9c", "#f1556c", "#3bafda", "#e3eaef"];

            if ($('#line-chart-example').length > 0) {
                var dataColors = $("#line-chart-example").data('colors');
                var colors = dataColors? dataColors.split(",") : defaultColors.concat();

                var lineChart = {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                    datasets: [{
                        label: "Conversion Rate",
                        fill: false,
                        backgroundColor: hexToRGB(colors[0], 0.3),
                        borderColor: colors[0],
                        data: [44,60,-33,58,-4,57,-89,60,-33,58]
                    }, {
                        label: "Average Sale Value",
                        fill: true,
                        backgroundColor: 'transparent',
                        borderColor: colors[1],
                        borderDash: [5, 5],
                        data: [-68,41,86,-49,2,65,-64,86,-49,2]
                    }]
                };

                var lineOpts = {
                    maintainAspectRatio: false,
                    legend: {
                        display: true
                    },
                    tooltips: {
                        intersect: false
                    },
                    hover: {
                        intersect: true
                    },
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    scales: {
                        xAxes: [{
                            reverse: true,
                            gridLines: {
                                color: "rgba(150, 150, 150, 0.1)"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                stepSize: 20
                            },
                            display: true,
                            borderDash: [5, 5],
                            gridLines: {
                                color: "rgba(0,0,0,0)",
                                fontColor: '#fff'
                            }
                        }]
                    }
                };
                charts.push(this.respChart($("#line-chart-example"), 'Line', lineChart, lineOpts));
            }

            //barchart
            if ($('#bar-chart-example').length > 0) {
                var dataColors = $("#bar-chart-example").data('colors');
                var colors = dataColors? dataColors.split(",") : defaultColors.concat();

                var barChart = {
                    // labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "Sales Analytics",
                            backgroundColor: hexToRGB(colors[0], 0.3),
                            borderColor: colors[0],
                            borderWidth: 2,
                            hoverBackgroundColor: hexToRGB(colors[0], 0.7),
                            hoverBorderColor: colors[0],
                            data: [65, 59, 80, 81, 56, 55, 40,20]
                        }
                    ]
                };
                var barOpts = {
                    maintainAspectRatio: false,
                    legend: {
                        display: true
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true
                            },
                            stacked: false,
                            ticks: {
                                stepSize: 20
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: true
                            },
                            barPercentage: 0.7,
                            categoryPercentage: 0.5,
                            stacked: false
                        }]
                    }
                };

                charts.push(this.respChart($("#bar-chart-example"), 'Bar', barChart, barOpts));
            }

            if ($('#pie-chart-example').length > 0) {
                var dataColors = $("#pie-chart-example").data('colors');
                var colors = dataColors? dataColors.split(",") : defaultColors.concat();
                //pie chart
                var pieChart = {
                    labels: [
                        "Desktops",
                        "Tablets",
                        "Mobiles",
                        "Mobiles",
                        "Tablets"
                    ],
                    datasets: [
                        {
                            data: [80, 50, 100,121,77],
                            backgroundColor: colors,
                            borderColor: "#fff",
                        }
                    ]
                };
                var pieOpts = {
                    maintainAspectRatio: false,
                    legend: {
                        display: true
                    }
                };
                charts.push(this.respChart($("#pie-chart-example"), 'Pie', pieChart, pieOpts));
            }

            if ($('#donut-chart-example').length > 0) {
                //donut chart
                var dataColors = $("#donut-chart-example").data('colors');
                var colors = dataColors? dataColors.split(",") : defaultColors.concat();
                var donutChart = {
                    labels: [
                        "Bitcoin",
                        "Ethereum",
                        "Litecoin",
                        "Bitcoin Cash",
                        "Cardano"
                    ],
                    datasets: [
                        {
                            data: [80, 50, 100,121,77],
                            backgroundColor: colors,
                            borderColor: "#fff",
                        }]
                };
                var donutOpts = {
                    maintainAspectRatio: false,
                    cutoutPercentage: 60,
                    legend: {
                        display: true
                    }
                };
                charts.push(this.respChart($("#donut-chart-example"), 'Doughnut', donutChart, donutOpts));
            }

            if ($('#polar-chart-example').length > 0) {
                //Ploar chart
                var dataColors = $("#polar-chart-example").data('colors');
                var colors = dataColors? dataColors.split(",") : defaultColors.concat();
                var polarChart = {
                    labels: [
                        "Series 1",
                        "Series 2",
                        "Series 3",
                        "Series 4"
                    ],
                    datasets: [
                        {
                            data: [11, 16, 7, 18],
                            backgroundColor: colors,
                            borderColor: "transparent",
                        }
                    ]
                };
                var polarChartOpts = {
                    scale: {
                        ticks: {
                            backdropColor: 'transparent'
                        },
                        angleLines: {
                            color: 'rgba(150, 150, 150, 0.1)' // lines radiating from the center
                        }
                    }
                };
                charts.push(this.respChart($("#polar-chart-example"), 'PolarArea', polarChart, polarChartOpts));
            }

            if ($('#radar-chart-example').length > 0) {
                var dataColors = $("#radar-chart-example").data('colors');
                var colors = dataColors? dataColors.split(",") : defaultColors.concat();
                //radar chart
                var radarChart = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [
                        {
                            label: "Desktops",
                            backgroundColor: hexToRGB(colors[0], 0.3),
                            borderColor: colors[0],
                            pointBackgroundColor: colors[0],
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: colors[0],
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: "Tablets",
                            backgroundColor: hexToRGB(colors[1], 0.3),
                            borderColor: colors[1],
                            pointBackgroundColor: colors[1],
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: colors[1],
                            data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ]
                };
                var radarOpts = {
                    maintainAspectRatio: false,
                    scale: {
                        ticks: {
                            backdropColor: 'transparent'
                        },
                        angleLines: {
                            color: 'rgba(150, 150, 150, 0.1)' // lines radiating from the center
                        }
                    }
                };
                charts.push(this.respChart($("#radar-chart-example"), 'Radar', radarChart, radarOpts));
            }
            return charts;
        },
        //initializing various components and plugins
        ChartJs.prototype.init = function () {
            var $this = this;
            // font
            Chart.defaults.global.defaultFontFamily = 'Nunito,sans-serif';

            // init charts
            $this.charts = this.initCharts();

            // enable resizing matter
            $(window).on('resize', function (e) {
                $.each($this.charts, function (index, chart) {
                    try {
                        chart.destroy();
                    }
                    catch (err) {
                    }
                });
                $this.charts = $this.initCharts();
            });
        },

        //init ChartJs
        $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs
}(window.jQuery),

//initializing ChartJs
function ($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
