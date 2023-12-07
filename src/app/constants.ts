import {environment} from "../../src/environments/environment";


export const API_ENDPOINT_URL = environment.BASE_URL;

export const API = {
    USER_LOGIN: API_ENDPOINT_URL + "users/login",
}

export const constants = {
  DASHBOARD: 'Dashboard',
  REPORT: 'Report',
  ANALYTICS: 'Analytics', 
  FAVORITES: 'Favorites',
  NOTIFICATIONS: 'Notifications',
  OPEN: 'open',
  CLOSE: 'close',
}