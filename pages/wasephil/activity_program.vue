<template>
    <div id="practice" class="container-fluid">
        <form name="form">
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">活動内容記録表</h6>
                    </div>
                    <div class="card-body">
                        はうとーゆーず
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">氏名</h6>
                    </div>
                    <div class="card-body">
                        <p>【スペースなしで】記入してください。</p>
                        <input type="text" placeholder="芦田里紗">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">日時</h6>
                    </div>
                    <div class="card-body">
                        <div class="mb-3"><input type="date" v-model="practiceDate"></div>
                        <div><input type="time" v-model="startTime"> 〜 <input type="time" v-model="endTime"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">区分？？</h6>
                    </div>
                    <div class="card-body">
                        <p><input type="radio">レギュラー</p>
                        <p><input type="radio">新練</p>
                        <p><input type="radio">卒演</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">練習内容</h6>
                    </div>
                    <div class="card-body">
                        <select>
                            <option>会場を選択シテクダサイ</option>
                            <option>tutti</option>
                            <option>弦練</option>
                            <option>管打練</option>
                            <option>パート練</option>
                            <option>木管練</option>
                            <option>金管練</option>
                            <option>トップ練</option>
                            <option>引き継ぎ</option>
                            <option>アンサンブル</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">会場</h6>
                    </div>
                    <div class="card-body">
                        <select>
                            <option>経路マスタの値を参照</option>
                            <option>学生会館</option>
                            <option>奉仕園</option>
                            <option>雑司が谷地域文化創造館</option>
                            <option>板橋区立グリーンカレッジホール</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">経路</h6>
                    </div>
                    <div class="card-body" v-show="routeDecision">
                        <p>{{ route }}</p>
                        <a href="javascript:void(0);" @click="chageRoute" class="btn btn-info btn-icon-split">
                            <span class="icon text-white-50">
                            <i class="fas fa-check"></i>
                            </span>
                            <span class="text">経路を変更する</span>
                        </a>
                    </div>
                    <div class="card-body" v-show="routeChage">
                        <textarea class="w-100" v-model="route"></textarea>
                        <a href="javascript:void(0);" @click="decisionRoute" class="btn btn-success btn-icon-split">
                            <span class="icon text-white-50">
                            <i class="fas fa-check"></i>
                            </span>
                            <span class="text">経路を決定する</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">接触者</h6>
                    </div>
                    <div class="card-body">
                        <input type="checkbox" id="contact" @click="checkContact"> １人以上と接触した
                    </div>
                    <div class="card-body" v-show="contact">
                        <input type="text" class="w-25">人
                        <p>※概要（接触者氏名・内容）を記入してください。</p>
                        <textarea class="w-100" placeholder="ex.矢次沙妃：パーテーション設置の際に何度か触れた。"></textarea>
                    </div>
                    <div class="card-body">
                        <input type="checkbox" id="contactTime" @click="checkContactTime"> 対面で互いに手を伸ばしたら届く距離（１ｍ程度以内）で15分以上接触があった人
                    </div>
                    <div class="card-body" v-show="contactTime">
                        <input type="text" class="w-25">人
                        <p>※概要（接触者氏名・内容）を記入してください。</p>
                        <textarea class="w-100" placeholder="ex.吉見果歩：往復の電車で会話をした。"></textarea>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            route :"自宅―（徒歩）―高田馬場駅―（JR山手線）―池袋駅―（JR埼京線）―十条駅―（徒歩）―十条台ふれあい館",
            routeDecision : true,
            routeChage : false,
            contact : false,
            contactTime : false,
            practiceDate: '',
            startTime: '09:00',
            endTime: '18:00',
        }
    },
    methods: {
        async chageRoute(){
            this.routeDecision = false
            this.routeChage = true
        },
        async decisionRoute(){
            this.routeDecision = true
            this.routeChage = false
        },
        async checkContact(){
            this.contact = document.form.contact.checked
        },
        async checkContactTime(){
            this.contactTime = document.form.contactTime.checked
        },
    },
    mounted: function(){
        var today = new Date();
        today.setDate(today.getDate());
        var yyyy = today.getFullYear();
        var mm = ("0"+(today.getMonth()+1)).slice(-2);
        var dd = ("0"+today.getDate()).slice(-2);
        this.practiceDate = yyyy+'-'+mm+'-'+dd;

    },
}
</script>

