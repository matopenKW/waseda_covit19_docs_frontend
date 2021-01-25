
<!-- コンタクトフォームの作成-->
<template>
    <div class="p-contact"> <!-- p-contact__itemというクラスを作成　divでレイアウトを作成-->
        <form class="p-contact__form"  
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
    
        <div class="p-contact__item">
            <label for="username">お名前</label>
            <input type="text" 
                    id="username"
                    name="username" 
                    v-model="username" 
                    autocomplete="name">
        </div>
      <!-- /.p-contact__item -->

        <div class="p-contact__item">
            <label for="katakana">フリガナ</label>
            <input type="text" 
                    id="katakana"
                    name="katakana"
                    v-model="katakana">
        </div>
      <!-- /.p-contact__item -->

        <div class="p-contact__item">
            <label for="useremail">メールアドレス</label>
            <input type="text"
                    id="useremail"
                    name="useremail"
                    v-model="useremail"
                    autocomplete="email">
        </div>  
      <!-- /.p-contact__item -->

        <div class="p-contact__item">
            <label for="message">お問い合わせ内容</label>
            <textarea id="message"
                   name="message"
                v-model="message">
            </textarea>
        </div>
      <!-- /.p-contact__item -->

        <div class="p-contact__item" v-show="false">
            <label for="message">スパムでない場合は空欄</label>
            <input type="text"
                    name="bot-field"
                    v-model="botField"/>
        </div>
      <!-- /.p-contact__item -->

        <div class="p-contact__submit">
            <button type="submit">送信</button>
        </div>
      <!-- /.p-contact__submit -->
        </form>
    <!-- /.p-contact__form -->
    </div>
</template>
