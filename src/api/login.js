import request from '../services/request';
import api from './index'

export function login(data) {
  return request({
    url: api.Login,
    method: "post",
    data,
  })
}
