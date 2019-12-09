import { Component, OnInit } from '@angular/core';
import { Relic } from '../relic';

@Component({
  selector: 'app-relic-list',
  templateUrl: './relic-list.component.html',
  styleUrls: ['./relic-list.component.scss']
})
export class RelicListComponent implements OnInit {
  title = 'Relic List';
  showPopup = false;
  relics = [
    new Relic('abacus','abacus description'),
    new Relic('anchor', 'anchor description'),
    new Relic('anvil', 'anvil description'),
    new Relic('lament', "Dudes in your next %d battles have 1 hp", 3)
  ]

  displayRelic = [false, false, false]

  constructor() { }

  ngOnInit() {
  }

  showRelic(i: number) {
    this.displayRelic[i] = true;
  }

  hideRelic(i: number) {
    this.displayRelic[i] = false;
  }

  onMouseOver(event: MouseEvent, relic: Relic) {
    console.log(event)
  }

}
