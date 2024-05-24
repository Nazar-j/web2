import { Component, OnInit } from '@angular/core'
import { IComment } from '../../models/comment'
import { CommentsService } from '../../services/comments.servise'
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrl: './comment-form.component.scss',
    imports: [
        ReactiveFormsModule,
        NgIf
    ]
})

export class CommentFromComponent implements OnInit {
    comment: IComment
    commentForm: FormRecord;

    ngOnInit(): void {
        this.commentForm = new FormGroup({
            text: new FormControl('', [Validators.required])
        })
    }

    constructor(private commentsService: CommentsService) { }

    getDate(): string {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        return formattedDate
    }

    onSubmit() {
        let comment: IComment = {
            profilePicPath: "../../../assets/imgs/pp.png",
            profileName: "Danny Alvis",
            commentText: this.commentForm.value.text,
            status: "PENDING",
            date: this.getDate()
        }
        this.commentsService.addComment(comment)
        this.commentForm.setValue({text: ''})
        this.commentForm.markAsUntouched()
    }

}