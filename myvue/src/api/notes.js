import { HTTP } from './common'
export const Note = {
  create (config) {
    return HTTP.post('/articles/', config).then(response => {
      return response.data
    })
  },
  delete (note) {
    return HTTP.delete(`/articles/${note.id}/`)
  },
  list () {
    return HTTP.get('/articles/').then(response => {
      return response.data
    })
  }
}