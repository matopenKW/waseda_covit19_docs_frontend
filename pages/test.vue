<template>
    <div id="forgot-password">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <!-- Nested Row within Card Body -->
                    <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                            <p class="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                        </div>
                        <form class="user">
                            <div class="form-group">
                            <input type="email" class="form-control form-control-user" aria-describedby="emailHelp" placeholder="Enter Email Address..." v-model="email">
                            </div>
                            <a href="javascript:void(0);" @click="test" class="btn btn-primary btn-user btn-block">
                            Test
                            </a>
                        </form>
                        <hr>
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
import axios from 'axios';

export default {
    layout ({ store }) {
        return 'login'
    },
    data: function(){
        return {
            email: "",
        }
    },
    methods: {
        async test(){
            let user = {
                email : "test@example.com",
                password : "1234qwer"
            }
            this.$store.dispatch('login', user)
            // firebase.auth().signInWithEmailAndPassword(email, pass).then(res => {
            //     res.user.getIdToken().then(idToken => {
            //         this.$axios
            //         .$get('/login', {
            //             headers: {'Authorization': `Bearer ${idToken.toString()}`}
            //         })
            //         .then((res) => {
            //             console.log(res)
            //         })
            //         .catch(err => {
            //             console.log(err)
            //         })
            //         .finally(() => {
            //             this.isSending = false;
            //         });
            //     })
    //                localStorage.setItem('jwt', idToken.toString())
            // })
            // var auth = firebase.auth();
            // auth.sendPasswordResetEmail(this.email).then(function() {
            //     alert("再設定用のメールを送りました。")
            // }).catch(function(error) {
            //     alert('error')
            // });
        },
    },
}
</script>