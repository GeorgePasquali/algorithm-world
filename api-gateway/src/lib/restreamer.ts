// NOTE: this is modified from https://github.com/dominictarr/connect-restreamer

export function restreamer (options?: { property?: any; stringify?: any; modify?: any; }) {
    options = options || {}
    options.property = options.property || 'body'
    options.stringify = options.stringify || JSON.stringify
  
    return function (req: { [x: string]: any; method: string; removeAllListeners: { (arg0: string): void; (arg0: string): void; }; headers: { [x: string]: number; }; emit: { (arg0: string, arg1: any): void; (arg0: string): void; }; }, res: any, next: () => void) {
      if(req.method==="POST") {
        req.removeAllListeners('data')
        req.removeAllListeners('end')
        if(req.headers['content-length'] !== undefined){
          req.headers['content-length'] = Buffer.byteLength(options.stringify(req[options.property]), 'utf8')
        }
  
        process.nextTick(function () {
          if(req[options.property]) {
            if('function' === typeof options.modify)
              req[options.property] = options.modify(req[options.property])
            req.emit('data', options.stringify(req[options.property]))
          }
          req.emit('end')
        });
      }
      next()
    }
  }
  