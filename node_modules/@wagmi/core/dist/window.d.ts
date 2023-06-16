import { WindowProvider } from '@wagmi/connectors';

declare global {
    interface Window {
        ethereum?: WindowProvider;
    }
}
