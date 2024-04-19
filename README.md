# 0x Swap API Demo App (Next.js Pages Router)

## Overview

An example ERC-20 swap application built on [Next.js Pages Router](https://nextjs.org/) with [0x Swap API](https://0x.org/docs/0x-swap-api/introduction) and [ConnectKit](https://docs.family.co/connectkit#connectkit).

Swap API enables your users to easily and conveniently trade tokens at the best prices directly in your app. With one simple integration, 0x unlocks thousands of tokens on the most popular blockchains and aggregated liquidity from 100+ AMMs and professional market makers.

This demo app covers best practices for how to use the 0x Swap API's [/price](https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-price) endpoint for [indicative pricing](https://0x.org/docs/0x-swap-api/guides/accessing-rfq-liquidity/how-to-integrate-rfq-liquidity#1-indicative-pricing) and the [/quote](https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-quote) endpoint for [firm quotes](https://0x.org/docs/0x-swap-api/guides/accessing-rfq-liquidity/how-to-integrate-rfq-liquidity#2-firm-quotes).

> [!WARNING]  
> This is a demo, and is not ready for production use. The code has not been audited and does not account for all error handling. Use at your own risk.

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

🎥 Watch [this video](https://www.youtube.com/watch?v=P1ECx9zKQiU) for a walk-through of this app.

### Documentation

#### Swap API Docs

- [**Intro to Swap API**](https://0x.org/docs/0x-swap-api/introduction)
- [**How to Use Swap API**](https://0x.org/docs/0x-swap-api/guides/swap-tokens-with-0x-swap-api)
- [**Quote API References**](https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-quote)
- [**Price API References**](https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-price)
- [**Swap API Endpoints on All Networks**](https://0x.org/docs/introduction/0x-cheat-sheet)

#### RFQ Integration on Swap API

The 0x Swap API makes it simple to easily integrate RFQ liquidity for the best pricing. This demo app is setup to enable RFQ liquidity by default because it requires a non-null takerAddress. For more implement details and the difference between indicative pricing and requesting a firm quote, check out [**How to Integrate RFQ Liquidity**](https://0x.org/docs/0x-swap-api/guides/accessing-rfq-liquidity/how-to-integrate-rfq-liquidity). 

#### Monetizing Your Swap Integration

And as your business grows, Swap API offers low-friction ways to monetize your products.

Web3 teams can leverage Swap API to unlock new revenue streams by easily tapping into affiliate fee and trade surplus features. Regardless of whether you’re on a [**free or paid plan**](https://0x.org/pricing), monetization options are available to *all* integrators.

Swap API offers two monetization options out-of-the-box:
* Collect affiliate fees (i.e. trading fee or commission) <- shown in this demo app
* Collect trade surplus (i.e. positive slippage)

For more details about monetizing, check out the [**How to monetize your app using 0x Swap API**](https://0x.org/docs/0x-swap-api/guides/monetize-your-app-using-swap) guide which discusses pricing considerations and shows code samples for how to easily implement these options.

## Further Examples

To find more demo apps, check out the official [0x examples repo](https://github.com/0xProject/0x-examples).

Try out - 

- [Swap API Demo App (Next.js App Router)](https://github.com/0xProject/0x-examples/tree/main/swap-next-app)
- [Gasless API Demo App (Next.js App Router)](https://github.com/0xProject/0x-examples/tree/main/tx-relay-next-app)


