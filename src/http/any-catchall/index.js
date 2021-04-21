const { http } = require('@architect/functions')
// middleware proxy s3 assets
let asap = http.proxy({
  spa: false
})

exports.handler = http.async(asap)
