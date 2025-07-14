import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
    @Input() username = '';
    @Input() totalQuizzes = 0;
    @Input() successRate = 0;
}


