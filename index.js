const express = require('express');

const server = express();

server.use(express.static('src'));

server.get('/',(req,res)=>{
	return res.static('htpp://localhost:3000')
});
server.listen(3000);
console.log('servidor rodando na porta 3000');


