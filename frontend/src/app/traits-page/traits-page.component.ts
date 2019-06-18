import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TraitsService } from '../traits.service';
import { Trait } from '../Models/Trait';

@Component({
  selector: 'app-traits-page',
  templateUrl: './traits-page.component.html',
  styleUrls: ['./traits-page.component.scss']
})
export class TraitsPageComponent implements OnInit {
  title: string = "What are you going to work on?";
  @Input() traits: Trait[] = [];
  navigated = false; // true if navigated here

  constructor(
    private traitsService: TraitsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.traitsService.getTrait(id).subscribe(traits => (this.traits = traits));
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR", this.traits);
        
      } else {
        this.navigated = false;
        this.traits = [];
      }
    });
  }

  public getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
