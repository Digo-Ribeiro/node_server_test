'use strict'

const net = {
	express: require('express'),
	port: 3000
}

const app = new net.express

app.get(`/`,  (req,res)=>{

	res.send(`Hello World!`)
	res.end()

})

app.listen(net.port, ()=>{console.log(`[  OK  ] Server started at port ${net.port}`)})
