import { NextResponse } from 'next/server';
import { prisma } from '../../libs/prisma';
export async function GET() {
  try {
    const result = await prisma.userProfile.findMany({
      include: {
        Education: true,
        Experience: true,
        Skill: true,
        Interests: true,
        GuildsInfo: true,
      },
    });

    return NextResponse.json({ data: result[0] });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function PUT(req) {
  const { id, ...res } = await req.json();
  if (id) {
    await prisma.userProfile.delete({
      where: {
        id: id,
      },
    });
  }

  try {
    const result = await prisma.userProfile.create({
      data: {
        ...res.userInput,
        startingDate: new Date(res.userInput.startingDate),
        userProfileImage: res.profilePicture,
        userCoverImage: res.coverPicture,
        ...res.contact,
        Education: {
          create: res.educationInfo.map((item) => {
            return {
              id: item.id,
              name: item.name,
              year: +item.year,
            };
          }),
        },
        Experience: {
          create: res.experienceInfo.map((item) => {
            return {
              id: item.id,
              name: item.name,
              position: item.position,
              yearStart: +item.yearStart,
              yearEnd: +item.yearEnd,
            };
          }),
        },
        Skill: {
          create: res.skillInfo.map((item) => {
            return {
              id: item.id,
              name: item.name,
              level: +item.level,
            };
          }),
        },
        Interests: {
          create: res.interestsInfo.map((item) => {
            return {
              id: item.id,
              name: item.name,
            };
          }),
        },
        GuildsInfo: {
          create: res.guildInfo.map((item) => {
            return {
              id: item.id,
              name: item.name,
            };
          }),
        },
      },
    });
    return NextResponse.json({ data: result, message: 'create success' });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
