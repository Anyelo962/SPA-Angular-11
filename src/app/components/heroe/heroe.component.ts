import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService, Heroe } from '../../components/servicios/heroes.service'
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any = {};

  heroes: Heroe[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private _heroresService: HeroesService
    
    
    ) {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroresService.getHeroe(params['id']);

    });
   }

}
