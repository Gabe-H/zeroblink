var express = require('express');
var Gpio = require('onoff').Gpio;
const app = express();
var LED = new Gpio(4, 'out');

app.use(express.static(__dirname + '/public'));
app.listen(8888);
console.log('listening on port 8888');


app.get('/', (req, res) => {
    res.sendFile('index.html' , { root : __dirname});
});
app.get('/test', (req, res) => {
    res.send('got test')
});
app.get('/on', (req, res) => {
    LED.writeSync(1)
});
app.get('/off', (req, res) => {
    LED.writeSync(0)
})