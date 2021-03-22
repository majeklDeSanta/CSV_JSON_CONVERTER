import { UploadFileService } from './../services/upload-file.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';
import {
  AcceptValidator,
  MaxSizeValidator,
} from '@angular-material-components/file-input';

@Component({
  selector: 'app-converter-menu',
  templateUrl: './converter-menu.component.html',
  styleUrls: ['./converter-menu.component.css'],
})
export class ConverterMenuComponent implements OnInit {
  fileToUpload: File = null;
 

  constructor(private uploadFileService: UploadFileService) {

  }

  ngOnInit(): void {

  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

  uploadFile() {
   
    this.uploadFileService.parseTable(this.fileToUpload).subscribe((data: any) => {
      console.log(data);
    });
  }
  // foods: Food[] = [
  //   { value: 'CSV', viewValue: 'CSV' },
  //   { value: 'JSON', viewValue: 'JSON' },
  //   { value: 'XML', viewValue: 'XML' },
  // ];

  // color: ThemePalette = 'primary';
  // disabled: boolean = false;
  // multiple: boolean = false;
  // accept: string;

  // fileControl: FormControl;

  // public options = [
  //   { value: true, label: 'True' },
  //   { value: false, label: 'False' },
  // ];

  // public listColors = ['primary', 'accent', 'warn'];
  // public listAccepts = [
  //   null,
  //   '.png',
  //   'image/*',
  //   '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  // ];

  // public files;
  // maxSize = 16;

  // constructor() {
  //   this.fileControl = new FormControl(this.files, [
  //     Validators.required,
  //     MaxSizeValidator(this.maxSize * 1024),
  //   ]);
  // }

  // ngOnInit() {
  //   this.fileControl.valueChanges.subscribe((files: any) => {
  //     if (!Array.isArray(files)) {
  //       this.files = [files];
  //     } else {
  //       this.files = files;
  //     }
  //   });
  // }

  // onDisabledChanged(value: boolean) {
  //   if (!value) {
  //     this.fileControl.enable();
  //   } else {
  //     this.fileControl.disable();
  //   }
  // }
}

// interface Food {
//   value: string;
//   viewValue: string;
// }

// const presetFiles = [new File([], 'file 1'), new File([], 'file 2')];
// const presetFile = new File([], 'file 1');
