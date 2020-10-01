import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  styleUrls: ['tab-group-basic-example.css'],
})
export class TabGroupBasicExample {
  public tabs = [];
  public isinList = ["isin_1", "isin_2", "isin_3", "isin_4", "isin_5", "isin_6", "isin_7", "isin_8", "isin_9", "isin_10", "isin_11", "isin_12", "isin_13", "isin_14", "isin_15", "isin_16", "isin_17", "isin_18", "isin_19", "isin_20"];
  public selectedIsin: string;
  @ViewChild('tabGroup') tabGroup;

  constructor() {
    this.tabs = this.isinList;
    this.selectedIsin = this.tabs[0];
  }

  public scrollTabs(event) {
    const children = this.tabGroup._tabHeader._elementRef.nativeElement.children;
    event.deltaY > 0 ? children[2].click() : children[0].click();
  }

  public tabChanged(isin: string) {
    this.selectedIsin = isin;
  }

}