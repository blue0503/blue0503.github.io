// 載入 http 的模組
var http = require('http');

var file_content;

var server = http.createServer(function(req, res) {
    // req 是本地端請求的訊息
    // res 是主機回傳到本地端的訊息

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World\n');
    res.write('這是個簡單的HTTP Server\n');
    res.write(file_content);
    res.end();
});

// 引用 File System 模組
var fs = require('fs');

console.log(__dirname);

var filename = __dirname + '\\web\\index.html';
console.log(filename);

// 讀取檔案
fs.readFile(filename, 'utf8', function(err, content) {
    if (err) {
        console.log('Failed to read');
        return;
    }

    // 將檔案內容印出
    console.log(content);
    file_content = content;
});

// 監聽 12345 port
server.listen(12345);
console.log('Server running at http://192.168.1.106:12345/');