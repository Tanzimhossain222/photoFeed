import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const photoId = params?.id;
    try {
        const data = await getPhotoById(photoId);
        
        if (data) {
            return NextResponse.json(data);
        } else {
            return NextResponse.error({
                status: 404,
                statusText: "Not Found",
            });
        }
    } catch (error) {
        return NextResponse.error({
            status: 500,
            statusText: "Internal Server Error",
        });
    }
}
