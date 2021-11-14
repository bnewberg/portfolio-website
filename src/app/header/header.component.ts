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

    getNavTransform() {
        return this.isNavOpen ? "translateX(0%)" : "translateX(100%)";
    }

    getNavTogglePosition() {
        return this.isNavOpen ? "fixed" : "absolute";
    }

}
