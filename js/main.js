const onReady = (e)=>{

    console.log('DOC IS READY');
    $('#datepicker').datepicker();
    $('.timepicker').wickedpicker({
        minutesInterval: 15,
        now: "17:00",
    });


};


onAngelinaFunction = (e)=>{
    console.log('form submitted ');
    e.preventDefault();

    let customerName = $('#appt-name').val();
    let msg = `Congratulations, ${customerName}, your appointment is confirmed!`;
    console.log("EVENT ",{customerName, e});
    $('section#book').html(`<h3>${msg}</h3>`)

}



$(document).ready(onReady);

$('form#appt').submit(onAngelinaFunction);