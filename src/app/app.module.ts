import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { MusicModule } from './music/music.module';
import { SecurityModule } from './security/security.module';
import { SECURITY_CONFIG } from './security/security.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlaylistsModule,
    MusicModule,
    SecurityModule
  ],
  providers: [
    {
      provide: SECURITY_CONFIG,
      useValue: environment.security
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
