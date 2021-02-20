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
                                        {{ practice.date }} {{ practice.route}}
                                        <span class="ml-4">
                                            <a href="javascript:void(0);" @click="clickPractice(monthIdx, index)" class="btn btn-info"><span class="text">編集</span></a>
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
    layout ({ store }) {
      return 'mock'
    },
    data: function(){
        return {
            months: [
                {
                    month: "10月",
                    practices: [
                        {date: "2020/10/11", route: "経路名1"},
                        {date: "2020/10/12", route: "経路名2"},
                        {date: "2020/10/13", route: "経路名3"},
                        {date: "2020/10/14", route: "経路名4"},
                    ],
                    detailShow: false,
                },
                {
                    month: "11月",
                    practices: [
                        {date: "2020/11/11", route: "経路名1"},
                        {date: "2020/12/12", route: "経路名2"},
                        {date: "2020/13/13", route: "経路名3"},
                        {date: "2020/14/14", route: "経路名4"},
                    ],
                    detailShow: false,
                },
            ]
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
            window.location.href = '/wasephil/practice'
        }
    },
}
</script>