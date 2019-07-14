import { Injectable } from "@angular/core";
import { HttpEvent, HttpResponse } from "@angular/common/http";
import { RequestCacheService } from "../services/requestCache.service";

import { Observable, of } from "rxjs";

import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";

const TTL = 10;
/**
@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cache.get(req.url);
    return cachedResponse
      ? Observable.of(cachedResponse)
      : this.sendRequest(req, next);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).do(event => {
      if (event instanceof HttpResponse) {
        this.cache.set(req.url, event, TTL);
      }
    });
  }
} */