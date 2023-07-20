import jwt from "jsonwebtoken"

// generado de jwt
export const generateJWT = (nombre) => {
  const secret = process.env.SECRET_KEY || 'defaultSecret'
  return new Promise((resolve, reject) => {
    const payload = { nombre }
    jwt.sign(
      payload,
      secret,
      {
        expiresIn: "1d"
      },
      (err, token) => {
        if (err) {
          console.log(err)
          reject("error en generar token")
        } else {
          resolve(token)
        }
      }
    )
  })
}


export const decodedToken = (token) => {
  const decoded = new Promise((resolve, reject) => {
    const secret = process.env.SECRET_KEY || 'defaultSecret'
    try {
      const payload = jwt.verify(token, secret);

      if (payload?.exp && Date.now() >= payload.exp * 1000) {
        reject({
          status: 401,
          message: 'El token ha expirado'
        })
      }

      resolve(payload)

    } catch (err) {
      reject({
        status: 500,
        message: `Token inválido ${err}`
      })
    }
  })
  return decoded
}