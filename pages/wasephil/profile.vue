<template>
    <div id="activity_program" class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">プロフィール</h6>
                    </div>
                    <div class="card-body">
                        <p>氏名</p>
                        <div class="mb-3"><input type="text" v-model="name" maxlength=10></div>
                        <p>大学名</p>
                        <div class="mb-3"><input type="text" v-model="universityName" maxlength=10></div>
                        <p>学部名</p>
                        <div class="mb-3"><input type="text" v-model="facultyName" maxlength=10></div>
                        <p>学籍番号（早稲田生のみ）</p>
                        <div class="mb-3"><input type="text" v-model="studentNo" maxlength=10></div>
                        <p>電話番号</p>
                        <div class="mb-3"><input type="tel" v-model="cellPhonNo" maxlength=11></div>
                    </div>
                </div>
                <div>
                <a href="javascript:void(0);" @click="update()" class="btn btn-primary btn-icon-split">
                    <span class="icon text-white-50"><i class="fas fa-check"></i></span>
                    <span class="text">更新</span>
                </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data: function(){
        return {
            name: '',
            universityName: '',
            facultyName: '',
            studentNo: '',
            cellPhonNo: '',
        }
    },
    methods: {
        async update(){
            var p = {
                name: this.name,
                university_name: this.universityName,
                faculty_name: this.facultyName,
                student_no: this.studentNo,
                cell_phon_no: this.cellPhonNo,
                
            }
            console.log(p)
            try {
                var res = await this.$axios.$put(this.$urls.api + '/update_user', p, {
                    headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}
                })

                alert('更新しました。')

            } catch(e){
                console.log(e)
                alert(e.message)
            }
        },
    },
    mounted: function(){
        this.$axios.$get(this.$urls.api + "/get_user", {
            headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}
        })
        .then((res) => {
            var user = res.User
            console.log(user);
            this.name = user.Name
            this.universityName = user.UniversityName
            this.facultyName = user.FacultyName
            this.studentNo = user.StudentNo
            this.cellPhonNo = user.CellPhonNo
        })
        .catch((err) => {
            alert(err.message);
        });
    },
}
</script>

