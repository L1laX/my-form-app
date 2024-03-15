import { NextResponse } from 'next/server';
import { prisma } from '../../libs/prisma';
export async function GET() {
  try {
    const result = await prisma.userProfile.findMany({
      include: true,
    })[0];
    console.log(result);
    return NextResponse.json({ data: result });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e });
  }
}

export async function POST(req) {
  const body = await req.json();
  try {
    const result = await prisma.userProfile.create({
      data: body,
    });
    console.log(result);
    return NextResponse.json({ data: result });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e });
  }
}
