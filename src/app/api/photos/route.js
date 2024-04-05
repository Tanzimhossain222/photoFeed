import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";


export async function GET() {
    const data = await getAllPhotos();

    const resData = data.reduce((acc, cur) => {
        acc.push({
            id: cur.id,
            title: cur.title,
            url: cur.url,
        })
        return acc;
    }, []);

    return NextResponse.json(resData);
}