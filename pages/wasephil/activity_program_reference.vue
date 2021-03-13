<template>
    <div id="activity_program" class="container-fluid">
        <form name="form">
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">日時</h6>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            {{ datetime }} / {{ startTime }} 〜 {{ endTime }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">練習区分 / 活動内容</h6>
                    </div>
                    <div class="card-body">
                        {{ practiceName}} / {{ activityName }}
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
                        <p>{{ outwardTrip }}</p>
                        <hr/>
                        <p>{{ returnTrip }}</p>
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
                        <h7>１人以上と接触した</h7>
                        <hr>
                        <p>{{ contactPerson1 }}人</p>
                        <p>{{ contactAbstract1 }}</p>
                    </div>
                    <div class="card-body">
                        <h7>対面で互いに手を伸ばしたら届く距離（１ｍ程度以内）で15分以上接触があった人</h7>
                        <hr>
                        <p>{{ contactPerson2 }}人</p>
                        <p>{{ contactAbstract2 }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-around mb-3">
            <div>
                <a href="javascript:void(0);" @click="register()" class="btn btn-info btn-icon-split">
                    <span class="icon text-white-50"><i class="fas fa-check"></i></span><span class="text">編集</span>
                </a>
            </div>
            <div>
                <a href="javascript:void(0);" @click="register()" class="btn btn-danger btn-icon-split">
                    <span class="icon text-white-50"><i class="fas fa-check"></i></span><span class="text">削除</span>
                </a>
            </div>
        </div>
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
            outwardTrip : 'outtrip',
            returnTrip : 'returntrip',
            contactPerson1: 1,
            contactAbstract1: 'test',
            contactPerson2: 0,
            contactAbstract2: 'test',
            practiceName: "レギュラー",
            activityName: "tutti",
        }
    },
    methods: {
        async edit(){
            alert('edit')
        },
        async delete(){
            alert('delete')
        },
    },
    mounted: function(){
        var seqNo = this.$route.query.seqNo
        if (!seqNo) {
            this.$router.push('/wasephil/history')
        }

        this.$axios.$get(this.$urls.api + '/get_activity_program/' + seqNo, {
            headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}
        })
        .then((res) => {
            var ap = res.ActivityProgram
            if (!ap){
                this.$router.push('/wasephil/history')
            }
            this.datetime = ap.Datetime
            this.startTime = ap.StartTime
            this.endTime = ap.EndTime
            this.practiceName = ap.PracticeName
            this.activityName = ap.ActivityName
            this.outwardTrip = ap.OutwardTrip
            this.returnTrip = ap.ReturnTrip
            this.contactPerson1 = ap.ContactPerson1
            this.contactAbstract1 = ap.ContactAbstract1
            this.contactPerson2 = ap.ContactPerson2
            this.contactAbstract2 = ap.ContactAbstract2
        })
        .catch((err) => {
            alert(err.message);
        });
    },
}
</script>

