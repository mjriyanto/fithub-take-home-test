import httpApi from '../utils/http-api.js'
import { api } from '../config/index.js'

export default {
  getScheduleLists: (data) => httpApi.postDataViaApi(api.schedule, data)
}