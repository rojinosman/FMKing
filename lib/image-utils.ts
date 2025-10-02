// lib/image-utils.ts
export function getImagePath(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  // Use env var to opt-in to a subpath build (for github.io/<repo>)
  const basePath = process.env.NEXT_PUBLIC_BASEPATH ?? '';

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}