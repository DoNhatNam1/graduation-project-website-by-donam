
import { NextResponse } from 'next/server'

export async function GET() {
    // Bất kỳ xử lý nào ở đây cũng không cần thiết, endpoint này chỉ để nhận request từ load test
    return NextResponse.json({ message: 'Dummy endpoint reached' });
  }