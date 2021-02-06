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
import firebase from 'firebase/app';

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
      try{
        var res = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        var idToken = await res.user.getIdToken()
        this.$cookies.set('jwt', idToken)
        this.$router.push('/mock2')

      } catch(e){
        if (e.code === 'auth/invalid-email') {
          alert('メールアドレスの形式が不正です。');

        } else if (e.code === 'auth/wrong-password') {
          alert('パスワードが間違っている又は不正な形式です。');

        } else if (e.code === 'auth/user-not-found') {
          alert('存在しないユーザー又は削除された可能性があります。');

        } else if (e.code === 'auth/email-already-in-use'){
          alert('既に登録してあるメールアドレスです。');

        } else if (e.code === 'auth/weak-password') {
          alert('パスワードは６桁以上で登録してください。');

        } else {
          alert(e.message);
        }
        console.log(e);
      }
    }
  },
}
</script>