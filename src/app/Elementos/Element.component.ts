import { Component, Input } from '@angular/core';
import { SearchBar } from '../Service/Searchbar.service';
import { Crud } from '../Interface/CRUD.interface';

 
@Component({
    selector: 'producto',
    templateUrl: './Element.component.html',
    styleUrls: ['./Element.component.css']
})
export class ElementComponent {
    @Input() elemento! : Crud;
    public existe: boolean=true;
    ngOnInit(){
        if(this.elemento.id===0){
            this.existe=false;
        }
    }
    
}





