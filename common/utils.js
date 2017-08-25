import crypto from 'crypto'


export function sha256Encode (str) {
  return crypto.createHmac('sha256', 'haha')
                .update(str)
                .digest('hex')
}
