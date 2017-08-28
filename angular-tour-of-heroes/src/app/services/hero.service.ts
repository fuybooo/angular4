import { Injectable } from '@angular/core';
import {Hero} from "../app.hero";
import {HEROES} from "../mock-hero";

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
