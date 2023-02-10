<template>
     <div class="card margin-box" style="width: 60%;">
    <div class="card-body">
    <h5 class="card-title">Drop</h5>

    <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">name</span>
        <input type="text" class="form-control" placeholder="ชื่อ-นามสกุล" aria-label="Username" aria-describedby="addon-wrapping">
    </div><br>
    <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">code</span>
        <input type="number" class="form-control" placeholder="รหัสนักศึกษา" aria-label="Username" aria-describedby="addon-wrapping">
    </div><br>
    <select class="form-select" aria-label="Default select example">
  <option selected>เลือกรายวิชาที่ต้องการ Drop</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    <br><br>
    <a href="#" class="btn btn-primary">Click Go Drop</a>
  </div>
     </div>
</template>

<script>
export default {

}
</script>

<style>

</style>