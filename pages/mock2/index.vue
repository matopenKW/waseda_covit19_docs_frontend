<template>
  <div id="top" class="container-fluid">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>

    <!-- Content Row -->
    <div class="row">

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4" @click="practice">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="h5 mb-0 font-weight-bold text-gray-800">Practice</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-music fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4" @click="route">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="h5 mb-0 font-weight-bold text-gray-800">Route</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-subway fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    layout ({ store }) {
        return 'mock2'
    },
    methods: {
        async practice(){
            window.location.href = '/mock2/practice'
        },
        async route(){
            window.location.href = '/mock2/route'
        }
    }
}
</script>