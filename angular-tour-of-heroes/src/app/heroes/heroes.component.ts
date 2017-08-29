import { Component, OnInit } from '@angular/core';
import {Hero} from "../app.hero";
import {HeroService} from "../services/hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect = function (hero) {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    // 慢一点
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
