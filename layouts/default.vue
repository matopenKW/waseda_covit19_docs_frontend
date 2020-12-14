<template>
  <div id="page-top">
    <div id="wrapper">

    <!-- Sidebar -->
    <!-- <Sidebar /> -->

    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <a href="javascript:void(0);" @click="top" class="btn btn-primary btn-circle">
            top
          </a>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="d-lg-inline text-gray-600 small">{{ $store.state.user.email }}</span>
              </a>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <nuxt />

        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2019</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>  
  </div>

</template>

<script>
import firebase from '@/plugins/firebase';

export default {
  head: {
    script: [
      {
        src: "https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js"
      },
      {
        src: "https://www.gstatic.com/firebasejs/8.2.0/firebase-analytics.js"
      }
    ]
  },
  middleware ({store, redirect }){
      if (!store.state.user.login) {
        return redirect('/')
      }
  },
  components: {
    Sidebar: () => import ('~/components/Sidebar.vue'),
  },
  methods: {
    async top(){
      this.$router.push('/mock2')
    }
  },
  mounted: function(){

    // if (this.$store.getters['user'].login){
    //   alert('ログイン')
    // } else {
    //   alert('未ログイン')
    // }
  }
}
</script>
