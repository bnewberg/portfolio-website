import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faDev, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    faGithub = faGithub as IconProp;
    faDev = faDev as IconProp;
    faTwitter = faTwitter as IconProp;
    faAngular = faAngular as IconProp;


    constructor() { }

    ngOnInit(): void {
    }

}
