import { Component,} from '@angular/core';
import { ApiclientService } from '../Service/apiclient.service';

@Component({
    selector: 'producto',
    templateUrl: './Element.component.html',
    styleUrls:['./Element.component.css']
})
export class ElementComponent{
   public elemento : any ;
    constructor(
        private apiclient:ApiclientService
    ){
        this.elemento=this.apiclient.getProducts().subscribe(re=>{
             this.elemento=Object.values(re);
                
            });
        }
}
    



