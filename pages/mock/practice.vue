<template>
    <div id="practice">
        <h2>活動内容記録表</h2>
        <div class="row">
            <div class="col-10">
                <p>日時</p>
                <input type="date">
            </div>
            <div class="col-10">
                <p>開始時刻</p>
                <input type="time">
            </div>
            <div class="col-10">
                <p>終了時刻</p>
                <input type="time">
            </div>
            <div class="col-10">
                <p>演習</p>
                <input type="radio" name="ennsyu">レギュラー
                <input type="radio" name="ennsyu">新練
                <input type="radio" name="ennsyu">卒演
            </div>
            <div class="col-10">
                <p>経路入力</p>
                マスタから経路を選択→
                <select name="Route" id="">
                    <option>経路１</option>
                    <option>経路２</option>
                    <option>経路３</option>
                    <option>経路４</option>                
                </select>
                <p>往路</p>
                <textarea></textarea>

            </div>
        </div>
        <div>
            <input id="logout-btn" type="button" class="btn btn-primary" value="送信">
        </div>
    </div>
</template>

<script>
export default {
    data:function() {
        return {
            message: "",
        }
    },
}
</script>

<style scoped>
label {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 36px;
  border: 2px solid #ccc;
  border-radius: 15px;
}
input[type="date"] {
  position: relative;
  padding: 0 10px;
  width: 200px;
  height: 36px;
  border: 0;
  background: transparent;
  box-sizing: border-box;
  font-size: 14px;
  color: #999;
}
input[type="time"] {
  position: relative;
  padding: 0 10px;
  width: 200px;
  height: 36px;
  border: 0;
  background: transparent;
  box-sizing: border-box;
  font-size: 14px;
  color: #999;
}

</style>