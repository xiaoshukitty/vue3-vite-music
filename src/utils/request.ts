import axios, { type AxiosRequestConfig, type InternalAxiosRequestConfig } from "axios";
//获取用户相关的小仓库路由
import useStore from "@/store";
let requestCount: number = 0; // 统计发起请求的接口数量

// 自定义配置类型
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  showLoading?: boolean;
  headers?: Record<string, string>;
}

axios.defaults.baseURL = "http://localhost:3000"; //基础路径会携带 /api
axios.defaults.withCredentials = true; // 允许跨域请求携带 cookie
(axios.defaults.timeout = 5000), //设置超时时间
  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // config.params = {
      //   ...config.params,
      //   // t: Date.now(),
      // };
      requestCount++; // 统计发送的请求数
      
      // 只有当配置中 showLoading 为 true 时才显示加载动画
      if ((config as CustomAxiosRequestConfig).showLoading !== false) {
        useStore.state.value.User.skeletonLoading = true;
      }
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
    if (requestCount <= 0) {
      useStore.state.value.User.skeletonLoading = false; // 清空loadingCount后注销Loading
    } else if ((response.config as CustomAxiosRequestConfig).showLoading !== false) {
      useStore.state.value.User.skeletonLoading = true;
    }
    return response;
  },
  function (error) {
    requestCount--; // 每响应一个请求,减少一个count 就算借口失败也减少，避免借口请求失败还占据一个位置，导致其他接口无法正常显示loading
    if (requestCount <= 0) {
      useStore.state.value.User.skeletonLoading = false;
    }
    return Promise.reject(error);
  }
);

interface Http {
  get<T>(url: string, params?: unknown, config?: CustomAxiosRequestConfig): Promise<T>;

  post<T>(url: string, params?: unknown, config?: CustomAxiosRequestConfig): Promise<T>;

  upload<T>(url: string, params: unknown, config?: CustomAxiosRequestConfig): Promise<T>;

  put<T>(url: string, params: unknown, config?: CustomAxiosRequestConfig): Promise<T>;

  delete<T>(url: string, params: unknown, config?: CustomAxiosRequestConfig): Promise<T>;

  download(url: string): void;
}

const http: Http = {
  get(url, params, config) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params, ...config })
        .then((res) => {

          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  post(url, params, config) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, JSON.stringify(params), config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  put(url, params, config) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, JSON.stringify(params), config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  delete(url, params, config) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, { params, ...config })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  upload(url, file, config) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, file, {
          headers: { "Content-Type": "multipart/form-data" },
          ...config
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
