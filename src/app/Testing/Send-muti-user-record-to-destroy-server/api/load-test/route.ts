import { NextResponse } from 'next/server';

export async function GET() {
  const numRequests = 10; // Số lượng request cần gửi
  const requests = [];

  // Tạo một mảng các promise của các request
  for (let i = 0; i < numRequests; i++) {
    requests.push(
      fetch('/Testing/Send-muti-user-record-to-destroy-server/api/dummy-endpoint', {
        method: 'GET', // Phương thức GET
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  }

  try {
    // Sử dụng Promise.all để gửi các request đồng thời và chờ tất cả các request hoàn thành
    await Promise.all(requests);

    // Trả về kết quả cho client (máy test)
    return NextResponse.json({ message: `Sent ${numRequests} requests` }, { status: 200 });
  } catch (error) {
    console.error('Load test failed:', error);
    return NextResponse.json({ error: 'Load test failed' }, { status: 500 });
  }
}
