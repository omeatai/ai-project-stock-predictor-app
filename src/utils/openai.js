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
  const sampleData = `
            ###
            Oh No! You are really going to hate this! Over the past three days, Tesla(TSLA) shares have plummeted.The stock opened at $223.98 and closed at $202.11 on the third day, with some jumping around in the meantime. The highest price was $240 and the lowest price for the day was $190. This is a great time to buy, baby! But not a great time to sell! Apple (AAPL) stocks have gone stratospheric! This is a seriously hot stock right now. They opened at $166.38 and closed at $182.89 on day three. So all in all, I would hold on to Tesla shares tight if you already have them - they might bounce right back up and head to the stars! They are volatile stock, so expect the unexpected. For APPL stock, I would Sell now and take the profits or hang on and wait for more! If it were me, I would hang on because this stock is on fire right now and the trading volume is still high!!! Apple stock is booming!
            ###
            ###
            Apple(AAPL) is the supernova in the stock sky - it shot up from $150.22 to a jaw - dropping $175.36 by the close of day three. We're talking about a stock that's hotter than a pepper sprout in a chilli cook - off, and it's showing no signs of cooling down! If you're sitting on AAPL stock, you might as well be sitting on the throne of Midas. Hold on to it, ride that rocket, and watch the fireworks, because this baby is just getting warmed up! Then there's Meta(META), the heartthrob with a penchant for drama.It winked at us with an opening of $142.50, but by the end of the thrill ride, it was at $135.90, leaving us a little lovesick. It's the wild horse of the stock corral, bucking and kicking, ready for a comeback. META is not for the weak. For AAPL, my advice is to stay on that gravy train. As for META, keep your spurs on and be ready for the rally.
            ###
            `
  const messages = [
    {
      role: 'system',
      content: 'You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell. Use the examples provided between ### to set the style of your response.'
    },
    {
      role: 'user',
      content: `${data} ${sampleData}`
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
      // max_tokens: 16 // default: inf
      // temperature: 1.1 // default: 0.7
      stop: ['.'] // examples: ['\n', '3.', '.']
    });

    // console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;

  } catch (err) {
    console.log('Error:', err)
    toast.error("Unable to access AI. Please refresh and try again", toastifyConfig);
  }
}

export default main;
