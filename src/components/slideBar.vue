<template>
  
    <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
    <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <span class="fs-5 fw-semibold">Meajo University</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <router-link to="/"><button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
          Home
        </button></router-link>
      </li>
      <li class="mb-1">
        <router-link to="/news"><button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          News
        </button></router-link>
      </li>
      <li class="mb-1">
        <router-link to="/add"><button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Add
        </button></router-link>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <router-link to="/drop"><button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Drop
        </button></router-link>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>