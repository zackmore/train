const crypto = require('crypto')


function sha256Encode (str) {
  return crypto.createHmac('sha256', process.env.SECRET)
                .update(str)
                .digest('hex')
}

module.exports = {
  sha256Encode
}
