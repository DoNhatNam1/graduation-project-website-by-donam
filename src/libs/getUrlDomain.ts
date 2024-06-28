

export function getDomainFromUrl(urlString: string): string | null {
    try {
      const myUrl = new URL(urlString);
  
      // Lấy hostname từ đối tượng URL
      const hostname = myUrl.hostname;
  
      if (hostname) {
        const hostnameParts = hostname.split('.');
  
        // Kiểm tra hostnameParts để đảm bảo có ít nhất 2 phần tử (tên miền cơ bản)
        if (hostnameParts.length >= 2) {
          return hostnameParts[0];
        }
      }
    } catch (error) {
      console.error(`Error parsing URL: ${urlString}`, error);
    }
  
    return null;
  }