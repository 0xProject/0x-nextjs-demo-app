# Ledger Connect Kit

The Ledger Connect Kit can be used to check the level of support for [Ledger
Connect](https://get-connect.ledger.com) on the user's platform. We will guide
the user to install Connect or use a fallback connection to the Ledger Live
app. The code is designed to be loaded at runtime from a CDN so that the logic
and UI can be updated as we release new updates to Connect without the wait for
wallet libraries and dapps updating package versions and releasing new builds.

The `@ledgerhq/connect-kit-loader` allows developers to consume Connect Kit in
a transparent way.


## Support status

Ledger Connect is currently only supported on Safari iOS. There are two edge
cases in the detection logic:

- Safari on iPadOS is shown as supported if the user requests the mobile
  website, as it sets the userAgent string to be the same as iOS, otherwise
  the userAgent string is the same as Safari on MacOS, which is not supported
  yet.
- Brave on iOS is shown as supported because it sets the userAgest string to
  be the same as Safari on iOS, but Connect will not work.


## Connect Kit loader

To use Connect Kit you just have to add the `@ledgerhq/connect-kit-loader`
package as a dependency using your preferred package manager, using yarn as an example

```sh
yarn add @ledgerhq/connect-kit-loader
```

and use it as below

```js
import { loadConnectKit } from '@ledgerhq/connect-kit-loader'

const connectKit = await loadConnectKit()
```

If you are using classes you can get the promise on the class constructor and
its value where you need it

```ts
import { loadConnectKit } from '@ledgerhq/connect-kit-loader'

export class LedgerConnector {
  private provider: any
  private connectKitPromise: Promise<LedgerConnectKit>

  constructor() {
    super()

    this.connectKitPromise = loadConnectKit()
  }

  public async connect(): Promise<Connector> {
    if (!this.provider) {
      const connectKit = await this.connectKitPromise
```

You can check that Connect Kit is loaded by looking at the network tab on the
developer tools. You should see a request for `https://<CDN>/umd/index.js`.

See what functions are provided by the Connect Kit API below.


## Connect Kit API

Connect Kit exports three functions, `enableDebugLogs`, `checkSupport` and
`getProvider`.

### `enableDebugLogs`

#### Description

Enables debug messages on the browser console in case you need to diagnose a
possible problem.

Once Connect Kit is loaded you can call it from the browser's developer tools
console with `window.ledgerConnectKit.enableDebugLogs()` and call the other
Connect Kit functions to see the debug messages. Just reload the dapp to
disable them.

### `checkSupport`

#### Parameters

```ts
type CheckSupportOptions = {
  providerType: SupportedProviders;
  chainId: ConnectSupportedChains;
  bridge?: string;
  infuraId?: string;
  rpc: { [chainId: number]: string; };
}
```

#### Returns

```ts
type ConnectSupport = type CheckSupportResult = {
  isLedgerConnectSupported?: boolean;
  isLedgerConnectEnabled?: boolean;
  isChainIdSupported?: boolean;
  providerImplementation: 'LedgerConnect' | 'WalletConnect';
}
```

#### Description

Lets you know the level of support for Ledger Connect on the user's platform,
and shows a UI to guide the user.

If the Connect extension is installed and enabled you will just get the response
and no UI will be shown. If Connect is not available on the user's platform one
of these modals will be shown:

- Try Ledger Connect, in case the user's platform supports Connect but
  it is not installed or enabled; a button will be shown to let the user
  install the browser extension.
- Connect with Ledger Live, in case the user's platform does not support
  Connect they will be able to use Ledger Live Mobile or Desktop to connect.

### `getProvider`

#### Returns

`Promise<EthereumProvider | SolanaProvider>`

#### Description

Based on the options passed to `checkSupport` it returns a promise to a Ledger
Connect Ethereum provider, Ledger Connect Solana Provider or a WalletConnect
provider.

### Example

An example function using the *Ledger Connect Kit* and *ethers.js*, that would
be called when pressing the connect button on a React app.

`setProvider`, `setLibrary`, `setAccount`, `setChainId` and `setError` are just
simple `useState` functions to keep app state.

```js
// JSX code
<Button onClick={() => connectWallet()}>Connect With Ledger</Button>
```

```js
// click handler function
const connectWallet = async () => {
  try {
    const connectKit = await loadConnectKit();
    connectKit.enableDebugLogs();
    const checkSupportResult = connectKit.checkSupport({
      chainId: 1,
      providerType: SupportedProviders.Ethereum,
      rpc: {
        1: `https://cloudflare-eth.com`, // Mainnet
        137: "https://matic-mainnet.chainstacklabs.com", // Polygon
      }
    });
    console.log('checkSupportResult is', checkSupportResult);

    const provider = await connectKit.getProvider();
    setProvider(provider);

    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    if (accounts) setAccount(accounts[0]);

    const library = new ethers.providers.Web3Provider(provider);
    setLibrary(library);

    const network = await library.getNetwork();
    setChainId(network.chainId);
  } catch (error) {
    setError(error);
  }
}
```
