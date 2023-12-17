const express = require('express');
const app = express();
const port = 1945;
// Untuk menampilkan halaman utama
app.get('/',(req, res)=>{
    res.sendFile(__dirname +'/index.html');
});
app.get('/tambah-postingan',(req, res)=>{
    res.sendFile(__dirname +'/tambah-postingan.html');
});
//Untuk menjalankan server
app.listen(port, ()=>{
    console.log(`Server berjalan di http://localhost:${port}`);
});