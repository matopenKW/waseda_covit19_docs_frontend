<template>
    <div id="top">
        <div class="row">
            <div id="carfare" class="app col-xs-6 col-sm-4 text-center" @click="clickPractice">
                <div class="title">練習日を入力</div>
                <div class="icon">
                    <img src="@/assets/svg/music.svg">
                </div>
            </div>
            <div id="warehouse" class="app col-xs-6 col-sm-4 text-center" @click="clickRoute">
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
        async clickPractice(){
            window.location.href = './practice'
        },
        async clickRoute(){
            window.location.href = './route'
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
    cursor: pointer;
}

.app .title {
    font-size: 2.5vh;
    margin: 2vh 0;
}

.app .icon {
    height: 40%;
    vertical-align: middle;
    display: flex;
    align-items: center;
	justify-content: center;

}

.app .icon img {
    height: 10vh;
}
</style>