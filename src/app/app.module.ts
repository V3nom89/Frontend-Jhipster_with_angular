import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './admin/admin.module';
import { AuthInterceptor } from 'src/authJWT/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from 'src/authJWT/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from 'src/authJWT/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from 'src/authJWT/interceptor/notification.interceptor';

/** 
 * Modulo principale dell'applicazione. Qui vengono importati i moduli secondari. L'UNICA component
 * da dichiare qui è l'AppComponent, tutte le altre devono essere dichiarate nel loro modulo e questo importato
 * qui.
 * 
 * @author Vittorio Valent
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    LayoutModule,
    AdminModule
  ],
  providers: [
    {
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
  
  
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
