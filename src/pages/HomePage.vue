<template>
  <div class="containter">
    <div class="row">
      <div class="col-md-3">
        <!-- <div class="row">
          <div class="input-group">
            <div class="form-outline">
              <input type="search" id="form1" class="form-control" />
              <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div> -->
      </div>
      <div class="col-md-6">
        Here's where the active movie stuff goes
      </div>
      <div class="col-md-3">
        <h1>Other Movies You Might Like: </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { moviesService } from '../services/MoviesService'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      movies: computed(() => AppState.movies)
    })
    onMounted(async() => {
      try {
        await moviesService.get()
      } catch (error) {
        Pop.toast('Unable to get all movies', error)
        logger.log(error)
      }
    })
    return {
      state,
      movies: computed(() => AppState.movies)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
