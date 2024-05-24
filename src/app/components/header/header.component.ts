import { Component } from '@angular/core'
import { NgIf } from '@angular/common'
import { AuthService } from '../../services/auth.servece'

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [NgIf]
})

export class HeaderComponent {
    constructor(private authService: AuthService) {}
    dropdown = false

    onClick() {
        console.log('logout')
        this.authService.logOut()
    }
}