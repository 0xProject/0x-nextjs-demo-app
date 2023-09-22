# 0x Next.js Demo App

## Overview

An example ERC-20 swap application built on [Next.js 13](https://nextjs.org/) with [0x Swap API](https://0x.org/docs/0x-swap-api/introduction) and [ConnectKit](https://docs.family.co/connectkit#connectkit).

Covers best practices for how to use the 0x Swap API's [/price](https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-price) endpoint for [indicative pricing](https://0x.org/docs/0x-swap-api/guides/accessing-rfq-liquidity/how-to-integrate-rfq-liquidity#1-indicative-pricing) and the [/quote](https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-quote) endpoint for [firm quotes](https://0x.org/docs/0x-swap-api/guides/accessing-rfq-liquidity/how-to-integrate-rfq-liquidity#2-firm-quotes).

### Live Demo

Checkout with live demo 👉 [here](https://0x-nextjs-demo-app-git-main-0x-eng.vercel.app/)

![](https://raw.githubusercontent.com/0xProject/0x-nextjs-demo-app/main/public/demo.gif)

## Getting Started

1. Setup the required API keys

| **API Keys**           | **Description**                                                                                                        | **Code**                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alchemyId              | Alchemy API key (create one [here](https://docs.alchemy.com/docs/alchemy-quickstart-guide#1key-create-an-alchemy-key)) | Add [here](https://github.com/0xProject/0x-nextjs-demo-app/blob/main/pages/_app.tsx#L14)                                                                                                                        |
| walletConnectProjectId | WalletConnect's SDK to help with connecting wallets (create one [here](https://cloud.walletconnect.com/sign-in))       | Add [here](https://github.com/0xProject/0x-nextjs-demo-app/blob/main/pages/_app.tsx#L15)                                                                                                                        |
| 0x                     | 0x API key (create one [here](https://0x.org/docs/introduction/getting-started))                                       | Add for /price [here](https://github.com/0xProject/0x-nextjs-demo-app/blob/main/pages/api/price.ts#L18) and for /quote [here](https://github.com/0xProject/0x-nextjs-demo-app/blob/main/pages/api/quote.ts#L18) |

2. Install project dependencies

```
npm install
```

3. Start the Next.js development server

```
npm run dev
```

4. Navigate to [http://localhost:3000](http://localhost:3000)

```
open http://localhost:3000
```

## Resources

### Video

🎥 Watch [this video](https://www.youtube.com/watch?v=P1ECx9zKQiU) for an walk-through of this app.

### Documentation

#### Swap API Basics

- [**📚 Swap API Docs**](https://0x.org/docs/0x-swap-api/introduction)
- [**How to Use Swap API**](https://0x.org/docs/0x-swap-api/guides/swap-tokens-with-0x-swap-api)
- [**Quote API Endpoint**](https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-quote)
- [**Price API Endpoint**](https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-price)
- [**⛓️ Swap API Endpoints on All Networks**](https://0x.org/docs/introduction/0x-cheat-sheet)

#### RFQ Integration on Swap API

The 0x Swap API makes it simple to easily integrate RFQ liquidity for the best pricing. This demo app is setup to enble RFQ liquidity by default becuase it requires a non-null takerAddress. For more implement details and the difference between indicative pricing and requesting a firm quote, check out [**How to Integrate RFQ Liquidity**](https://0x.org/docs/0x-swap-api/guides/accessing-rfq-liquidity/how-to-integrate-rfq-liquidity). 

#### Monetizing Your Swap Integration

You have full flexibility to collect affiliate fees on trades going through your swap integration. This can be done by setting the `feeRecipient` and `buyTokenPercentageFee` parameters in a Swap API request. 

If you would like to display the fee to your end users separately, just display the amount returned by `grossBuyAmount` * `buyTokenPercentageFee`.

Learn more about setting up monetization [here](https://0x.org/docs/developer-resources/faqs-and-troubleshooting#monetizing-your-swap-integration). 


