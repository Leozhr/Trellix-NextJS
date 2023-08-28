import { prisma } from '@/lib/Prisma';

export async function POST(request: Request) {
  try {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return new Response(JSON.stringify('Preencha todos os campos.'), 
    { status: 400 });
  }

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  console.log(userExists)

  if (userExists) {
    return new Response(JSON.stringify('O endereço de email já está em uso.'), 
    { status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password
    },
  })

    return new Response(JSON.stringify(user), { status: 201 });  
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}