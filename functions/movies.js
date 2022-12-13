require('dotenv').config()
const axios = require('axios')

const API_END_POINT = process.env.API_END_POINT
const API_KEY = process.env.API_KEY

exports.handler = async (event) => {
  const url = JSON.parse(event.body)
  const { data } = await axios({
    url: `${API_END_POINT}?apikey=${API_KEY}&${url}`
  })
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
