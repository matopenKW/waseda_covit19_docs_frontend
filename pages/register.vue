<template>
    <div id="register">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group">
                                    <input type="email" class="form-control form-control-user" placeholder="Email Address" v-model="email">
                                    </div>
                                    <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" class="form-control form-control-user" placeholder="Password" v-model="password">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user" placeholder="Repeat Password" v-model="repeatPassword">
                                    </div>
                                    </div>
                                    <a href="javascript:void(0);" @click="register" class="btn btn-primary btn-user btn-block">
                                    Register Account
                                    </a>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <a class="small" href="/forgot-password">Forgot Password?</a>
                                </div>
                                <div class="text-center">
                                    <a class="small" href="/">Already have an account? Login!</a>
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
import 'firebase/auth';
import 'firebase/firestore'

export default {
    layout ({ store }) {
        return 'login'
    },
    data: function(){
        return {
            email:"",
            password:"",
            repeatPassword:"",
        }
    },
    methods: {
        async register(){
            var reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
            if (!reg.test(this.email)){
                alert('メールアドレスの形式が不正です。');
                return
            } else if (this.password !== this.repeatPassword){
                alert('パスワードと確認パスワードが異なっています。')
                return 
            }
            try {
                await this.$axios.$post(this.$urls.api + '/create_user', {
                    email: this.email,
                    password: this.password,
                })

                alert('アカウントを作成しました。')
            } catch(e) {
                alert("server error")
                console.log(e)
            };
        }
    },
}
</script>