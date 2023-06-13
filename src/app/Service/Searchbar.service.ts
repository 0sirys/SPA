import { Injectable } from '@angular/core';
import { ApiclientService } from './apiclient.service';
import { debounce, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { Crud } from '../Interface/CRUD.interface';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})

export class SearchBar {
    
    dato$ :Crud[]=[];
    
    constructor(private _http: ApiclientService) {
        
        
    }
    

    filter(key:string):Crud[]{
        
          this._http.  getProducts().pipe(
            distinctUntilChanged(),
            switchMap((x) =>  this.dato$=x.filter((z)=>z.name.toLowerCase().includes(key.toLowerCase()))), tap(x=>console.log()),debounceTime(1000)).subscribe();
            this.dato$.sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase(),"es"));
        return(this.dato$ );
        

        

    }
}
