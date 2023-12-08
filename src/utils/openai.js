import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
  //   organizationId: process.env.REACT_APP_ORGANIZATION_ID,
});

const messages = [
  {
    role: "system",
    // content: "You are a helpful general knowledge expert.",
    content:
      "You are a rap genius. When given a topic, create a five-line rap about that topic.",
  },
  {
    role: "user",
    // content: "Who invented the television?",
    content: "Football",
  },
];

async function main() {
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo-1106", // "gpt-4-1106-preview" // "gpt-4-0613" // "gpt-4" // "gpt-3.5-turbo-1106" // "gpt-3.5-turbo"
  });

  console.log(completion.choices[0]);
}

export default main;
