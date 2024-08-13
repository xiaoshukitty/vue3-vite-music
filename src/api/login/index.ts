import request from "@/utils/request";
import {
  LoginKeyType,
  LoginQrUrlType,
  LoginStatusType,
  LoginQrUrlParamsType,
  LoginQrUrlParamsStatusType,
} from "@/api/login/type";

//登录
export async function useLogin(phone: string, password: string) {
  return await request.get<{
    code: number;
    cookie: string;
    token: string;
  }>("login/cellphone", { phone: phone, password: password });
}

// 获取登录二维码 key
export async function useLoginKey(timestamp: number) {
  return await request.get<{
    code: number;
    data: LoginKeyType;
  }>("login/qr/key", { timestamp: timestamp });
}

//生成登录二维码图片
export async function useLoginQR(params: LoginQrUrlParamsType) {
  return await request.get<{ code: number; data: LoginQrUrlType }>(
    "login/qr/create",
    { key: params.key, qrimg: params.qrimg, timestamp: params.timestamp }
  );
}

//循环获取登录状态
export async function useGetLoginStatus(params: LoginQrUrlParamsStatusType) {
  return await request.get<{
    code: number;
    data: LoginStatusType;
  }>("/login/qr/check", {
    key: params.key,
    timestamp: params.timestamp,
  });
}

//登录成功获取个人信息
export async function useGetUserInfo() {
  return await request.get("/user/account");
}

//登录状态获取
export async function useLoginStatus() {
  return await request.get(`/login/status?&timestamp=${new Date().getTime()}`);
}
