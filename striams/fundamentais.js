import { Readable, Writable,Transform } from 'node:stream'

class onToHundredString extends Readable {
  index = 1

  _read(){
    const i = this.index++

    setTimeout(()=>{
      if(i > 100){
        this.push(null)
      }else{
        const buf = Buffer.from(String(i))
        this.push(buf)
        
      }
    }, 1000)
  }
}

class InversNumber extends Transform {
  _transform(chunk,ecoding,callback){
    const tranforme = Number(chunk.toString()) * -1
    callback(null, Buffer.from(String(tranforme)))
  }
}

class multiplay extends Writable{
  _write(chunk,ecoding,callback){
  console.log(Number(chunk.toString()) * 10)
  callback()
  }
}

new onToHundredString()
.pipe(new InversNumber())
.pipe(new multiplay())
