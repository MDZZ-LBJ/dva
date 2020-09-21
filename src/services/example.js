import request from '../utils/request';
const proxy = "/apis"

export function query() {
  return request('/api/users');
}

export function testCnode() {
  return request(proxy+'/api/v1/topics');
}