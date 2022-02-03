var tableEl = $("#table_body");
var clearEl = $('#clear_div');
var currentDayEl = $('#currentDay')

var now = moment();
var today = moment().format('YYYY-MM-DD');
// var now = moment(today + ', 12:00:00 pm');

currentDayEl.html(moment().format('MMMM Do YYYY'));

function setColors() {
    var nine = moment(today + 'T09:00:00')
    var ten = moment(today + 'T10:00:00')
    var eleven = moment(today + 'T11:00:00')
    var twelve = moment(today + 'T12:00:00')
    var one = moment(today + 'T13:00:00')
    var two = moment(today + 'T14:00:00')
    var three = moment(today + 'T15:00:00')
    var four = moment(today + 'T16:00:00')
    var five = moment(today + 'T17:00:00')

    var firstRow = $('#9am').parent();
    var firstText = $('#9am');
    compareTime(firstRow, firstText, nine);
    var secondRow = $('#10am').parent();
    var secondText = $('#10am');
    compareTime(secondRow, secondText, ten);
    var thirdRow = $('#11am').parent();
    var thirdText = $('#11am');
    compareTime(thirdRow, thirdText, eleven);
    var fourthRow = $('#12pm').parent();
    var fourthText = $('#12pm');
    compareTime(fourthRow, fourthText, twelve);
    var fifthRow = $('#1pm').parent();
    var fifthText = $('#1pm');
    compareTime(fifthRow, fifthText, one);
    var sixthRow = $('#2pm').parent();
    var sixthText = $('#2pm');
    compareTime(sixthRow, sixthText, two);
    var seventhRow = $('#3pm').parent();
    var seventhText = $('#3pm');
    compareTime(seventhRow, seventhText, three);
    var eighthRow = $('#4pm').parent();
    var eighthText = $('#4pm');
    compareTime(eighthRow, eighthText, four);
    var ninthRow = $('#5pm').parent();
    var ninthText = $('#5pm');
    compareTime(ninthRow, ninthText, five);
}

function compareTime(rowEl, textEl, time) {
    // var isafter = moment(date_time).isAfter('2014-03-24T01:14:00Z');
    if (moment().isBefore(time, 'hour')) {
        rowEl.addClass('bg-success');
        textEl.addClass('text-body');
    }
    else if (moment().isSame(time, 'hour')) {
        rowEl.addClass('bg-danger');
        textEl.addClass('text-body');
    }
    else if (moment().isAfter(time, 'hour'))/*now > nine */{
        rowEl.addClass('bg-secondary');
        textEl.addClass('text-light');
    }
}

setColors();

// if localStorage has items, populates page with contents
if (localStorage.length > 0) {
    // console.log($('#'+localStorage.key(0)));
    // i starts at 0 and gives us an index to loop through localStorage
    for (var i=0; i<localStorage.length; i++) {
        // jquery object ---------val function --------------change val to corresponding local storage item
        $('#'+localStorage.key(i)).val(localStorage.getItem(localStorage.key(i)))
    }
}

function saveData(event) {
    event.preventDefault();

    console.log(document.getElementById("9am").value);
    console.log($(this)[0].id);

    if ($(this)[0].id == 9) {
        localStorage.setItem("9am", document.getElementById("9am").value);
    }
    else if ($(this)[0].id == 10) {
        localStorage.setItem("10am", document.getElementById("10am").value);
    }
    else if ($(this)[0].id == 11) {
        localStorage.setItem("11am", document.getElementById("11am").value);
    }
    else if ($(this)[0].id == 12) {
        localStorage.setItem("12pm", document.getElementById("12pm").value);
    }
    else if ($(this)[0].id == 1) {
        localStorage.setItem("1pm", document.getElementById("1pm").value);
    }
    else if ($(this)[0].id == 2) {
        localStorage.setItem("2pm", document.getElementById("2pm").value);
    }
    else if ($(this)[0].id == 3) {
        localStorage.setItem("3pm", document.getElementById("3pm").value);
    }
    else if ($(this)[0].id == 4) {
        localStorage.setItem("4pm", document.getElementById("4pm").value);
    }
    else if ($(this)[0].id == 5) {
        localStorage.setItem("5pm", document.getElementById("5pm").value);
    }
    else {
        console.log("Error: Invalid ID = " + $(this)[0].id);
    }
}

tableEl.on("click", ".saveBtn", saveData);

clearEl.on("click", ".btn-danger", function() {
    localStorage.clear();
    location.reload();
})