import * as r from 'ramda'

export const getPhoneById = (state, id) => r.prop(id, state.phones)

export const getPhones = (state) => {
  const phones = r.map(id => getPhoneById(state, id), state.phonesPage.ids)
  return phones
}
