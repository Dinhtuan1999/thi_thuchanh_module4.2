
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  toastr: any;

  constructor() { }
  showSuccess(message:any, title:any){
    this.toastr.success(message, title)
  }
}
