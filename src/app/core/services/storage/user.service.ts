import { Injectable } from '@angular/core';
import { user } from './../../interface/State';
import { environment } from '../../../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn : 'root'
})
export class UserService {

  private u !: user;
  constructor(private storageService : StorageService){
    this.u = JSON.parse(this.storageService.get(environment.STORAGE_USER_KEY) as string) as user;
  }

  get user() : user{
    return this.u as user;
  }


}
