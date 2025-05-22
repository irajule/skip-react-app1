export const routeMap = {
  '/': { next: '/skips', back: null },
  '/skips': { next: '/payment', back: '/' },
  '/payment': { next: '/contact', back: '/skips' },
};
