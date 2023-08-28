import { prisma } from "@/lib/Prisma";
import { redirect } from "next/navigation";

interface AuthTokenProps {
  children: React.ReactNode;
  params: { slug: string };
}

export default async function AuthToken({ children, params }: AuthTokenProps) {
  if (!params.slug) {
    redirect('/')
  }

  const token = await prisma.user.findFirst({
    where: {
      token: params.slug,
    },
  })

  if (!token) {
    redirect('/')
  }

  return <>{children}</>
}