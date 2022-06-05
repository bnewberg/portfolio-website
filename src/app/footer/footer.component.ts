import { Component, OnInit } from '@angular/core';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDev, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    faGithub = faGithub as IconProp;
    faDev = faDev as IconProp;

    constructor() { }

    ngOnInit(): void {
    }

}
