import { Injectable } from '@angular/core';
import {Hero} from "../app.hero";
import {Http} from "@angular/http";

@Injectable()
export class HeroService {
  private heroesUrl = '/api/heroes';
  constructor(private http: Http) { }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => setTimeout(() => resolve(this.getHeroes()), 2000));
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.massage || error);
  }
}
