import { NextResponse } from "next/server";

import Groq from "groq-sdk";

import { buildKnowledge } from "@/lib/knowledge";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion =
      await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        temperature: 0.4,

        messages: [
          {
            role: "system",
            content: buildKnowledge(),
          },

          {
            role: "user",
            content: message,
          },
        ],
      });

    return NextResponse.json({
      reply:
        completion.choices[0].message.content,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        reply:
          "Sorry, I couldn't generate a response right now.",
      },
      {
        status: 500,
      }
    );

  }
}