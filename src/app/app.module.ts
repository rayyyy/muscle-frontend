import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/organisms/header/header.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { MainTabModule } from './components/organisms/main-tab/main-tab.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';
import { URLInterceptor } from './services/url-interceptor';
import { ErrorInterceptor } from './services/error-interceptor';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthService } from './services/auth/auth.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogModule } from './components/organisms/error-dialog/error-dialog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MainTabModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule,
    ErrorDialogModule
  ],
  providers: [
    AuthService,
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    AngularFireAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: URLInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
