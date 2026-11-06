/**
 * Whether a menu item points at the page being rendered, or at a section it
 * sits inside: `/work/2/` still lights up Work. Home matches only itself.
 */
export const isCurrentPath = (path: string, href: string) =>
  path === href || (href !== "/" && path.startsWith(href));
