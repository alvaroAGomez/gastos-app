import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    // Si la ruta es privada (requiere login)
    const protectedRoute = route.data?.['protected'] ?? true;

    return this.authService.isAuthenticated$.pipe(
      take(1),
      map((isAuth) => {
        if (protectedRoute && !isAuth) {
          // ruta protegida y usuario no logueado
          return this.router.createUrlTree(['/auth/login']);
        }

        if (!protectedRoute && isAuth) {
          // ruta pública y usuario ya logueado (ej. login o register)
          return this.router.createUrlTree(['/']);
        }

        // Caso válido -> permitir acceso
        return true;
      })
    );
  }
}
