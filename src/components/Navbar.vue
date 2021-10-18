<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <div>
      <h1>
        <i class="fas fa-video text-primary"></i>
        Cinema Search
      </h1>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active{
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
