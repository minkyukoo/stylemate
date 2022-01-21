import axios from 'axios'
import Cookies from 'js-cookie'
import dayjs from 'dayjs'

const USER_TOKEN = 'MEDIANCE_AUTH_TOKEN'
const USER_TOKEN_TIME = 'MEDIANCE_AUTH_TIME'
const USER_TOKEN_REFRESH = 'MEDIANCE_AUTH_REFRESH'
const DOMAIN = ''

const setAuthInfoCookies = (authInfo) => {
  authInfo.expiresAt = authInfo?.expiresAt.replace(' ', '+')
  const refreshExpiresAt = authInfo?.refreshExpiresAt.replace(' ', '+')
  const cookieConfig = {
    path: '/',
    domain: DOMAIN,
    secure: false,
    sameSite: 'Strict'
  }

  Cookies.set(USER_TOKEN, authInfo.token, cookieConfig)
  Cookies.set(USER_TOKEN_TIME, authInfo.expiresAt, cookieConfig)
  Cookies.set(USER_TOKEN_REFRESH, authInfo.refreshToken, {
    ...cookieConfig,
    expires: new Date(refreshExpiresAt)
  })
}

const clearAuthCookies = (callback) => {
  const isToken = !!Cookies.get(USER_TOKEN)

  if (callback && isToken) callback()

  Cookies.remove(USER_TOKEN)
  Cookies.remove(USER_TOKEN_TIME)
  Cookies.remove(USER_TOKEN_REFRESH)
}

const checkAuthCookies = () => {
  const token = Cookies.get(USER_TOKEN)
  const refreshToken = Cookies.get(USER_TOKEN_REFRESH)

  return !!(token && refreshToken)
}

const refresh = async (config) => {
  let token = Cookies.get(USER_TOKEN)
  const expireAt = Cookies.get(USER_TOKEN_TIME)
  const refreshToken = Cookies.get(USER_TOKEN_REFRESH)

  // 토큰 갱신 서버통신
  if (dayjs(expireAt).diff(dayjs()) <= 0 && refreshToken) {
    const { data } = await axios({
      method: 'GET',
      url: `${process.env.VUE_APP_AUTH_API_URL}/refresh-token-verified`,
      headers: {
        Authorization: `Bearer ${token}`,
        'refresh-token': `Bearer ${refreshToken}`
      }
    })

    token = data.token
    if (token) await setAuthInfoCookies(data)
  }

  if (!token || !refreshToken) {
    delete axios.defaults.headers.common.Authorization
  } else {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}

const refreshErrorHandle = () => {
  Cookies.remove(USER_TOKEN_REFRESH)
}

const goAuthPage = (type, callbackUrl, options = {}) => {
  const query = {
    callback: encodeURIComponent(`${location.protocol}//${location.host}${callbackUrl}`),
    service: options.service || process.env.VUE_APP_AUTH_SERVICE,
    type: options.type || process.env.VUE_APP_AUTH_TYPE
  }

  if (options?.token) query.token = options.token
  if (process.env.VUE_APP_AUTH_KEY) query.token = process.env.VUE_APP_AUTH_KEY
  if (process.env.VUE_APP_AUTH_SITE) query.token = process.env.VUE_APP_AUTH_SITE

  const queryParse = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&')
  location.href = `${process.env.VUE_APP_AUTH_URL}/${type}?${queryParse}`
}

export {
  setAuthInfoCookies,
  clearAuthCookies,
  checkAuthCookies,
  refresh,
  refreshErrorHandle,
  goAuthPage
}
