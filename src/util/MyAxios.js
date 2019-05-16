// 基于配置创建axios对象
import axios from "axios";

// 声明请求根路径
axios.defaults.baseURL = "/api";
// 暴露修改后的axios对象,后期需要添加拦截器等配置
export default axios;
