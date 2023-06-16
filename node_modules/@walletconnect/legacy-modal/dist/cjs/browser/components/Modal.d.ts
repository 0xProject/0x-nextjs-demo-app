/// <reference types="react" />
import { IQRCodeModalOptions } from "@walletconnect/legacy-types";
import { TextMap } from "../types";
interface ModalProps {
    text: TextMap;
    uri: string;
    onClose: any;
    qrcodeModalOptions?: IQRCodeModalOptions;
}
declare function Modal(props: ModalProps): JSX.Element;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map