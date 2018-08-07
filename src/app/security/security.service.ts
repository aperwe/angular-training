import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import { HttpParams } from '@angular/common/http';

export const SECURITY_CONFIG = new InjectionToken<SecurityConfig>("Security Service Config");
@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(@Inject(SECURITY_CONFIG) private config: SecurityConfig) { }

  authorize() {
    const {
      client_id,
      response_type,
      redirect_uri
    } = this.config;

    const params = new HttpParams({
      fromObject: {
        client_id,
        response_type,
        redirect_uri
      }
    });

    // Build URL
    const redirectURL = this.config.auth_url + "?" + params.toString();
    console.log(redirectURL);
    params.toString();

    // Redirect
    window.location.replace(redirectURL);
  }

  private token: string;

  getToken() {
    if (!this.token && location.hash) {
      const params = new HttpParams({
        fromString: location.hash.substr(1)
      });
      this.token = params.get("access_token");
    }

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

