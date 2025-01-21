import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

interface CustomAPIRequest extends NextApiRequest {}
interface CustomAPIResponse extends NextApiResponse {}
const openai = new OpenAI({
  apiKey: process.env.openaiKey,
});

export default async function CareerPathRequestHandler(req: CustomAPIRequest, res: CustomAPIResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a career path recommendation tool for users that want to change careers to tech or user new to the tech industry. The user would provide you informations about them such as their skillset, what they like to do with their free time, etc. With the information provided about the user, Kindly provide a summary of on their primary strength, career direction, developement areas and a career path suggestion as next step. Also provide a list of top career matches, learning path and resources.",
        },
        { role: "user", content: message },
      ],
    });

    const responseMessage = completion.choices[0].message.content;

    res.status(200).json({ response: responseMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
}
