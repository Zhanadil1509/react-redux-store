import {mockPhones} from './mockPhones'

export const fetchPhonesApi = async () => {
  return new Promise((resolve, reject) => {
    resolve(mockPhones)
  })
}
