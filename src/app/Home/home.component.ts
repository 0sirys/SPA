import { Component, Inject, OnInit, inject } from "@angular/core";
import { SearchBar } from "../Service/Searchbar.service";
import { Crud } from "../Interface/CRUD.interface";
import { ElementComponent } from "../Elementos/Element.component";






@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent {
    public result!: Array<Crud>;
    public clean: Array<Crud> =[{id:0, name:''}];
    constructor(private _sea: SearchBar) { }

    search(event: Event) {
        
        const key = event.currentTarget as HTMLInputElement;
        console.log(key.value);
        console.log(key.value.length);
        if (key.value.length > 1) {


            this.result = this._sea.filter(key.value);
            console.log(this.result);
        }else{
            this.result=this.clean;
            
        }
    }
}