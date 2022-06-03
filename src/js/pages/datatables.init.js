/*
Template Name: Highdmin - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Datatables init js
*/

$(document).ready(function() {

    // Default Datatable
    $('#basic-datatable').DataTable();

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf'],
        buttons: [
            { extend: 'copy', className: 'btn-light' },
            { extend: 'excel', className: 'btn-light' },
            { extend: 'pdf', className: 'btn-light' }
        ]
    });

    // Multi Selection Datatable
    $('#selection-datatable').DataTable({
        select: {
            style: 'multi'
        }
    });

    // Responsive Datatable
    $('#responsive-datatable').DataTable();

    // Key Datatable
    $('#key-datatable').DataTable({
        keys: true
    });

    table.buttons().container()
            .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');


});