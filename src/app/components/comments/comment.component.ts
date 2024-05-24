import { Component, Input } from '@angular/core'
import { IComment } from '../../models/comment'
import { LowerCasePipe } from '@angular/common'
 

@Component({
    standalone: true,
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrl: './comment.component.scss',
    imports: [LowerCasePipe]
})

export class CommentComponent {
    @Input() comment: IComment
}