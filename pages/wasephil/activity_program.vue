<template>
    <div id="activity_program" class="container-fluid">
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
                        <h6 class="m-0 font-weight-bold text-primary">日時</h6>
                    </div>
                    <div class="card-body">
                        <div class="mb-3"><input type="date" v-model="datetime"></div>
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
                        <p>{{ outwardTrip }}</p>
                        <hr/>
                        <p>{{ returnTrip }}</p>
                        <a href="javascript:void(0);" @click="chageRoute" class="btn btn-info btn-icon-split">
                            <span class="icon text-white-50">
                            <i class="fas fa-check"></i>
                            </span>
                            <span class="text">経路を変更する</span>
                        </a>
                    </div>
                    <div class="card-body" v-show="routeChage">
                        <textarea class="w-100" v-model="outwardTrip"></textarea>
                        <textarea class="w-100" v-model="returnTrip"></textarea>
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
                        <textarea class="w-100" v-model="contactAbstract1" placeholder="ex.矢次沙妃：パーテーション設置の際に何度か触れた。"></textarea>
                    </div>
                    <div class="card-body">
                        <input type="checkbox" id="contactTime" @click="checkContactTime"> 対面で互いに手を伸ばしたら届く距離（１ｍ程度以内）で15分以上接触があった人
                    </div>
                    <div class="card-body" v-show="contactTime">
                        <input type="text" class="w-25">人
                        <p>※概要（接触者氏名・内容）を記入してください。</p>
                        <textarea class="w-100" v-model="contactAbstract2" placeholder="ex.吉見果歩：往復の電車で会話をした。"></textarea>
                    </div>
                </div>
            </div>
        </div>
            <a
                href="javascript:void(0);"
                @click="register()"
                class="btn btn-primary btn-icon-split"
            >
                <span class="icon text-white-50">
                <i class="fas fa-check"></i>
                </span>
                <span class="text">登録</span>
            </a>
        </form>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            datetime: '',
            startTime: '09:00',
            endTime: '18:00',
            outwardTrip : '十条台ふれあい館',
            returnTrip : '自宅―（徒歩）―高田馬場駅―（JR山手線）―池袋駅―（JR埼京線）―十条駅―（徒歩）―十条台ふれあい館',
            practice_section: 'aaa',
            routeDecision : true,
            routeChage : false,
            contact : false,
            contactTime : false,
            contactAbstract1:"",
            contactAbstract2:"",
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
        async register(){
            alert('aaaaa')

            var jwt = this.$cookies.get('jwt')
            var p = {
                datetime: this.datetime,
                start_time: this.startTime,
                end_time: this.endTime,
                practice_section: 1,
                practice_contents: 1,
                venue_id: 1,
                route_id: 1,
                outward_trip: this.outwardTrip,
                return_trip: this.returnTrip,
                contact_person1: false,
                contact_abstract1: this.contactAbstract1,
                contact_person2: false,
                contact_abstract2: this.contactAbstract2,
            }
            console.log(p)
            // try {
            //     var res = await this.$axios.$put('/put_route', p, {
            //         headers: {Authorization: `Bearer ${jwt}`}
            //     })

            //     route.id = res.Route.ID
            //     route.newRow = false
            //     route.ro = true
            //     alert('登録しました。')
            // } catch(e){
            //     console.log(e)
            //     alert(e.message)
            // }
        }
    },
    mounted: function(){
        var today = new Date();
        today.setDate(today.getDate());
        var yyyy = today.getFullYear();
        var mm = ('0'+(today.getMonth()+1)).slice(-2);
        var dd = ('0'+today.getDate()).slice(-2);
        this.datetime = yyyy+'-'+mm+'-'+dd;

    },
}
</script>

