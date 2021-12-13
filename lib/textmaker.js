const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')

const textmaker = async(text1, style) => {
if(style == 'poly'){
  var tstyle = 0
}
else if(style == 'bold'){
  var tstyle = 1
}
else if(style == 'glowing'){
  var tstyle = 2
}
else if(style == 'colorful'){
  var tstyle = 3
}
else if(style == 'army'){
  var tstyle = 4
}
else if(style == 'retro'){
  var tstyle = 5
}
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url:"https://photooxy.com/other-design/make-a-video-that-spells-your-name-237.html",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { optionNumber_0: tstyle ,text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

module.exports = { textmaker }