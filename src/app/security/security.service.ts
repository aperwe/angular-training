import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  authorize() {

  }

  private token: string;

  getToken() {
    if (!this.token) {
      this.authorize();
    }

    return this.token;

  }
}

export interface SecurityConfig {
  auth_url: string;
  client_id: string;
  response_type: string;
  redirect_uri: string;
}

export const SECURITY_CONFIG = new InjectionToken<SecurityConfig>("Security Service Config");