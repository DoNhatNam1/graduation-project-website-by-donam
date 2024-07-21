
export default async function handler(req, res) {
    const numRequests = 1000000; // Số lượng request cần gửi
  
    for (let i = 0; i < numRequests; i++) {
      // Gửi request tới một endpoint bất kỳ, ví dụ /api/dummy-endpoint
      fetch('/api/dummy-endpoint')
        .then(() => {
          console.log('Load test request sent');
        })
        .catch(error => {
          console.error('Load test failed:', error);
        });
    }
  
    // Trả về kết quả cho client (máy test)
    res.status(200).json({ message: `Sent ${numRequests} requests` });
  }