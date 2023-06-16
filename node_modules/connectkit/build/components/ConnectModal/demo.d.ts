/// <reference types="react" />
import { CustomTheme, Languages, Theme, Mode } from '../../types';
declare const ConnectModal: React.FC<{
    theme?: Theme;
    mode?: Mode;
    customTheme?: CustomTheme;
    lang?: Languages;
    inline?: boolean;
    open?: boolean;
    onClose?: () => void;
}>;
export default ConnectModal;
