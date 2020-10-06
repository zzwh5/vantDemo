import { get, post } from './http'
const api = {
  // 获取省市区
  address: 'smartCity/addressLibrary/findSubordinateAddressLibrary',
}
export const apiAddress = p => post(api.address, p)