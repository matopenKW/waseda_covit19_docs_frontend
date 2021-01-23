<template>
  <div>
      <nuxt />
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
    ],
    bodyAttrs: {
      class: 'bg-gradient-primary'
    }
  },
  mounted: function(){
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }
}
</script>