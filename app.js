var express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.listen(8888);
console.log('listening on port 8888');

app.get('/', (req, res) => {
    res.sendFile('index.html' , { root : __dirname});
});
app.get('/test', (req, res) => {
    res.send('got test')
})