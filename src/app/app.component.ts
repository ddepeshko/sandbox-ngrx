import {Component, OnInit} from '@angular/core';
import {DataSyncStorageService} from "@services/data-sync-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private dataSyncStorageService: DataSyncStorageService) {
  }

  ngOnInit(): void {
    this.dataSyncStorageService.initStoreState();
  }
}
