import { DisplayChoice } from "../interfaces";

// Blockchain choices

export const ETH = "ETH";
export const SOL = "SOL";
export const STARKEX = "STARKEX";
export const STARKNET = "STARKNET";
export const MATIC = "MATIC";
export const BNB = "BNB";
export const AVAX = "AVAX";
export const ARB = "ARB";
export const OP = "OP";
export const CRO = "CRO";
export const ONE = "ONE";
export const CELO = "CELO";
export const GLMR = "GLMR";
export const MOVR = "MOVR";
export const KLAY = "KLAY";
export const TEZOS = "TEZOS";

export enum EVM {
  "ETH",
  "MATIC",
  "BNB",
  "AVAX",
  "ARB",
  "OP",
  "CRO",
  "ONE",
  "CELO",
  "GLMR",
  "MOVR",
  "KLAY",
}

export enum OTHER_CHAINS {
  "STARKEX",
  "STARKNET",
  "TEZOS",
}

export const CHAINS_HTML: DisplayChoice[] = [
  { key: ETH, displayName: "Ethereum" },
  { key: SOL, displayName: "Solana" },
  { key: MATIC, displayName: "Polygon" },
  { key: BNB, displayName: "BNB Chain" },
  { key: AVAX, displayName: "Avalanche" },
  { key: ARB, displayName: "Arbitrum" },
  { key: OP, displayName: "Optimism" },
  { key: CRO, displayName: "Cronos" },
  { key: ONE, displayName: "Harmony" },
  { key: CELO, displayName: "Celo" },
  { key: GLMR, displayName: "Moonbeam" },
  { key: MOVR, displayName: "Moonriver" },
  { key: KLAY, displayName: "Klaytn" },
];

export const CHAINS: DisplayChoice[] = [
  ...CHAINS_HTML,
  { key: STARKEX, displayName: "StarkEx" },
  { key: STARKNET, displayName: "StarkNet" },
  { key: TEZOS, displayName: "Tezos" },
];

export const WEB3 = "WEB3";
export const ETHERS = "ETHERS";

export const EVM_FRAMEWORK: DisplayChoice[] = [
  { key: WEB3, displayName: "web3.js" },
  { key: ETHERS, displayName: "ethers" },
];

// Platform choices

export const REACT = "REACT";
export const NEXT = "NEXT";
export const VUE = "VUE";
export const ANGULAR = "ANGULAR";
export const HTML = "HTML";
export const ANDROID = "ANDROID";
export const IOS = "IOS";
export const REACT_NATIVE = "REACT_NATIVE";
export const FLUTTER = "FLUTTER";
export const UNITY = "UNITY";

export const LANGS: DisplayChoice[] = [
  { key: REACT, displayName: "React" },
  { key: NEXT, displayName: "Next JS" },
  { key: VUE, displayName: "Vue" },
  { key: ANGULAR, displayName: "Angular" },
  { key: HTML, displayName: "HTML/JS" },
  { key: ANDROID, displayName: "Android" },
  { key: IOS, displayName: "iOS/Swift" },
  { key: REACT_NATIVE, displayName: "React Native" },
  { key: FLUTTER, displayName: "Flutter" },
  { key: UNITY, displayName: "Unity" },
];

export enum MOBILE {
  "ANDROID",
  "IOS",
  "REACT_NATIVE",
  "FLUTTER",
  "UNITY",
}

export const EXPO = "EXPO";
export const BARE_RN = "BARE_RN";

export const RN_MODE: DisplayChoice[] = [
  { key: "EXPO", displayName: "Expo Managed" },
  { key: "BARE_RN", displayName: "Bare React Native" },
];
];

export const TOGGLE: DisplayChoice[] = [
  { key: "no", displayName: "No" },
  { key: "yes", displayName: "Yes" },
];


export const RN_MODE: DisplayChoice[] = [
  { key: "expo", displayName: "Expo" },
  { key: "bare", displayName: "Bare React Native" },
];

export enum MOBILE {
  "android",
  "ios",
  "react-native",
  "flutter",
  "unity",
}
