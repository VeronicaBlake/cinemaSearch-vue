import { AppState } from '../AppState'
import { api } from './AxiosService'

class MoviesService {
  async getAll() {
    const res = await api.get('api/movies')
    AppState.movies = res.data
  }
}

export const moviesService = new MoviesService()
