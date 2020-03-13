<template>
  <transition appear>
    <div>
      <div class="login">
        <h1>{{ title }}</h1>
        <div class="inputBox">
          <div :class="item.className" v-for="item in list" :key="item.id">
            <div :class="item.bg"></div>
            <span>{{ item.icon }}</span>
            <input
              type="text"
              :placeholder="item.name"
              @click="inputActive(item.id)"
              @blur="clearActive()"
              v-model="item.model"
            />
          </div>
          <input type="button" value="立即登录" v-on:click="login()" />
        </div>
        <img
          class="close"
          src="../../../assets/images/close.png"
          alt="关闭"
          @mouseover="flag = true"
          @mouseout="flag = false"
        />
        <span v-if="flag" id="closetip">关闭</span>
      </div>
    </div>
  </transition>
</template>
<script>
import * as types from "../../../store/types.js";
import store from "../../../store/store.js";
export default {
  data() {
    return {
      title: "站点登录",
      flag: false,
      list: [
        { id: 1, icon: "U", name: "账号", model: "", className: "", bg: "" },
        { id: 2, icon: "P", name: "密码", model: "", className: "", bg: "" }
      ]
    };
  },
  created() {
    this.clearActive();
  },
  // mounted: function() {
  //   var login = document.getElementsByClassName("login")[0];
  //   login.style.top =
  //     document.documentElement.scrollTop +
  //     (document.documentElement.clientHeight - login.offsetHeight) / 2 +
  //     "px";
  //   login.style.left =
  //     document.documentElement.scrollLeft +
  //     (document.documentElement.clientWidth - login.offsetWidth) / 2 +
  //     "px";
  //   var loginBox = document.getElementsByClassName("loginBox")[0];
  //   loginBox.style.top = login.style.top;
  //   loginBox.style.left = login.style.left;
  // },
  methods: {
    clearActive() {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].className = "account";
        this.list[i].bg = "bg";
      }
    },
    inputActive: function(id) {
      var index = this.list.findIndex(item => {
        if (item.id == id) {
          return true;
        }
      });
      this.clearActive();
      this.list[index].className = "account active";
      this.list[index].bg = "bg active";
    },
    login: function() {
      console.log(this);
      /* this.axios
        .post("/dianyeAutho/servlet/login", {
          userName: "admin",
          password: "admin"
        })
        .then(data => {
          if (data.status === 200) {
            alert("login success");
            store.commit(types.LOGIN, data.data.token);
            window.location = "/home";
          } else {
            alert("fail");
          }
        }); */
        if(this.list[1].model==="admin"&&this.list[0].model==="admin"){
          alert("login success");
           store.commit(types.LOGIN,"admin");
           window.location = "/home"
        }else if(this.list[1].model==="user"&&this.list[0].model==="user"){
          store.commit(types.LOGIN,"user");
          window.location = "/whole/message"
        }
        else{
           alert("用户活密码错误")
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 420px;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  display: flex;
  z-index: 20;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url("../../../assets/images/loginBox.png");
  background-size: 100% 100%;
  top: 30%;
  left: 36%;
  h1 {
    text-shadow: 0 0 1px #0e947a;
    color: #eefaff;
    font-weight: bold;
    font-size: 20px;
  }
  .inputBox {
    width: 300px;
    height: auto;
    font-size: 14px;
    margin: 10px 0 20px 0;
    .account.active {
      background: linear-gradient(135deg, transparent 6px, rgb(157, 227, 255) 0)
          top left,
        linear-gradient(135deg, transparent 6px, rgb(157, 227, 255) 0) top right,
        linear-gradient(-45deg, transparent 6px, rgb(157, 227, 255) 0) bottom
          right,
        linear-gradient(-135deg, transparent 6px, rgb(157, 227, 255) 0) bottom
          left;
      background-size: 50% 50%;
      background-repeat: no-repeat;
    }
    .account {
      display: flex;
      flex-direction: row;
      line-height: 40px;
      width: 300px;
      height: 40px;
      margin: 20px 0;
      z-index: 20;
      position: relative;
      background: linear-gradient(135deg, transparent 6px, #5c99bd 0) top left,
        linear-gradient(135deg, transparent 6px, #5c99bd 0) top right,
        linear-gradient(-45deg, transparent 6px, #5c99bd 0) bottom right,
        linear-gradient(-135deg, transparent 6px, #5c99bd 0) bottom left;
      background-size: 50% 50%;
      background-repeat: no-repeat;
      span {
        font-weight: bold;
        font-size: 18px;
        color: #0c4a90;
        padding: 0 6px 0 8px;
        font-family: "adminthemesregular";
      }
      input[type="text"] {
        width: 260px;
        border: none;
        outline: none;
        z-index: 30;
        color: black;
        background: none;
      }
      .bg {
        position: absolute;
        top: 0;
        left: 30%;
        width: 50%;
        height: 100%;
        z-index: 10;
        background: #5c99bd;
      }
      .bg.active {
        background: rgb(157, 227, 255);
      }
    }

    input[type="button"] {
      width: 100%;
      height: 42px;
      cursor: pointer;
      color: #f4f4f4;
      font-size: 16px;
      background: #0c6690;
      outline: none;
      border: none;
    }
    input[type="button"]:hover {
      color: black;
      background: #3c8ab8;
    }
  }
  img.close {
    width: 20px;
    height: 20px;
    top: 20px;
    right: 20px;
    cursor: pointer;
    position: absolute;
  }
  #closetip {
    width: 30px;
    height: 20px;
    top: 44px;
    right: 15px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    background-color: #fff;
    display: block;
    position: absolute;
    color: #000;
  }
}
img.loginBox {
  width: 420px;
  height: 320px;
  padding: 0;
  position: absolute;
  z-index: 10;
}
</style>
