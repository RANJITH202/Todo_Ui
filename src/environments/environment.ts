import {HttpHeaders} from "@angular/common/http";

export function getHeaders() {
    return {headers: new HttpHeaders(
            {'Authorization': 'ID: PROD DTS SIGNATURE', 'XDate': new Date().toString()})};
}
export const environment = {
    production: false,
    BASE_URL : 'http://localhost:3300/',
    APP_BASE_URL:'http://localhost:4200/',
    REQUEST_HEADER: { 'Authorization': 'ID: PROD DTS SIGNATURE', 'XDate': new Date().toString() },
    CONTENT_TYPE: 'application/json',
    ENV: 'DEV',
}
