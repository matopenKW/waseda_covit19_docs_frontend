<template>
    <div id="history">
        <div class="row">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">活動記録履歴</h6>
                    </div>
                    <div class="card-body text-center">
                        <div class="row" v-for="(m, monthIdx) in months" :key="m.month">
                            <div class="col-12"> 
                                <div class="card mb-4">
                                    <div class="card-header py-3" @click="clickHeader(monthIdx)">
                                        <h6 class="m-0 font-weight-bold">{{ m.month }}</h6>
                                    </div>
                                    <div class="card-body border-primary" v-for="(practice, index) in m.practices" :key="practice.date" v-show="m.detailShow">
                                        {{ practice.date }}
                                        <span class="ml-4">
                                            <a href="javascript:void(0);" @click="clickPractice(monthIdx, index)" class="btn btn-info"><span class="text">参照</span></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import activity_program from '../mock/activity_program.vue'
export default {
    components: { activity_program },
    data: function(){
        return {
            months: []
        }
    },
    methods: {
        async clickHeader(monthIdx){
            var f = this.months[monthIdx].detailShow
            this.months.forEach(element => {
                element.detailShow = false
            });
            this.months[monthIdx].detailShow = !f

        },
        async clickPractice(monthIdx, index){
            var month = this.months[monthIdx]
            var ap = month.practices[index]
            this.$router.push('/wasephil/activity_program_reference?seqNo=' + ap.seqNo)
        }
    },
    mounted: function(){
        this.$axios.$get(this.$urls.api + "/get_histories", {
            headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}
        })
        .then((res) => {
            var histories = res.Histories;
            console.log(histories);
            histories.forEach(history => {
                var m = {
                    month : history.Month + '月',
                    practices: [],
                    detailShow: false,
                }
                var aps = history.ActivityPrograms

                aps.forEach(ap =>{
                    var datetime = ap.Datetime
                    var app = {
                        seqNo : ap.SeqNo,
                        date: datetime.substring(0,4) + '/' + datetime.substring(4, 6) + '/' + datetime.substring(6, 8),
                    }
                     m.practices.push(app)
                })
                this.months.push(m);
            })
        })
        .catch((err) => {
            alert(err.message);
        });
    },
}
</script>