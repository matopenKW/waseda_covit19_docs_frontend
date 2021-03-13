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
                        <h6 class="m-0 font-weight-bold text-primary">練習区分</h6>
                    </div>
                    <div class="card-body">
                        <select>
                            <option v-for="practice in practices" :key="practice.id" :value="practice.id">{{ practice.name }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">活動内容</h6>
                    </div>
                    <div class="card-body">
                        <select>
                            <option v-for="activity in activities" :key="activity.id" :value="activity.id">{{ activity.name }}</option>
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
                    <div class="card-body">
                        <select v-model="selectedRouteId" @change="selectRoute">
                            <option disabled value="">経路を選択してください</option>
                            <option v-for="route in routes" :key="route.id" :value="route.id">{{ route.name }}</option>
                        </select>
                    </div>

                    <div class="card-body" v-show="routeDecision">
                        <p>{{ outwardTrip }}</p>
                        <hr/>
                        <p>{{ returnTrip }}</p>
                        <a href="javascript:void(0);" @click="changeRoute" class="btn btn-info btn-icon-split">
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
                        <input type="number" class="w-25" v-model="contactPerson1">人
                        <p>※概要（接触者氏名・内容）を記入してください。</p>
                        <textarea class="w-100" v-model="contactAbstract1" placeholder="ex.矢次沙妃：パーテーション設置の際に何度か触れた。"></textarea>
                    </div>
                    <div class="card-body">
                        <input type="checkbox" id="contactTime" @click="checkContactTime"> 対面で互いに手を伸ばしたら届く距離（１ｍ程度以内）で15分以上接触があった人
                    </div>
                    <div class="card-body" v-show="contactTime">
                        <input type="number" class="w-25" v-model="contactPerson2">人
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
            startTime: '18:00',
            endTime: '21:00',
            outwardTrip : '※経路を選択してください※',
            returnTrip : '',
            practice_section_id: 1,
            practice_contents_id: 1,
            contact : false,
            contactTime : false,
            contactPerson1: '',
            contactAbstract1: "",
            contactPerson2: '',
            contactAbstract2: "",
            selectedRouteId: '',
            routes: [],
            routeDecision : true,
            routeChage : false,
            practices:[
                { id: 1, name: "レギュラー"},
                { id: 2, name: "卒演"},
                { id: 3, name: "新練"},
            ],
            activities:[
                { id: 1, name: "tutti"},
                { id: 2, name: "弦練"},
                { id: 3, name: "管打練"},
                { id: 4, name: "パート練"},
                { id: 5, name: "木管練"},
                { id: 6, name: "金管練"},
                { id: 7, name: "トップ練"},
                { id: 8, name: "引き継ぎ"},
                { id: 9, name: "アンサンブル"},
            ],
        }
    },
    methods: {
        async selectRoute(){
            var routes = this.routes;
            routes.forEach(route => {
                if (route.id == this.selectedRouteId){
                    this.outwardTrip = route.outwardTrip
                    this.returnTrip = route.returnTrip
                }
            })
        },
        async changeRoute(){
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
            if (this.selectedRouteId == ''){
                alert('経路を選択してください。')
                return
            }

            var p = {
                datetime: this.datetime.replaceAll('-', ''),
                start_time: this.startTime.replace(':', ''),
                end_time: this.endTime.replace(':', ''),
                practice_section_id: 1,
                practice_contents_id: 1,
                outward_trip: this.outwardTrip,
                return_trip: this.returnTrip,
                contact_person1: this.contactPerson1,
                contact_abstract1: this.contactAbstract1,
                contact_person2: this.contactPerson2,
                contact_abstract2: this.contactAbstract2,
            }
            console.log(p)
            try {
                var res = await this.$axios.$put(this.$urls.api + '/put_activity_program', p, {
                    headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}
                })

                alert('登録しました。')

                this.$router.push('/wasephil')
            } catch(e){
                console.log(e)
                alert(e.message)
            }
        },
    },
    mounted: function(){
        //alert(this.$route.query.seqNo)

        var today = new Date();
        today.setDate(today.getDate());
        var yyyy = today.getFullYear();
        var mm = ('0'+(today.getMonth()+1)).slice(-2);
        var dd = ('0'+today.getDate()).slice(-2);
        this.datetime = yyyy+'-'+mm+'-'+dd;

        this.$axios.$get(this.$urls.api + "/get_routes", {
            headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}
        })
        .then((res) => {
            var routes = res.Routes;
            routes.forEach((route) => {
                var r = {
                    id : route.ID,
                    name : route.Name,
                    outwardTrip : route.OutwardTrip,
                    returnTrip : route.ReturnTrip,
                };
                this.routes.push(r);
            });
            console.log(this.routes);
        })
        .catch((err) => {
            alert(err.message);
        });
    },
}
</script>

