import useSWR from "swr";
import Image from "next/image";
import {
  POLYGON_TOKENS_BY_SYMBOL,
  POLYGON_TOKENS_BY_ADDRESS,
} from "../../lib/constants";
import { fetcher } from "../Price";
import type { PriceResponse, QuoteResponse } from "../api/types";
import { formatUnits } from "ethers";
import {
  useAccount,
  useSendTransaction,
  usePrepareSendTransaction,
  type Address,
} from "wagmi";

export default function QuoteView({
  price,
  quote,
  setQuote,
  takerAddress,
}: {
  price: PriceResponse;
  quote: QuoteResponse | undefined;
  setQuote: (price: any) => void;
  takerAddress: Address | undefined;
}) {
  // fetch quote here

  const { address } = useAccount();

  const { isLoading: isLoadingPrice } = useSWR(
    [
      "/api/quote",
      {
        sellToken: price.sellTokenAddress,
        buyToken: price.buyTokenAddress,
        sellAmount: price.sellAmount,
        // buyAmount: TODO if we want to support buys,
        takerAddress,
      },
    ],
    fetcher,
    {
      onSuccess: (data) => {
        setQuote(data);
        console.log("quote", data);
      },
    }
  );

  const { config } = usePrepareSendTransaction({
    to: quote?.to, // The address of the contract to send call data to, in this case 0x Exchange Proxy
    data: quote?.data, // The call data required to be sent to the to contract address.
  });

  const { sendTransaction } = useSendTransaction(config);

  if (!quote) {
    return <div>Getting best quote...</div>;
  }

  const sellTokenInfo =
    POLYGON_TOKENS_BY_ADDRESS[price.sellTokenAddress.toLowerCase()];

  return (
    <div className="p-3 mx-auto max-w-screen-sm ">
      <form>
        <div className="bg-slate-200 dark:bg-slate-800 p-4 rounded-sm mb-3">
          <div className="text-xl mb-2 text-white">You pay</div>
          <div className="flex items-center text-lg sm:text-3xl text-white">
            <img
              alt={sellTokenInfo.symbol}
              className="h-9 w-9 mr-2 rounded-md"
              src={sellTokenInfo.logoURI}
            />
            <span>{formatUnits(quote.sellAmount, sellTokenInfo.decimals)}</span>
            <div className="ml-2">{sellTokenInfo.symbol}</div>
          </div>
        </div>

        <div className="bg-slate-200 dark:bg-slate-800 p-4 rounded-sm mb-3">
          <div className="text-xl mb-2 text-white">You receive</div>
          <div className="flex items-center text-lg sm:text-3xl text-white">
            <img
              alt={
                POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()]
                  .symbol
              }
              className="h-9 w-9 mr-2 rounded-md"
              src={
                POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()]
                  .logoURI
              }
            />
            <span>
              {formatUnits(
                quote.buyAmount,
                POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()]
                  .decimals
              )}
            </span>
            <div className="ml-2">
              {
                POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()]
                  .symbol
              }
            </div>
          </div>
        </div>
      </form>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={() => {
          console.log("submitting quote to blockchain");
          sendTransaction && sendTransaction();
        }}
      >
        Place Order
      </button>
    </div>
  );
}
