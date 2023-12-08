# AI Project - Stock Predictor App

## Introduction

This is a modern AI Stock Predictor Application built with React, TailwindCSS, Hugging Face and LangChain by Ifeanyi Omeata.

## Development Tools/Stack

- React [https://react.dev/](https://react.dev/)
- TailwindCSS [https://tailwindcss.com/docs/installation/framework-guides](https://tailwindcss.com/docs/installation/framework-guides)
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

<details>
<summary>2. Create Context API with states </summary>

# Create Context API with states

### [https://github.com/omeatai/ai-project-stock-predictor-app/commit/8ca0d5121001f5ccbd8183b6262ec3ef857fad2a](https://github.com/omeatai/ai-project-stock-predictor-app/commit/8ca0d5121001f5ccbd8183b6262ec3ef857fad2a)

<img width="1093" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/246df273-e6aa-4a11-99e9-54a3a068b936">
<img width="1093" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/4a134f83-b5b9-4b51-8424-bbbff3712c05">
<img width="1093" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/d9f58d0b-e38e-4a57-a7a8-c5d5967677ee">
<img width="1265" alt="image" src="https://github.com/omeatai/ai-project-stock-predictor-app/assets/32337103/d5dd25e3-4333-483f-b40b-5d051975a500">

# #End</details>

<details>
<summary>3. Create Components Logic with tailwindCSS </summary>

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
<summary>4. Fetch Stock Data </summary>

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
<summary>5. Open AI Setup </summary>

# Open AI Setup

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

```x

```

```x

```

# #End</details>




