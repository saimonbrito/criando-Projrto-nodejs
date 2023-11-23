import http from 'node:http'

const users = []
const server = http.createServer( async(req, res)=>{
    const { method, url } = req

    const buffers = []
    for await (const chunk of req){
      buffers.push(chunk)
    }
      try {
        req.bady  = json.parse(Buffer.concat(buffers).toString())
       console.log(req.bady)
      } catch (error) {
        req.bady = null
      }

    if(method == "GET" && url == '/users'){
        return res.setHeader('content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    if(method == "POST" && url == '/users'){
        const { name, email } = req.bady

          users.push({
            id: 1,
            name ,
            email,
        })

        return res.writeHead(201).end()
    }
    


    
    return res.writeHead(404).end()
})

server.listen(3333,()=>{
    console.log("server rodando")
})