import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from 'src/loader.service';


@Injectable()
export class MyInterceptor implements HttpInterceptor {
    loaderService = inject(LoaderService)
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // You can modify the request headers or handle the response here
    // For example, adding a header
    this.loaderService.setLoadingStatus(true)
    const modifiedRequest = request.clone({
      setHeaders: {
       'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoeWFzc2luZSIsImlhdCI6MTcwMTcyODcyNywiZXhwIjoxNzAxNzMyMzI3fQ.IORp2PZJdam8GaaoaW5Ea5kGgymHi4yoP5_m_f-IFUQ'
      }
    });

    // Pass the modified request on to the next handler

    return next.handle(modifiedRequest).pipe(
        finalize(()=>{
            this.loaderService.setLoadingStatus(false)
        })
    );
  }
}
