import axios, { type AxiosRequestConfig } from "axios";
//获取用户相关的小仓库路由
import useStore from "@/store";
let requestCount: number = 0; // 统计发起请求的接口数量

axios.defaults.baseURL = "http://localhost:3000"; //基础路径会携带 /api
(axios.defaults.timeout = 5000), //设置超时时间
  axios.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
      // config.params = {
      //   ...config.params,
      //   // t: Date.now(),
      // };
      requestCount++; // 统计发送的请求数
      console.log('requestCount---',requestCount);
      
      useStore.state.value.User.skeletonLoading = true; // 加载Loading
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    requestCount--; // 每响应一个请求,减少一个count
    console.log('requestCount---2222',requestCount);
    if (requestCount <= 0) {  /**还有bug没解决，然后一个借口报错，其他借口全部完成这里也是走的 skeletonLoading == true  */
      useStore.state.value.User.skeletonLoading = false; // 清空loadingCount后注销Loading
    } else {
      useStore.state.value.User.skeletonLoading = true;
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

interface Http {
  get<T>(url: string, params?: unknown): Promise<T>;

  post<T>(url: string, params?: unknown): Promise<T>;

  upload<T>(url: string, params: unknown): Promise<T>;

  put<T>(url: string, params: unknown): Promise<T>;

  delete<T>(url: string, params: unknown): Promise<T>;

  download(url: string): void;
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          console.log("res----", res);

          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  put(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  delete(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  upload(url, file) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, file, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  download(url) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };

    document.body.appendChild(iframe);
  },
};

export default http;
