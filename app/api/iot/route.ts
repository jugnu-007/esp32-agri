import { NextRequest, NextResponse } from "next/server";
// import { db } from "~/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        console.log(`${key}: ${data[key]}`);
      }
    }
    // const device = await db.ioT.findFirst({
    //   where: { deviceId: data.deviceId },
    // });
    // if (!device) {
    //   return NextResponse.json({ message: "Device not registered", status: 404 });
    // }
    // const dbResponse = await db.land_Experiment_Data.create({
    //   data: {
    //     createdAt: data.timestamp,
    //     ipAddress: String(data.ip),
    //     deviceId: String(data.dId),
    //     // nitrogen: parseFloat(data.nitrogen),
    //     // phosphorus: parseFloat(data.phosphorus),
    //     // potassium: parseFloat(data.potassium),
    //     // ph: parseFloat(data.ph),
    //     // moisture: parseFloat(data.moisture),
    //     humidity: parseFloat(data.humidity),
    //     temperature: parseFloat(data.temperature),
    //     landId: String(device.landId)
    //   },
    // });

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}


/*
https://nextjs.org/docs/pages/building-your-application/routing/api-routes
https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body
https://github.com/vercel/next.js/discussions/44212
*/
