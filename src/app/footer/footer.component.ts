import { Component, OnInit } from '@angular/core';
import { faAngular, faDev, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    faGithub = faGithub;
    faDev = faDev;
    faTwitter = faTwitter;
    faAngular = faAngular


    constructor() { }

    ngOnInit(): void {
    }

}
