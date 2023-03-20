import { User } from 'src/app/core/interface/Api';
import { StatesFacades } from './../../../../core/services/facades/state.facades';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, take } from 'rxjs';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-uaccount',
  templateUrl: './uaccount.component.html',
  styleUrls: ['./uaccount.component.scss'],
})
export class UaccountComponent implements OnInit {
  user!: User;
  loading = false;
  avatarUrl?: string;
  msg!:string;

  constructor(private statesFacades: StatesFacades) {}
  ngOnInit(): void {
    this.statesFacades
      .selectUser()
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  beforeUpload = (
    file: NzUploadFile,
    _fileList: NzUploadFile[]
  ): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.loading = false;
        break;
    }
  }
}
