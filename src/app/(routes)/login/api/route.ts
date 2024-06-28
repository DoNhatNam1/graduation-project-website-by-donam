// pages/api/getDomain.js

export default async function handler(req:any, res:any) {

  // Lấy URL từ request
  const currentUrl = `https://${req.headers.host}${req.url}`;

  // Phân tích URL để lấy hostname
  const hostname = new URL(currentUrl).hostname;

  // Lấy cụm từ "cafe" từ hostname
  const hostnameParts = hostname.split('.');
  const domainValue = hostnameParts[0];

  res.status(200).json({ domainValue });
}