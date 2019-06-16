import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss']
})
export class TutorialPageComponent implements OnInit {

  markdown: string = `
  ## Example Header
  Example content
  - some things
  `

  constructor() { }

  ngOnInit() {
  }

}
