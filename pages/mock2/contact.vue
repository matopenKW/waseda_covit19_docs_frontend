
<!-- コンタクトフォームの作成-->
<template>

    <div class="p-contact"> <!-- p-contact__itemというクラスを作成　divでレイアウトを作成-->
  
        <form class="p-contact__form "  
                name="contact" 
                method="POST"  
                @submit.prevent="onSubmit" :class="sendingClass">
          <!-- <form></form>タグは入力・送信フォームを作る時に使用。-->
          <!--このタグで、<input><textarea><select>のタグをくくると、テキストボックスや送信ボタン等の部品を配置できる-->
        　<!--name:フォームを識別するための名前　method:送信するときの転送方法　post:サーバーにデーターを送る形式　getとの違いはいまのところ不明-->
        　<!--@submit:送信ボタンを作成 @はv-onの省略形 .preventで送信したときの意図しない画面遷移を防ぐ-->  
         <!-- onSunmitって何？？？？　class="sendingClass"もあんまりちゃんとよくわかってない -->
        <input type="hidden" name="form-name" value="contact">
    <!-- inputはテキスト入力を受けるための要素/name:インプットの名前　value:送信されるデータを指定-->
    <!-- type="hidden"はユーザーには知る必要のない情報だけど、サーバーには送りたい情報-->
    <!--　この場合、hiddnによってnameとvalueはサーバーに送信しているけど、ブラウザでは非表示　-->

        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-5">
                    <div class="card-header py-4">
                        <h6 class="m-0 font-weight-bold text-primary">お名前</h6>
                    </div>
                      <div class="p-contact__item ml-3">
                      <input class="w-50" 
                            type="text" 
                            id="username"
                            name="username" 
                            v-model="username" 
                            autocomplete="name">
                    </div>
                </div>
            </div>
        </div>
<!--v-model:v-onとv-bindをまとめて記入したもの、画面上でボックスに入力した値がjsファイルに反映される -->
<!--autocomplete="name" 自動入力機能、ユーザーがブラウザに登録している情報を自動入力する-->
        
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-5">
                    <div class="card-header py-4">
                        <h6 class="m-0 font-weight-bold text-primary">フリガナ</h6>
                    </div>
                      <div class="p-contact__item ml-3">
                          <input class="w-50" 
                                type="text" 
                                id="katakana"
                                name="katakana"
                                v-model="katakana">
                      </div>
                </div>
            </div>
        </div>

      <!-- /.p-contact__item -->
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-5">
                    <div class="card-header py-4">
                        <h6 class="m-0 font-weight-bold text-primary">メールアドレス</h6>
                    </div>
                    <div class="p-contact__item ml-3">
                        <input class="w-50"  
                              type="text"
                              id="useremail"
                              name="useremail"
                              v-model="useremail"
                              autocomplete="email">
                    </div> 
                </div>
            </div>
         </div>
        
        
      <!-- /.p-contact__item -->

        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-5">
                    <div class="card-header py-4">
                        <h6 class="m-0 font-weight-bold text-primary">お問い合わせ内容</h6>
                    </div>
                     <div class="p-contact__item ml-3">
                          <textarea class="w-100" 
                              id="message"
                              name="message"
                              v-model="message">
                          </textarea>
                    </div>
                </div>
            </div>
        </div>

        
      <!-- /.p-contact__item -->

        <div class="p-contact__item" v-show="false">
            <label for="message">スパムでない場合は空欄</label>
            <input type="text"
                    name="bot-field"
                    v-model="botField"/>
        </div>
      <!-- v-showは表示非表示の切り替え-->

        <div class="p-contact__submit ml-4"> 
            <button type="submit" class="btn btn-info btn-icon-split">送信</button>
        </div>
      <!-- /.p-contact__submit -->
        </form>
    <!-- /.p-contact__form -->
    </div>
</template>

<!-- 以下コピペ　全く理解してません -->
<script>
  export default {
    data() {
      return {
        username        : '',
        katakana        : '',
        useremail       : '',
        message         : '',
        botField        : '',
        isSubmit        : false,
        isSending       : false,
        isError         : false,
        completeMessage : '',
      }
    },
    computed: {
      sendingClass(){
        return {
          'is-sending'  : this.isSending,
          'is-error'    : this.isError,
          'is-complete' : this.isSubmit
        };
      }
    },
    methods: {
      onSubmit() {
        if(this.isSending){
          return;
        }
        this.isSending = true;
        this.completeMessage = '送信処理中…';
        const params = new URLSearchParams();
        params.append('form-name', 'contact');
        params.append('username', this.username);
        params.append('katakana', this.katakana);
        params.append('useremail', this.useremail);
        params.append('message', this.message);
        if(this.botField){
          params.append('bot-field', this.botField);
        }
        this.$axios
        .$post('/', params)
        .then(() => {
          this.completeMessage = 'お問い合わせを送信しました！';
          this.resetForm();
          this.isSubmit  = true;
        })
        .catch(err => {
          this.completeMessage = 'お問い合わせの送信が失敗しました';
          this.isError   = true;
        })
        .finally(() => {
          this.isSending = false;
        });
      },

      resetForm() {
        this.username        = '';
        this.katakana        = '';
        this.useremail       = '';
        this.message         = '';
        this.isError         = false;
        this.$refs.observer.reset();
      }
    }
  }
</script>
