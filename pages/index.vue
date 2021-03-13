<template>
  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input type="email" class="form-control form-control-user" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."  v-model="email">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user" id="inputPassword" placeholder="Password" v-model="password">
                    </div>
                    <!-- <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div> -->
                    <a href="javascript:void(0);" @click="login" class="btn btn-primary btn-user btn-block">
                      Login
                    </a>
                  </form>
                  <hr>
                  <div class="text-center">
                    <a class="small" href="/register">Register Account</a>
                  </div>
                  <hr>
                  <div class="text-center">
                    <a class="small" href="/forgot-password">Forgot Password?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  layout ({ store }) {
      return 'login'
  },
  data: function(){
      return {
      email: "",
      password: "",
    }
  },
  methods: {
    async login(){
      var email = this.email
      var password = this.password

      var reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      if (!reg.test(email)){
        alert('メールアドレスの形式が不正です。');
        return
      }
      try{
        var idToken = await this.$axios.$put(this.$urls.firebase + '/login', {
            email: email,
            password: password,
        })
        this.$store.commit("setToken", idToken)
        this.$router.push('/wasephil')

      } catch(e){
        if (!e || !e.response || !e.response.data){
          alert('server error')
          return
        }

        var err = e.response.data
        if (err.code === 'auth/invalid-email') {
          alert('メールアドレスの形式が不正です。');

        } else if (err.code === 'auth/wrong-password') {
          alert('パスワードが間違っている又は不正な形式です。');

        } else if (err.code === 'auth/user-not-found') {
          alert('存在しないユーザー又は削除された可能性があります。');

        } else if (err.code === 'auth/email-already-in-use'){
          alert('既に登録してあるメールアドレスです。');

        } else if (err.code === 'auth/weak-password') {
          alert('パスワードは６桁以上で登録してください。');

        } else if (err.code === 'auth/too-many-requests') {
          alert('ログイン失敗が続いたためアクセスが無効となっています。再度パスワード設定してください。');

        } else {
          alert(err.message);
        }
        console.log(err);
      }
    }
  },
}
</script>