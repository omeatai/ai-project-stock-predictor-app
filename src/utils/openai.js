import OpenAI from "openai";
import { toast } from "react-toastify";
const toastifyConfig = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

async function main(data) {
  const messages = [
    {
      role: 'system',
      content: 'You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell.'
    },
    {
      role: 'user',
      content: data
    }
  ]

  try {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo-1106", // "gpt-4-1106-preview" // "gpt-4-0613" // "gpt-4" // "gpt-3.5-turbo-1106" // "gpt-3.5-turbo"
    });

    // console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;

  } catch (err) {
    console.log('Error:', err)
    toast.error("Unable to access AI. Please refresh and try again", toastifyConfig);
  }
}

export default main;
