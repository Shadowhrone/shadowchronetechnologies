import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret" },
      { status: 401 }
    );
  }

  revalidatePath("/", "layout");
  revalidatePath("/blog", "layout");
  revalidatePath("/product", "layout");
  revalidatePath("/service", "layout");

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}