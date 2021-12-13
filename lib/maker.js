const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const FormData = require('form-data')

function flamingtext(text, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www6.flamingtext.com/Cool-Text-Generator/page${page}?text=${text}`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
			const pageall = $('div.ft-full > div > ul > li.pagination-page.last').text()
            $('div.ft-full > div > div.ft-logos > div').each(function (s, b) {
                hasil.push({
                    name: $(b).find('a').attr('href').split('/logo/')[1].split('?')[0],
                    detail: 'https://www6.flamingtext.com'+$(b).find('a').attr('href'),
                    image: 'https://www6.flamingtext.com'+$(b).find('img').attr('logo-src')
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                pageall: pageall,
                hasil: hasil
            })
        }).catch(reject)
    })
}

const base = `https://m.photofunia.com`
const photofunSearch = async(teks) => {
var res = await axios.get(`${base}/search?q=${teks}`)
var $ = cheerio.load(res.data) 
var hasil = []
$('ul > li > a.effect').each(function(a, b) {
let judul = $(b).find('span > span.name').text().replace('\n         ', '').replace('      ', '') 
let desc = $(b).find('span > span.description').text()
let thumb = $(b).find('img').attr('src') 
let link = 'https://m.photofunia.com' + $(b).attr('href') 
hasil.push({ judul, desc, thumb, link}) 
}) 
return hasil
}

const photofunEffect = async(url) => {
var emror = { 

"error" : "Link Tidak Valid"

 }
if (!url.includes(base)) return emror
var res = await axios.get(url)
var $ = cheerio.load(res.data)
var hasil = []
var inputs = []
let exam = $('div > div.image-preview > a > img').attr('src')
let judul = $('div > h2').text() 
$('form > div >  input').each(function(a, b) {
let input = $(b).attr('name')
inputs.push({ input }) 
}) 
let desc = $('div.description').text() 
hasil.push({ judul, desc, exam, inputs }) 
return hasil
}

const photofunUse = async (teks, url) => {
var emror = { 

"error" : "Link Tidak Valid"

 }
if (!url.includes(base)) return emror
let form = new FormData()
form.append("text", teks)
let post = await fetch(url, { method: "POST", headers: { "User-Agent": "GoogleBot", ...form.getHeaders(), }, body: form.getBuffer(), } )
let html = await post.text()
var $ = cheerio.load(html)
let gambar = $('div.image-container').find('img').attr('src')
return gambar
}

module.exports = { flamingtext, photofunSearch, photofunEffect, photofunUse }