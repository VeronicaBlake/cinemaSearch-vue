import { AppState } from '../AppState'
import { api } from './AxiosService'

class MoviesService {
  async getAll() {
    const res = await api.get('https://6wh65vbmy7.execute-api.us-west-2.amazonaws.com/test/movies')
    AppState.movies = res.data
  }
}

export const moviesService = new MoviesService()
