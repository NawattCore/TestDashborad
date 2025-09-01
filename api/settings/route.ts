import { NextResponse } from 'next/server';

let settings = {
  place: 'اسفل - يمين',
  stepsNo: 3,
  step1MinPrice: 100,
  copouns1Text: 'توصيل مجاني',
  copouns1Color1: '#000000',
  copouns1Color2: '#ffffff',
  copouns1TextColor: '#ffffff',
  copouns1Code: '11111',
  step1Text: 'الخطوه الاولى',
  step1Color: '#F54747'
};

export async function GET() {
  return NextResponse.json(settings);
}

export async function POST(req: Request) {
  const body = await req.json();
  settings = { ...settings, ...body };
  return NextResponse.json({ success: true, settings });
}
