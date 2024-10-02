import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  constructor(private router: Router) {}

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}
