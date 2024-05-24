import { Component, OnInit } from '@angular/core'
import { AsyncPipe, NgFor } from '@angular/common'
import { IComment } from '../../../models/comment'
import { CommentComponent } from '../../comments/comment.component'
import { CommentsService } from '../../../services/comments.servise'
import { Observable } from 'rxjs'
import { CommentFromComponent } from '../../comment-form/comment-form.component'

@Component({
    standalone: true,
    selector: 'app-row4',
    templateUrl: './row4.component.html',
    styleUrl: '../rows.component.scss',
    imports: [
        CommentComponent, 
        CommentFromComponent,
        NgFor, 
        AsyncPipe
    ]
})

export class Row4Component implements OnInit{
    comments : IComment[]

    constructor(private commentsService : CommentsService) {}

    ngOnInit(): void {
        this.commentsService.getComments().subscribe(commentns => {
            this.comments = commentns
        })
    }
}