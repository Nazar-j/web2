import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAuth } from "../models/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    protected token = localStorage.getItem('token')
    private urlAuth = "https://dummyjson.com/auth/login"

    logOut = () => {
        localStorage.clear();
        window.location.href = '/'
    }

    loginApi = (username: String, pass: String) => {
        this.http.post<IAuth>(this.urlAuth, {
            username: username,
            password: pass
        }).subscribe(res => {
            if (res['token']) {
                localStorage.setItem('token', res['token']);
                window.location.href = '/'
            } else {
                alert('Login error');
            }
        });
    };
}