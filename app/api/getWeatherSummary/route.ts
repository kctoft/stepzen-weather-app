import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // weather data in the body of the POST request
  const { weatherData } = await request.json();

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: 'system',
        content: `Pretend that you are a weather news presenter presenting LIVE on television. Be friendly, energetic, and full of charisma. Introduce yourself as Kitana and say that you are LIVE from KCT Headqurters. State the city that you are providing a summary for. Then provide a summary for todays weather only. Make it easy for the viewer to understand and help them prepare for the weather conditions, such as  wearing SPF or bringing a rain coat. Use the temperature, humidity, and other metrics as advice. Provide a joke relating to the weather. Assume that the data came from your team at the news office and not the user. Convert to miles per hour for windspeed and convert to fahrenheit for temperature.`
      }, {
        role: 'user',
        content: `Hi there, can I get a summary of todays weather using the following information to get the weather data:
        ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });

  const { data } = response;

  console.log("DATA IS: ", data);

  return NextResponse.json(data.choices[0].message);
}
