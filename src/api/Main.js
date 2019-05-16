// 封装基于axios的请求
import axios from "@/util/MyAxios";
// 将数据基于bus总线发送
import bus from "@/util/Bus";
// 仅对外暴露请求方法,禁止外界直接发出http请求

export function getMain() {
  axios.get("/test/test.json").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.homeworks, response.data.homeworks);
      bus.$emit(bus.user, response.data.user);
    }, 2000);
  });
}

export function login(user) {
  axios
    .post("/login", user)
    .then(response => {
      let token = response.headers["authorization"];
      if (token != null) {
        bus.$emit(bus.loginSuccess, true);
        sessionStorage.setItem("Authorization", token);
        setTimeout(() => {
          bus.$emit(bus.user, response.data.user);
        }, 1000);
      }
    })
    .catch(error => {
      bus.$emit(bus.e, error.response.data.message);
    });
}

export function getAddresses(data) {
  let headers = { authorization: sessionStorage.getItem("Authorization") };
  axios
    .get(`/users/${data.uid}/addresses`, { headers: headers })
    .then(response => {
      bus.$emit(bus.addresses, response.data.addresses);
    });
}
