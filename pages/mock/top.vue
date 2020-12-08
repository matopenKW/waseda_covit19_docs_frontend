<template>
    <div id="top">
        <div class="row">
            <div id="carfare" class="app col-xs-12 col-sm-4 text-center" @click="clickCarfare">
                <div class="title">練習日を入力</div>
                <div class="icon">
                    <img src="@/assets/svg/music.svg">
                </div>
            </div>
            <div id="warehouse" class="app col-xs-12 col-sm-4 text-center" @click="clickWarehouse">
                <div class="title">経路を追加</div>
                <div class="icon">
                    <img src="@/assets/svg/train.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        async clickCarfare(){
            window.location.href = './carfare'
        },
        async clickWarehouse(){
            window.location.href = './warehouse'
        }
    }
}
</script>

<style>
.row {
    margin: 0 3vh;
}
.app {
    margin: 0 1vw;
    margin-bottom: 5.5vh;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
    height: 450px;
    cursor: pointer;
    
}

.app .title {
    font-size: 2.5vh;
    margin: 2vh 0;
}

.app .icon {
    height: 80%;
    background: #e9ecef;
    vertical-align: middle;
    display: flex;
    align-items: center;
	justify-content: center;

}

.app .icon svg {
    height: 150px;
}


</style>