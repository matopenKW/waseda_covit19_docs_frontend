<template>
    <div id="route">
        <form name="form">
            <div class="mb-3 ml-3">
                <a href="javascript:void(0);" @click="addRoute" class="btn btn-info btn-icon-split">
                    <span class="icon text-white-50">
                        <i class="fas fa-check"></i>
                    </span>
                    <span class="text">経路を追加</span>
                </a>  
            </div>
            <div class="row" v-for="(route, index) in routes" :key="route.id">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header py-3" @click="openDetail(index)">
                            <h6 class="m-0 font-weight-bold text-primary" v-show="route.ro">{{ route.name }}</h6>
                            <input type="text" v-show="!route.ro" v-model="route.name" placeholder="経路名">
                        </div>
                        <div v-show="route.detailShow">
                            <div class="card-body text-center" v-show="route.ro">
                                {{ route.going }}
                                <hr>
                                {{ route.return }}
                                <hr>
                                <a href="javascript:void(0);" @click="updateRoute(index)" class="btn btn-success btn-icon-split">
                                    <span class="icon text-white-50">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    <span class="text">編集</span>
                                </a>
                                <a href="javascript:void(0);" @click="deleteRoute(index)" class="btn btn-danger btn-icon-split">
                                    <span class="icon text-white-50">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    <span class="text">削除</span>
                                </a>
                            </div>
                            <div class="card-body text-center" v-show="!route.ro">
                                <textarea class="w-100" v-model="route.going"></textarea>
                                <hr>
                                <textarea class="w-100" v-model="route.return"></textarea>
                                <hr>
                                <a href="javascript:void(0);" @click="registRoute(index)" class="btn btn-primary btn-icon-split" v-show="!route.newRow">
                                    <span class="icon text-white-50">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    <span class="text">更新</span>
                                </a>
                                <a href="javascript:void(0);" @click="registRoute(index)" class="btn btn-primary btn-icon-split" v-show="route.newRow">
                                    <span class="icon text-white-50">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    <span class="text">登録</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>



 <!-- クリックしたときの動き -->
<script>

export default {
    data: function(){
        return {
            routes:[
                {id: 1, name:"学生会館", going: "町田→新宿", return: "新宿→町田", detailShow: false, ro: true},
                {id: 2, name:"奉仕園", going: "町田→新宿", return: "新宿→町田", detailShow: false,  ro: true},
                {id: 3, name:"雑司が谷地域文化創造館", going: "町田→新宿", return: "新宿→町田", detailShow: false,  ro: true},
                {id: 4, name:"板橋区立グリーンカレッジホール", going: "町田→新宿", return: "新宿→町田", detailShow: false,  ro: true},
            ],
        }
    },
    
    methods: {
        async addRoute(){
            this.routes.forEach(element => {
                element.detailShow = false
            });
            this.routes.unshift({newRow: true, name:"", going: "", return: "",  detailShow: true, ro: false})
        },
        async openDetail(index){
            var f = this.routes[index].detailShow
            this.routes.forEach(element => {
                element.detailShow = false
            });
            this.routes[index].detailShow = !f
        },
        async registRoute(index){
            var route = this.routes[index]
            route.newRow = false
            route.ro = true
            window.alert('更新しました！');
        },
        async updateRoute(index){
            this.routes[index].ro = false
        },
        async deleteRoute(index){
            this.routes.splice(index, 1)
//            this.routes[index].ro = true
            
        },
    },
    mounted: function(){

    }
}
</script>
