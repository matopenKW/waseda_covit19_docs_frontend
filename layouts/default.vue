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
          <a href="#" @click="top" class="btn btn-primary btn-circle">top</a>
          <a href="#" @click="logout" class="ml-2 d-sm-inline-block btn btn-sm btn-danger shadow-sm">ログアウト</a>
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

  </div>

</template>

<script>
import firebase from "~/plugins/firebase";

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
  middleware: "authenticated",
  components: {
    Sidebar: () => import ('~/components/Sidebar.vue'),
  },
  methods: {
    async top(){
      this.$router.push('/mock2')
    },
    async logout(){
      try{
        await firebase.auth().signOut()
        alert('ログアウトしました。')

        this.$cookies.remove('jwt')
        this.$router.push('/')
      }catch(error){
        alert(error.message)
      }
    },
  },
  mounted: function(){
  }
}
</script>
