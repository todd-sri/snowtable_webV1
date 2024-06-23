import {Injectable} from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, Router
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {RouteDescriptor} from '../../../core/route-descriptor';
import {SharedService} from '../services/shared/shared.service';
import {tap} from 'rxjs/operators';

/**
 * uses RouteDescriptor.requiredPermissions array to check permissions
 */
@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private _router: Router,
              private _sharedService: SharedService) {
  }

  redirectToHome() {
    this._router.navigate(['/unauthorized']);
  }

  userIsAuthorized(routeData: RouteDescriptor): Observable<boolean> {
    const result$ = routeData.requiredPermissions.length > 0 ?
      this._sharedService.userHasPermissions(...routeData.requiredPermissions) :
      of(true);
    return result$.pipe(
      tap(allow => {
        // in case if use hasn't access, redirect to home page, to avoid get blank page
        if (!allow) {
          this.redirectToHome();
        }
      })
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userIsAuthorized(<RouteDescriptor>next.data);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userIsAuthorized(<RouteDescriptor>next.data);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.userIsAuthorized(<RouteDescriptor>route.data);
  }
}
