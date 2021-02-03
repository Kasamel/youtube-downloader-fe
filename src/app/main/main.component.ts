import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DownloadModalComponent } from './download-modal/download-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  description = "FFFF";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDownloadModal(): void {
    const modalRef = this.dialog.open(DownloadModalComponent)

    modalRef.afterClosed().subscribe(link => {
      console.log(link.value);
    })
  }

}
