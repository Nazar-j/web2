import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IComment } from "../models/comment";

@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    constructor(private http: HttpClient) {}

    private LINK = 'http://localhost:3000'

    getComments(): Observable<IComment[]> {
        let comments = this.http.get<IComment[]>(this.LINK + '/get-comments')
        return comments
    }

    addComment(comment: IComment) {
        const headers = new HttpHeaders({
            'Content-type': 'application/json'
        })
        this.http.post<IComment>(this.LINK + '/create-comment', comment, {headers: headers})
            .subscribe(data => console.log(data))
    }
}