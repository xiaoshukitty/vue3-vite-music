export interface LoginKeyType {
  code: number;
  unikey: string;
}

export interface LoginQrUrlType {
  qrimg: string;
  qrurl: string;
}

export interface LoginStatusType {
  code: number;
  cookie: string;
  message: string;
}

export interface LoginQrUrlParamsType {
  key: string;
  qrimg: boolean;
  timestamp: number;
}

export interface LoginQrUrlParamsStatusType {
  key: string;
  timestamp: number;
}
