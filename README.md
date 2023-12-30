# AI Projects - Stock Predictor App and More

## Introduction

These are modern AI Projects like a Stock Predictor Application built with React, TailwindCSS, Hugging Face and LangChain by Ifeanyi Omeata.

## Development Tools/Stack

- React [https://react.dev/](https://react.dev/)
- TailwindCSS [https://tailwindcss.com/docs/installation/framework-guides](https://tailwindcss.com/docs/installation/framework-guides)
- OpenAI Node API Library [https://www.npmjs.com/package/openai](https://www.npmjs.com/package/openai)
- OpenAI [https://platform.openai.com/docs/overview](https://platform.openai.com/docs/overview)
- Hugging Face [https://huggingface.co/](https://huggingface.co/)
- LangChain [https://python.langchain.com/docs/get_started/introduction](https://python.langchain.com/docs/get_started/introduction)
- Polygon.io [https://polygon.io/docs/stocks/getting-started](https://polygon.io/docs/stocks/getting-started)
- React-Toastify [https://www.npmjs.com/package/react-toastify](https://www.npmjs.com/package/react-toastify)
- Axios [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)
- React Context API [https://react.dev/learn/passing-data-deeply-with-context](https://react.dev/learn/passing-data-deeply-with-context)
- React useContext [https://react.dev/reference/react/useContext](https://react.dev/reference/react/useContext)
- How to use React Context API [https://www.freecodecamp.org/news/context-api-in-react/](https://www.freecodecamp.org/news/context-api-in-react/)

## Demo

## Project Steps (Tutorial)

<details>
<summary>1. Create React App </summary>

# Create React App 

### [https://github.com/omeatai/ai-project-stock-predictor-app/commit/9a42ba010cc155e1dbe9ee337ba2dd8c502a3137](https://github.com/omeatai/ai-project-stock-predictor-app/commit/9a42ba010cc155e1dbe9ee337ba2dd8c502a3137)

# Install React App

```x
yarn create react-app .
```

# Start React App

```x
yarn start
```

<img width="1092" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/b2363cfd-c0e9-4023-a9b2-5b38c9865539">
<img width="1092" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/ffb58c04-110a-40ec-a250-7ad73029733c">
<img width="1349" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/5419864e-bf95-4def-9c67-e37815abf56e">

# #End</details>

+Stock Predictor App

<details>
<summary>2. Stock Predictor App - Create Context API with states </summary>

# Create Context API with states

### [https://github.com/omeatai/ai-project-stock-predictor-app/commit/8ca0d5121001f5ccbd8183b6262ec3ef857fad2a](https://github.com/omeatai/ai-project-stock-predictor-app/commit/8ca0d5121001f5ccbd8183b6262ec3ef857fad2a)

<img width="1093" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/246df273-e6aa-4a11-99e9-54a3a068b936">
<img width="1093" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/4a134f83-b5b9-4b51-8424-bbbff3712c05">
<img width="1093" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/d9f58d0b-e38e-4a57-a7a8-c5d5967677ee">
<img width="1265" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/d5dd25e3-4333-483f-b40b-5d051975a500">

# #End</details>

<details>
<summary>3. Stock Predictor App - Create Components Logic with tailwindCSS </summary>

# Create Components Logic with tailwindCSS

### [https://github.com/omeatai/ai-project-stock-predictor-app/commit/7aecb8a52fd00ae01b2b9753749fe5e6617eb2db](https://github.com/omeatai/ai-project-stock-predictor-app/commit/7aecb8a52fd00ae01b2b9753749fe5e6617eb2db)

# Install TailwindCSS

```x
npm install -D tailwindcss
npx tailwindcss init
```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Start your build process

```x
npm run start
```

# Install React-Toastify

```x
npm i react-toastify
```

<img width="1095" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/af1566ad-58df-4002-a73e-33bc7fcd2f55">
<img width="1095" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/7f531d5a-a380-4b55-8501-8d1af28f356b">
<img width="1095" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/1015f1cc-d36f-45b0-b958-4851cd198cc7">
<img width="1095" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/6f839a18-99c7-4468-8e8e-e6407c39fce0">
<img width="1095" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/087ed7ae-2b65-444c-858f-73bfc8afc29a">
<img width="1095" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/a1952ca3-c8be-4dde-8e92-1c72adab860c">
<img width="1313" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/48384fe8-e8f2-40d4-b694-91d2f803b775">
<img width="1313" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/ebc36724-0577-42df-879b-9d1fd2c0a739">

# #End</details>

<details>
<summary>4. Stock Predictor App - Fetch Stock Data </summary>

# Fetch Stock Data

### [https://github.com/omeatai/ai-project-stock-predictor-app/commit/cc9b320b0725d9e40c139ed9402ea6b39c14f93b](https://github.com/omeatai/ai-project-stock-predictor-app/commit/cc9b320b0725d9e40c139ed9402ea6b39c14f93b)

<img width="1313" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/ad640c55-798d-4432-99e6-8c9cbe4cb6b1">
<img width="1313" alt="Screenshot 2023-12-07 at 8 18 30 PM" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/be1b42de-8127-4fd0-bf4f-044816e22e6a">
<img width="1313" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/62d8362e-743d-45c2-9a44-de5ce30248d1">
<img width="1313" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/d2fc84a7-bbbb-4e45-be7e-ec9b1d3e5f41">
<img width="519" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/e68c46fd-51bc-468e-b8c4-39d8c35751ba">
<img width="1096" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/f893ea62-fc8b-4cb9-89a9-6380e8d144c5">
<img width="1096" alt="Screenshot 2023-12-07 at 8 21 22 PM" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/8b6e3f56-4b28-4431-afd8-d7256f578376">
<img width="1096" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/663e3576-33db-42c1-aac9-3e6793b0e9a2">
<img width="1096" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/3ed11d34-aecb-4c35-ba02-8f97b9a5a1f9">
<img width="1096" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/d1f06be9-14a9-4261-aeb7-487c4e024fbc">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/ce776899-de1f-499a-b186-609da3044c20">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/ed570d8d-ffff-4d39-b941-4228e61e649c">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/cc88ccd3-e391-441e-83cf-efc4b4b93455">

# #End</details>

<details>
<summary>5. Stock Predictor App - Open AI Setup </summary>

# Open AI Setup

### [https://github.com/omeatai/ai-project-stock-predictor-app/commit/1a82502b721b12740b43124e9c27eb60d34fd2f7](https://github.com/omeatai/ai-project-stock-predictor-app/commit/1a82502b721b12740b43124e9c27eb60d34fd2f7)

# Install OpenAI Node API Library

```x
npm i openai
```

# Openai.js Example 1:

```js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
  //   organizationId: process.env.REACT_APP_ORGANIZATION_ID,
});

const messages = [
  {
    role: "system",
    content: "You are a helpful general knowledge expert.",
  },
  {
    role: "user",
    content: "Who invented the television?",
  },
  // { role: "assistant", content: "The invention of television was the work of many individuals in the late 19th century and early 20th century. However, Scottish engineer John Logie Baird is often associated with creating the first mechanical television. He demonstrated his working device in January 1926 in London. Concurrently in the United States, Philo Farnsworth is credited with inventing the first fully electronic television in the late 1920s." }
];

async function main() {
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo-1106", // "gpt-4-1106-preview" // "gpt-4-0613" // "gpt-4" // "gpt-3.5-turbo-1106" // "gpt-3.5-turbo"
  });

  console.log(completion.choices[0]);
  console.log(completion.choices[0].message.content);
}

export default main;
```

```x
{
    "index": 0,
    "message": {
        "role": "assistant",
        "content": "Several inventors and scientists contributed to the development of television technology. However, the first practical and working television system was demonstrated by Philo Farnsworth in 1927. Farnsworth is often credited as the inventor of the television, as he was the first to successfully transmit a television image using his electronic television system."
    },
    "logprobs": null,
    "finish_reason": "stop"
}
```

```x
Several inventors and scientists contributed to the development of television technology. However, the first practical and working television system was demonstrated by Philo Farnsworth in 1927. Farnsworth is often credited as the inventor of the television, as he was the first to successfully transmit a television image using his electronic television system.
```

# Openai.js Example 2:

```js
import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: 'system',
        content: 'You are a helpful assistant that explains things in language a 10-year-old can understand. Your answers are always less than 100 words.'
    },
    {
        role: 'user',
        content: 'What is Quantum Computing?'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages
})

console.log(response.choices[0].message.content)
```

```x
Quantum computing is like a super-magic computer. Imagine if your toy box could hold an infinite number of toys all at the same time, yet still fit in your room. Quantum computers can hold a lot more information than regular computers and solve problems much faster because they can look at many answers at once.
```

<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/bbda0b28-48b8-4dd9-b532-c869818fe7d0">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/ccd0892a-bc52-4950-90e6-e0bbfc7dc317">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/c41b7ef4-07eb-4ca3-950c-2f4c97660fd1">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/39a66bd2-50e4-4061-8da0-3f10b2799e18">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/4d31acf6-b9d9-41ec-80c2-2cc14734b1e4">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/0703d553-bb30-48b2-8050-20567f5a58dd">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/2ce5655d-45b1-4f51-a659-c7254a1d6b03">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/0a938ee4-9c4e-4537-83c7-b1bfd56e7c28">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/07086232-ddac-4a45-9dd7-9a4cc1cf750e">
<img width="1311" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/3b98c4cf-cca7-4177-b636-b2971d18f04a">
<img width="1088" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/837645d9-360b-42a8-90ac-fa9267d2a880">
<img width="1091" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/3ee77596-3642-4a1c-aa59-7d3e0de769cd">
<img width="1088" alt="Screenshot 2023-12-08 at 2 35 21 PM" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/34083d4c-d368-406a-b360-3857dd124eb6">
<img width="1313" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/daca6238-39f4-477c-8f1a-3792758a591d">
<img width="548" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/9c1ecd2f-e336-4bef-b7f3-fbef73cb99a4">
<img width="1139" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/e66650cc-e59f-4640-8af0-ac5133efa806">
<img width="1139" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/5479a4a6-89cc-4acc-a1ed-9ecdfe0eeeb1">
<img width="1354" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/70e2b3ed-d1f5-404e-8147-6e90a6aa91d5">

# #End</details>

<details>
<summary>6. Stock Predictor App - Adding Open AI to App Component </summary>

# Adding Open AI to App Component 

### [https://github.com/omeatai/ai-project-stock-predictor-app/commit/127e300076a8b0610cf42fac66b077f61cb04bf5](https://github.com/omeatai/ai-project-stock-predictor-app/commit/127e300076a8b0610cf42fac66b077f61cb04bf5)

# Openai.js

```js
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
      // max_tokens: 16 // default: inf
      // temperature: 1.1
    });

    // console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;

  } catch (err) {
    console.log('Error:', err)
    toast.error("Unable to access AI. Please refresh and try again", toastifyConfig);
  }
}

export default main;
```

<img width="1141" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/9f780088-2e29-48bb-aa2f-907aa3367198">
<img width="1141" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/8ff980d5-46fb-49ac-8f53-06576b7bcc60">
<img width="1141" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/afa60ef1-5e00-424a-9242-bf9923f62724">
<img width="1139" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/f3501744-888a-4f83-8308-043b6827656c">
<img width="1139" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/391ea371-9f4b-46ff-8508-8173343f934c">
<img width="1139" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/e67e63a6-b1d1-4c70-9b00-731cc7c98d1c">
<img width="1139" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/f2e6aac2-e002-4278-ab68-ac8a703946bf">
<img width="1139" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/a0d7c055-e602-4ebb-af55-9031d71b7b42">
<img width="1274" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/a68efb11-e0af-4e39-aafe-465b121c6d8a">
<img width="1274" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/f98a481f-20b0-43ba-9780-1260de6397e6">
<img width="1274" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/7b327553-03f6-4505-8999-3620129924cf">
<img width="1274" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/bf7cdc17-1fef-4ccf-9f77-2b14130d6a69">

# #End</details>

<details>
<summary>7. Stock Predictor App -  Training Data with Sample Output </summary>

# Training Data with Sample Output

# Openai.js

```js
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
    });

    // console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;

  } catch (err) {
    console.log('Error:', err)
    toast.error("Unable to access AI. Please refresh and try again", toastifyConfig);
  }
}

export default main;
```

```x
Over the past three days, Microsoft (MSFT) stocks have demonstrated a consistent uptrend, with the opening price at $375.37 and closing at $375.28 on the third day. This indicates a stable performance and suggests a potential uptrend in the near future. With this momentum, it is advisable to hold on to the stocks or consider buying as it shows no signs of slowing down. The trading volume has remained high, further supporting the positive outlook for the stock. For investors, holding or buying MSFT stocks could lead to potential gains.
```

<img width="1142" alt="image" src="https://github.com/omeatai/ai-projects-stock-predictor-app/assets/32337103/d59ab15e-603a-4830-909b-2810f72459d9">
<img width="1274" alt="image" src="https://github.com/omeatai/ai-projects-stock-predictor-app/assets/32337103/a5919e0a-b2e0-4124-a7ae-dca2058e555a">
<img width="1274" alt="image" src="https://github.com/omeatai/ai-projects-stock-predictor-app/assets/32337103/17af0aed-e332-4ea2-bede-161979e0fa44">

# #End</details>

<details>
<summary>8. Stock Predictor App -  Training  </summary>

# Training 

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

# #End</details>




