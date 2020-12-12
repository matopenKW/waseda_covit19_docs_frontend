<template>
  <div>
      <nuxt />
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";
import "firebase/auth";

export default {
  head: {
      script: [
      {
        src: "https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js"
      },
      {
        src: "https://www.gstatic.com/firebasejs/8.2.0/firebase-analytics.js"
      }
    ],
    bodyAttrs: {
      class: 'bg-gradient-primary'
    }
  },
  mounted: function(){
    var firebaseConfig = {
      apiKey: "AIzaSyCEva2RHNXoQuiybY1OnN0rMTbZ3vYw-OY",
      authDomain: "waseda-covite19-docs.firebaseapp.com",
      projectId: "waseda-covite19-docs",
      storageBucket: "waseda-covite19-docs.appspot.com",
      messagingSenderId: "411783997613",
      appId: "1:411783997613:web:0c2a91df34cab0bfcb7e24",
      measurementId: "G-VRK8088N7M"
    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }
}
</script>