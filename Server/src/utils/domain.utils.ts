export const extractDomain = (url: string): string | null => {
  try {
    if (!url) return null;
    const formattedUrl = url.startsWith("http")
      ? url
      : `https://${url}`;
    const parsedUrl = new URL(formattedUrl);
    return parsedUrl.hostname;
  } catch (error) {
    return null; 
  }
};