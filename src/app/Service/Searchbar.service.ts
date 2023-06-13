import { Injectable } from '@angular/core';
import { ApiclientService } from './apiclient.service';
import { map, switchMap, tap } from 'rxjs';
import { Crud } from '../Interface/CRUD.interface';

@Injectable({
    providedIn: 'root'
})

export class SearchBar {
    
    dato$ :Crud[]=[];
    
    constructor(private _http: ApiclientService) {
        
        
    }
    

    filter(key:string):Crud[]{
        
          this._http.getProducts().pipe(switchMap(async (x) =>  this.dato$=x.filter((z)=>z.name.toLowerCase().includes(key.toLowerCase())))).subscribe();
            this.dato$.sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        return(this.dato$);
        

        

    }
}
