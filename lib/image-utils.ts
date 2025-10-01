// Utility to handle image paths for GitHub Pages deployment
export function getImagePath(path: string): string {
  // If path is already absolute (starts with http/https), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // For GitHub Pages deployment, we need to prepend the base path
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/FMKing' : '';
  
  // Ensure path starts with / for proper absolute path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}
