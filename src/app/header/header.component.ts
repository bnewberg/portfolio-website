import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isNavOpen = false;

    constructor() { }

    ngOnInit(): void {
    }

    onNavToggle() {
        this.isNavOpen = !this.isNavOpen;
    }

}
