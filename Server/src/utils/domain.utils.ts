export const extractDomain = (url: string): string | null => {
  try {
    if (!url) return null;
    const formattedUrl = url.startsWith("http")
      ? url
      : `https://${url}`;
    const parsedUrl = new URL(formattedUrl);
    // return parsedUrl.hostname;
    return "user.matka.com"
  } catch (error) {
    return null; 
  }
};