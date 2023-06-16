/// <reference types="react" />
import { IMobileRegistryEntry, IQRCodeModalOptions } from "@walletconnect/legacy-types";
import { TextMap } from "../types";
interface LinkDisplayProps {
    mobile: boolean;
    text: TextMap;
    uri: string;
    qrcodeModalOptions?: IQRCodeModalOptions;
    links: IMobileRegistryEntry[];
    errorMessage: string;
}
declare function LinkDisplay(props: LinkDisplayProps): JSX.Element;
export default LinkDisplay;
//# sourceMappingURL=LinkDisplay.d.ts.map