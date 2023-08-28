import { prisma } from "@/lib/Prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const token = await prisma.user.findFirst({
      where: {
        token: params.slug,
      },
    })

    if (!token) {
      return new NextResponse(JSON.stringify(token), { 
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(token), { status: 200 });
  } catch (e) {
    return new NextResponse(JSON.stringify('Erro interno do servidor'), { status: 500 });
  }
}