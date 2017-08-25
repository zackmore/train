import crypto from 'crypto'


export function sha256Encode (str) {
  return crypto.createHmac('sha256', process.env.SECRET)
                .update(str)
                .digest('hex')
}
