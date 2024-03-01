// config.js
const n = 1;
const config = {

    // http://patrickweb.42web.io
    // http://localhost/socio/
    // http://127.0.0.1:5000

   apiUrl: n===1? 'http://localhost/socio/':n===2?'http://127.0.0.1:5000/upload':' http://patrickweb.42web.io ',

  };
  
  export default config;
  