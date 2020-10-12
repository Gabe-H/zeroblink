var url = 'http://192.168.0.50:8888'

$("#on").click(() => {
    console.log('on clicked');
    test()
});
$("#off").click(() => {
    console.log('off clicked');
    test()
});

function sendOn() {
    $.ajax({
        type: 'GET',
        url: url+'/start'
    })
}
function sendOff() {
    $.ajax({
        type: 'GET',
        url: url+'/stop'
    })
}
function test() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8888/test'
    })
}