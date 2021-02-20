<template>
  <div id="route">
    <form name="form">
      <div class="mb-3 ml-3">
        <a
          href="javascript:void(0);"
          @click="addRoute"
          class="btn btn-info btn-icon-split"
        >
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
              <h6 class="m-0 font-weight-bold text-primary" v-show="route.ro">
                {{ route.name }}
              </h6>
              <input
                type="text"
                v-show="!route.ro"
                v-model="route.name"
                placeholder="経路名"
              />
            </div>
            <div v-show="route.detailShow">
              <div class="card-body text-center" v-show="route.ro">
                {{ route.going }}
                <hr />
                {{ route.return }}
                <hr />
                <a
                  href="javascript:void(0);"
                  @click="edit(index)"
                  class="btn btn-success btn-icon-split"
                >
                  <span class="icon text-white-50">
                    <i class="fas fa-check"></i>
                  </span>
                  <span class="text">編集</span>
                </a>
                <a
                  href="javascript:void(0);"
                  @click="deleteRoute(index)"
                  class="btn btn-danger btn-icon-split"
                >
                  <span class="icon text-white-50">
                    <i class="fas fa-check"></i>
                  </span>
                  <span class="text">削除</span>
                </a>
              </div>
              <div class="card-body text-center" v-show="!route.ro">
                <textarea class="w-100" v-model="route.going"></textarea>
                <hr />
                <textarea class="w-100" v-model="route.return"></textarea>
                <hr />
                <a
                  href="javascript:void(0);"
                  @click="updateRoute(index)"
                  class="btn btn-primary btn-icon-split"
                  v-show="!route.newRow"
                >
                  <span class="icon text-white-50">
                    <i class="fas fa-check"></i>
                  </span>
                  <span class="text">更新</span>
                </a>
                <a
                  href="javascript:void(0);"
                  @click="registRoute(index)"
                  class="btn btn-primary btn-icon-split"
                  v-show="route.newRow"
                >
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
import axios from "axios";

export default {
  data: function () {
    return {
      routes: [
        {
          id: 1,
          name: "test_route_name",
          going: "test_going",
          return: "test_return",
          detailShow: false,
          ro: true,
        },
        {
          id: 2,
          name: "test_route_name",
          going: "test_going",
          return: "test_return",
          detailShow: false,
          ro: true,
        },
        {
          id: 3,
          name: "test_route_name",
          going: "test_going",
          return: "test_return",
          detailShow: false,
          ro: true,
        },
      ],
    };
  },

  methods: {
    async addRoute() {
      this.routes.forEach((element) => {
        element.detailShow = false;
      });
      this.routes.unshift({
        newRow: true,
        name: "",
        going: "",
        return: "",
        detailShow: false,
        ro: false,
      });
    },
    async openDetail(index) {
      var f = this.routes[index].detailShow;
      this.routes.forEach((element) => {
        element.detailShow = false;
      });
      this.routes[index].detailShow = !f;
    },
    async registRoute(index) {
      route.id = res.Route.ID
      route.newRow = false
      route.ro = true
      alert('登録しました。')
    },
    async edit(index){
      var route = this.routes[index];
      route.ro = false
    },
    async updateRoute(index) {
      route.newRow = false
      route.ro = true
      alert('更新しました。')
    },
    async deleteRoute(index) {
      this.routes.splice(index, 1)
      alert('削除しました。')
    },
  },

  mounted: function () {
  },
}

</script>
