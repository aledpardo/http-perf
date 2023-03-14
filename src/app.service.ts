import { Injectable } from '@nestjs/common';
// import http from 'node:http';
// import https from 'node:https';

// const httpAgent = new http.Agent({
//   keepAlive: true,
// });
// const httpsAgent = new https.Agent({
//   keepAlive: true,
// });

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFetch(): Promise<any> {
    return fetch('http://127.0.0.1:3000/');
  }

  getKeepAlive(): Promise<any> {
    // const options = {
    //   agent: function (_parsedURL) {
    //     if (_parsedURL.protocol == 'http:') {
    //       return httpAgent;
    //     } else {
    //       return httpsAgent;
    //     }
    //   },
    // };
    return fetch('http://127.0.0.1:3000/', {
      keepalive: true,
      // ...options,
    });
  }
}
