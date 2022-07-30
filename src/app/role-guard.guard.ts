import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoleGuardGuard implements CanActivate {

  constructor() { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    return this.isauthorized(route);
  }

  isauthorized(route: ActivatedRouteSnapshot): boolean {
    const roles = ['Admin'];
    const expectedRoles = route.data['expectedRoles']
    // const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1)
    // return roleMatches < 0 ? true : false;

    const roleMatches = roles.find(x => {
      x = expectedRoles;
      if (JSON.stringify(x) === JSON.stringify(roles)) {
        return false;
      }
      else {
        return true;
      }
    })
    console.log(roleMatches)
    return roleMatches ? true : false;
  }
}