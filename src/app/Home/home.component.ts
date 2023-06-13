import { Component, Inject, OnInit, inject } from "@angular/core";
import { SearchBar } from "../Service/Searchbar.service";
import { Crud } from "../Interface/CRUD.interface";




 

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent /* implements OnInit */ {
    constructor(private _sea:SearchBar){}

    ngOnInit(): void {
    }
    search(event: Event) {
        
        const key= event.currentTarget as HTMLInputElement;
        const result =this._sea.filter(key.value);
    


    }



}