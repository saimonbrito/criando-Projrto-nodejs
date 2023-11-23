import http from 'node:http'
import { Transform } from 'node:stream'

class InversNumber extends Transform {
  _transform(chunk,ecoding,callback){
    const tranforme = Number(chunk.toString()) * -1
    console.log(tranforme)
    callback(null, Buffer.from(String(tranforme)))
  }
}

//req => ReadableStream
// res => writableStream 

const server = http.createServer(async (req, res)=>{
  const buffers = []
  for await (const chunk of req){
    buffers.push(chunk)
  }
  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)
  return res.end(fullStreamContent)
})

server.listen(3334,()=>{
    console.log("server2 rodando")
})