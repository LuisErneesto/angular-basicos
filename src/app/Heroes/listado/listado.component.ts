import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes : string[]=['Spiderman','IronMan','Hulk','Thor','CaptainAmerica'];
  heroesBorrados:string='';

  borrarHeroe(){
    console.log('Borrando...');
    this.heroesBorrados=this.heroes.pop() ||'';
    
  }


}

