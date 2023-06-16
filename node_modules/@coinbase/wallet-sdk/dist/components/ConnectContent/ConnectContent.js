"use strict";
// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinbaseAppSteps = exports.CoinbaseWalletSteps = exports.ConnectItem = exports.ConnectContent = void 0;
const clsx_1 = __importDefault(require("clsx"));
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const util_1 = require("../../util");
const version_1 = require("../../version");
const CloseIcon_1 = require("../icons/CloseIcon");
const coinbase_round_svg_1 = __importDefault(require("../icons/coinbase-round-svg"));
const coinbase_wallet_round_svg_1 = __importDefault(require("../icons/coinbase-wallet-round-svg"));
const QRCodeIcon_1 = require("../icons/QRCodeIcon");
const QRLogoCoinbase_1 = __importDefault(require("../icons/QRLogoCoinbase"));
const QRLogoWallet_1 = __importDefault(require("../icons/QRLogoWallet"));
const StatusDotIcon_1 = require("../icons/StatusDotIcon");
const QRCode_1 = require("../QRCode");
const Spinner_1 = require("../Spinner/Spinner");
const ConnectContent_css_1 = __importDefault(require("./ConnectContent-css"));
const wallets = {
    "coinbase-wallet-app": {
        title: "Coinbase Wallet app",
        description: "Connect with your self-custody wallet",
        icon: coinbase_wallet_round_svg_1.default,
        steps: CoinbaseWalletSteps,
    },
    "coinbase-app": {
        title: "Coinbase app",
        description: "Connect with your Coinbase account",
        icon: coinbase_round_svg_1.default,
        steps: CoinbaseAppSteps,
    },
};
const makeQrCodeImage = (app) => {
    switch (app) {
        case "coinbase-app":
            return QRLogoCoinbase_1.default;
        case "coinbase-wallet-app":
        default:
            return QRLogoWallet_1.default;
    }
};
const makeIconColor = (theme) => {
    return theme === "light" ? "#FFFFFF" : "#0A0B0D";
};
function ConnectContent(props) {
    const { theme } = props;
    const [selected, setSelected] = (0, hooks_1.useState)("coinbase-wallet-app");
    const handleSelect = (0, hooks_1.useCallback)((id) => {
        setSelected(id);
    }, []);
    const qrUrl = (0, util_1.createQrUrl)(props.sessionId, props.sessionSecret, props.linkAPIUrl, props.isParentConnection, props.version, props.chainId);
    const wallet = wallets[selected];
    if (!selected) {
        return null;
    }
    const WalletSteps = wallet.steps;
    const coinbaseApp = selected === "coinbase-app";
    return ((0, preact_1.h)("div", { "data-testid": "connect-content", class: (0, clsx_1.default)("-cbwsdk-connect-content", theme) },
        (0, preact_1.h)("style", null, ConnectContent_css_1.default),
        (0, preact_1.h)("div", { class: "-cbwsdk-connect-content-header" },
            (0, preact_1.h)("h2", { class: (0, clsx_1.default)("-cbwsdk-connect-content-heading", theme) }, "Scan to connect with one of our mobile apps"),
            props.onCancel && ((0, preact_1.h)("button", { type: "button", class: "-cbwsdk-cancel-button", onClick: props.onCancel },
                (0, preact_1.h)(CloseIcon_1.CloseIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })))),
        (0, preact_1.h)("div", { class: "-cbwsdk-connect-content-layout" },
            (0, preact_1.h)("div", { class: "-cbwsdk-connect-content-column-left" },
                (0, preact_1.h)("div", null, Object.entries(wallets).map(([key, value]) => {
                    return ((0, preact_1.h)(ConnectItem, { key: key, title: value.title, description: value.description, icon: value.icon, selected: selected === key, onClick: () => handleSelect(key), theme: theme }));
                })),
                coinbaseApp && ((0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-connect-content-update-app", theme) },
                    "Don\u2019t see a ",
                    (0, preact_1.h)("strong", null, "Scan"),
                    " option? Update your Coinbase app to the latest version and try again."))),
            (0, preact_1.h)("div", { class: "-cbwsdk-connect-content-column-right" },
                (0, preact_1.h)("div", { class: "-cbwsdk-connect-content-qr-wrapper" },
                    (0, preact_1.h)(QRCode_1.QRCode, { content: qrUrl, width: 200, height: 200, fgColor: "#000", bgColor: "transparent", image: {
                            svg: makeQrCodeImage(selected),
                            width: 25,
                            height: 25,
                        } }),
                    (0, preact_1.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: version_1.LIB_VERSION }),
                    (0, preact_1.h)("input", { type: "hidden", value: qrUrl })),
                (0, preact_1.h)(WalletSteps, { theme: theme }),
                !props.isConnected && ((0, preact_1.h)("div", { "data-testid": "connecting-spinner", class: (0, clsx_1.default)("-cbwsdk-connect-content-qr-connecting", theme) },
                    (0, preact_1.h)(Spinner_1.Spinner, { size: 36, color: theme === "dark" ? "#FFF" : "#000" }),
                    (0, preact_1.h)("p", null, "Connecting...")))))));
}
exports.ConnectContent = ConnectContent;
function ConnectItem({ title, description, icon, selected, theme, onClick, }) {
    return ((0, preact_1.h)("div", { onClick: onClick, class: (0, clsx_1.default)("-cbwsdk-connect-item", theme, { selected }) },
        (0, preact_1.h)("div", null,
            (0, preact_1.h)("img", { src: icon, alt: title })),
        (0, preact_1.h)("div", { class: "-cbwsdk-connect-item-copy-wrapper" },
            (0, preact_1.h)("h3", { class: "-cbwsdk-connect-item-title" }, title),
            (0, preact_1.h)("p", { class: "-cbwsdk-connect-item-description" }, description))));
}
exports.ConnectItem = ConnectItem;
function CoinbaseWalletSteps({ theme }) {
    return ((0, preact_1.h)("ol", { class: "-cbwsdk-wallet-steps" },
        (0, preact_1.h)("li", { class: (0, clsx_1.default)("-cbwsdk-wallet-steps-item", theme) },
            (0, preact_1.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")),
        (0, preact_1.h)("li", { class: (0, clsx_1.default)("-cbwsdk-wallet-steps-item", theme) },
            (0, preact_1.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" },
                (0, preact_1.h)("span", null,
                    "Tap ",
                    (0, preact_1.h)("strong", null, "Scan"),
                    " "),
                (0, preact_1.h)("span", { class: (0, clsx_1.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
                    (0, preact_1.h)(QRCodeIcon_1.QRCodeIcon, { fill: makeIconColor(theme) }))))));
}
exports.CoinbaseWalletSteps = CoinbaseWalletSteps;
function CoinbaseAppSteps({ theme }) {
    return ((0, preact_1.h)("ol", { class: "-cbwsdk-wallet-steps" },
        (0, preact_1.h)("li", { class: (0, clsx_1.default)("-cbwsdk-wallet-steps-item", theme) },
            (0, preact_1.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase app")),
        (0, preact_1.h)("li", { class: (0, clsx_1.default)("-cbwsdk-wallet-steps-item", theme) },
            (0, preact_1.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" },
                (0, preact_1.h)("span", null,
                    "Tap ",
                    (0, preact_1.h)("strong", null, "More")),
                (0, preact_1.h)("span", { class: (0, clsx_1.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
                    (0, preact_1.h)(StatusDotIcon_1.StatusDotIcon, { fill: makeIconColor(theme) })),
                (0, preact_1.h)("span", { class: "-cbwsdk-wallet-steps-pad-left" },
                    "then ",
                    (0, preact_1.h)("strong", null, "Scan")),
                (0, preact_1.h)("span", { class: (0, clsx_1.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
                    (0, preact_1.h)(QRCodeIcon_1.QRCodeIcon, { fill: makeIconColor(theme) }))))));
}
exports.CoinbaseAppSteps = CoinbaseAppSteps;
