import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../components/servicios/heroes.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeoresComponent implements OnInit {

  heroes: any = {};
  constructor(private _heroresService: HeroesService, private router: Router) {
    console.log("Inicializando el constructor")
   }

  ngOnInit(): void {

    this.heroes = this._heroresService.getHeroes();
    console.log(this.heroes);

  }

  verHeroe(id:number){
      this.router.navigate(['/heroe', id]);

  }



}
