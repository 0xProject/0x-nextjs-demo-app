# 0x Next.js Demo App

## Overview
An example ERC-20 swap application built on [Next.js](https://nextjs.org/) with [0x Swap API](https://0x.org/docs/0x-swap-api/introduction) and [ConnectKit](https://docs.family.co/connectkit#connectkit).

![](https://raw.githubusercontent.com/0xProject/0x-nextjs-demo-app/main/public/demo.gif)

## Getting Started
1. Setup the required API keys

| **API Keys**           | **Description**                                                                                                       | **Code**                                                                                                                                                                                  |
|------------------------|-----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| alchemyId              | Alchemy API key (create one [here](https://docs.alchemy.com/docs/alchemy-quickstart-guide#1key-create-an-alchemy-key) | Add [here](https://github.com/0xProject/0x-nextjs-demo-app/blob/main/pages/_app.tsx#L14)                                                                                                  |
| walletConnectProjectId | WalletConnect's SDK to help with connecting wallets (create one [here](https://cloud.walletconnect.com/sign-in))      | Add [here](https://github.com/0xProject/0x-nextjs-demo-app/blob/main/pages/_app.tsx#L15)                                                                                                  |
| 0x                     | 0x API key (create one [here](https://0x.org/docs/introduction/getting-started))                                      | Add for /price [here](https://github.com/0xProject/0x-nextjs-demo-app/blob/main/pages/api/price.ts#L18) and for /quote [here](https://github.com/0xProject/0x-nextjs-demo-app/blob/main/pages/api/quote.ts#L18) |


2. Install project dependencies

```
npm install connectkit wagmi viem
```

3. Start the Next.js development server

```
yarn
yarn run dev
```

4. Navigate to [http://localhost:3000](http://localhost:3000)
```
open http://localhost:3000
```
## Resources
🎥 Watch [this video](https://www.youtube.com/watch?v=P1ECx9zKQiU) for an walk-through of this app. 

* **📚 Swap API Docs:** https://0x.org/docs/0x-swap-api/introduction
* **Quote API Endpoint:** https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-quote
* **Price API Endpoint:** https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-price
* **⛓️ Swap API Endpoints on All Networks:** https://0x.org/docs/introduction/0x-cheat-sheet

