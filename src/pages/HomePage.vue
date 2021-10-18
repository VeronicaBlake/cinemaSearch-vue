<template>
  <div class="containter">
    <div class="row">
      <div class="col-md-3">
        <div class="row">
          <div class="input-group">
            <div class="form-outline">
              <input type="search" id="form1" class="form-control" />
              <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
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
// set up the axios endpoint
// set up the appstate?
// search two criteria
// have a space where the search list is
// space for active movie
// space for movies in related genres
export default {
  name: 'Home'
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
