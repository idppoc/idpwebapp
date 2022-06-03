/*
Template Name: Highdmin - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Companies init js
*/

$( document ).ready(function() {
    
    var DrawSparkline = function() {
        var colors = ['#02c0ce'];
        var dataColors = $("#company-1").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#company-1').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
            type: 'line',
            width: "100%",
            height: '80',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.1),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        var colors = ['#02c0ce'];
        var dataColors = $("#company-2").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#company-2').sparkline([0, 25, 48, 32, 36, 20, 85, 56, 36], {
            type: 'line',
            width: "100%",
            height: '80',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.1),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        var colors = ['#02c0ce'];
        var dataColors = $("#company-3").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#company-3').sparkline([0, 36, 85, 25, 24, 56, 24, 28, 32], {
            type: 'line',
            width: "100%",
            height: '80',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.1),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        var colors = ['#02c0ce'];
        var dataColors = $("#company-4").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#company-4').sparkline([21, 28, 30, 35, 44, 82, 30, 37, 40], {
            type: 'line',
            width: "100%",
            height: '80',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.1),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        var colors = ['#02c0ce'];
        var dataColors = $("#company-5").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#company-5').sparkline([32, 28, 35, 89, 10, 15, 25, 37, 45], {
            type: 'line',
            width: "100%",
            height: '80',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.1),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        var colors = ['#02c0ce'];
        var dataColors = $("#company-6").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#company-6').sparkline([10, 25, 35, 35, 65, 75, 56, 37, 40], {
            type: 'line',
            width: "100%",
            height: '80',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.1),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        var colors = ['#02c0ce'];
        var dataColors = $("#company-7").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#company-7').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
            type: 'line',
            width: "100%",
            height: '80',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.1),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        var colors = ['#02c0ce'];
        var dataColors = $("#company-8").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#company-8').sparkline([8, 19, 31, 35, 44, 50, 32, 37, 40], {
            type: 'line',
            width: "100%",
            height: '80',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.1),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });
    }

    
    DrawSparkline();
    
    var resizeChart;

    $(window).resize(function(e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
            DrawSparkline();
        }, 300);
    });
});

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