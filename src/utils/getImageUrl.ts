export function getImageUrl(url: string): string {
  return `${import.meta.env.VITE_IMAGE_HOST}${url}`;
}
