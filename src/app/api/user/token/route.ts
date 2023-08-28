'use client';
import { prisma } from "@/lib/Prisma";
import { useSearchParams } from "next/navigation";

export async function GET() {
  const useParams = useSearchParams();
  const token = useParams?.get('token');

  if (!token) {
    return new Response(JSON.stringify('Token inválido.'), 
    { status: 400 });
  }

  try {
  const userToken = await prisma.user.findFirst({
    where: {
      id: token,
    },
  })

  if (!userToken) {
    return new Response(JSON.stringify('Token inválido.'), 
    { status: 400 });
  }

  return new Response(JSON.stringify(userToken), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Erro inesperado.'), 
    { status: 500 });
  }
}