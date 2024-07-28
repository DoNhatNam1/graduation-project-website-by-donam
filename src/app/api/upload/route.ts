import { writeFile, unlink } from 'fs/promises'; // Import unlink for file deletion
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;
    const action: string = data.get('action') as string; // Get the action type

    if (!file) {
        return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = `public/${file.name}`;

        await writeFile(path, buffer);

    return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get('fileName');

    if (!fileName) {
        return NextResponse.json({ success: false });
    }

    const path = `public/${fileName}`;

    try {
        await unlink(path);
        console.log(`File ${fileName} deleted successfully`);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting file:', error);
        return NextResponse.json({ success: false, error: 'Error deleting file' });
    }
}