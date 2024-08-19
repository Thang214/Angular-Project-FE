import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (!user.token) {
    router.navigate(['/login']);
    return false;
  }
  if (user.user.role !== 'admin') {
    router.navigate(['/not-found']);
    return false;
  }
  return true;
};
