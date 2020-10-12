var url = 'http://192.168.0.50:8888'

$("#on").click(() => {
    console.log('on clicked');
    sendOn()
});
$("#off").click(() => {
    console.log('off clicked');
    sendOff()
});

function sendOn() {
    $.ajax({
        type: 'GET',
        url: url+'/on'
    })
}
function sendOff() {
    $.ajax({
        type: 'GET',
        url: url+'/off'
    })
}
function test() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8888/test'
    })
}