import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css']
})
export class DownloadModalComponent implements OnInit {

  form: FormGroup;
  resultLink: string;
  linkRef: AbstractControl;

  constructor(private dialogRef: MatDialogRef<DownloadModalComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      link: new FormControl('', [])
    });
  }

  onSubmit(){
    this.linkRef = this.form.get('link');
    console.log(this.linkRef);
    this.resultLink = !this.linkRef ? this.linkRef.value : '';
    this.dialogRef.close();
  }
}
