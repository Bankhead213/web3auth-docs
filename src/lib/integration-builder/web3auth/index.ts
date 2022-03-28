import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const AVAILABLE_EXAMPLES = {
  Ethereum: {
    langs: ["HTML", "Android", "iOS"],
  },
  Solana: {
    langs: ["React"],
  },
  Polygon: {
    langs: ["React"],
  },
  "Binance Smart Chain": {
    langs: ["React"],
  },
  Avalanche: {
    langs: ["React"],
  },
  ZkSync: {
    langs: ["React"],
  },
  Arbitrum: {
    langs: ["React"],
  },
};

const AVAILABLE_LANGS = {
  React: {
    examples: ["Solana", "Polygon", "Binance Smart Chain", "Avalanche", "ZkSync", "Arbitrum"],
  },
  HTML: {
    examples: ["Ethereum"],
  },
  Android: {
    examples: ["Ethereum"],
  },
  iOS: {
    examples: ["Ethereum"],
  },
};

function replaceFileVariable(fileContent: string, variableName: string, replacement: string) {
  var exp = `\n *// REPLACE-${variableName}-\n *`;
  var re = new RegExp(exp, "gm");
  return fileContent.replace(re, replacement);
}

const web3authIntegrationBuilder: IntegrationBuilder = {
  // Name of the integration builder
  displayName: "Web3Auth",

  // Options that will be displayed in the UI for selection
  options: {
    lang: {
      displayName: "Language/Framework",
      default: "HTML",
      choices: ["HTML", "React", "Android", "iOS"],
    },
    chain: {
      displayName: "Blockchain",
      default: "Ethereum",
      choices: ["Ethereum", "Solana", "Polygon", "Binance Smart Chain", "Avalanche", "ZkSync", "Arbitrum"],
    },
    customAuth: {
      displayName: "Custom Auth",
      default: "off",
      choices: ["on", "off"],
    },
    customLogin: {
      displayName: "Custom Login UI",
      default: "off",
      choices: ["on", "off"],
    },
    whitelabel: {
      displayName: "Whitelabel",
      default: "off",
      choices: ["on", "off"],
    },
  },

  // Return available options when user selects a value,
  // .e.g there're integrations with Conflux for React and Vue, but not for Android
  getAvailableOptions(optionKey, optionValue) {
    // console.log("options", optionKey, optionValue);
    const availableOptions: Record<string, string>[] = [];
    const availableLangExamples = AVAILABLE_LANGS[optionValue]?.examples;
    const availableChainLangs = AVAILABLE_EXAMPLES[optionValue]?.langs;
    switch (optionKey) {
      case "chain":
        for (let i = 0; i < availableChainLangs.length; i += 1) {
          const lang = availableChainLangs[i];
          availableOptions.push({ lang });
        }
        break;
      case "lang":
        for (let i = 0; i < availableLangExamples.length; i += 1) {
          const example = availableLangExamples[i];
          availableOptions.push({ chain: example });
        }
        break;
      default:
        throw new Error(`Unknown option key ${JSON.stringify(optionKey)}`);
    }
    return availableOptions;
  },

  // Build integrations based on input values
  build(values: Record<string, string>, files: Record<string, string>) {
    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];
    const { chain, lang, whitelabel } = values;

    switch (lang) {
      case "HTML":
        // STEMP 1 OF BUILDING A GUIDE
        // template filenames that your integration page will use
        filenames.push("web/index.html"); // Show code files in browsers

        // STEP 2 variable replacements come here
        // TEMPLATE ON YOUR STATIC FILE IS /\/\/ REPLACE-.*-/g
        // OR // REPLACE-yourVariableHere-
        // tip: need to restart docusaurus for changes to static file uploads
        switch (whitelabel) {
          default:
            newFiles["web3auth/web/index.html"] = replaceFileVariable(
              newFiles["web3auth/web/index.html"],
              "web3authConstructor",
              `{
              chainConfig: { chainNamespace: "eip155" },
              clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://developer.web3auth.io
            }`
            );
        }

        // STEP 3
        // Add markdown steps
        steps.push(
          {
            ...STEPS.installSDK,
            pointer: { filename: "web/index.html", range: "20" },
          },
          {
            ...STEPS.registerApp,
            pointer: { filename: "web/index.html", range: "27-31" },
          },
          {
            ...STEPS.instantiateSDK,
            pointer: { filename: "web/index.html", range: "27-31" },
          },
          {
            ...STEPS.retrievePrivateKey,
            pointer: { filename: "web/index.html", range: "33-43" },
          },
          {
            ...STEPS.triggerLogin,
            pointer: { filename: "web/index.html", range: "55-56" },
          },
          {
            ...STEPS.connectWithWeb3,
            pointer: { filename: "web/index.html", range: "46-52" },
          },
          {
            ...STEPS.logout,
            pointer: { filename: "web/index.html", range: "59" },
          }
        );
      default:
    }

    // STEP 4
    // Add blockchain steps and files here. After integration steps have been settled
    switch (chain) {
      default:
    }

    return {
      // Use files in `open-login` folders instead of root folder
      filenames: filenames.map((it) => `web3auth/${it}`),
      files: newFiles,
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer ? { ...it.pointer, filename: `web3auth/${it.pointer.filename}` } : undefined,
      })),
    };
  },
};

export default web3authIntegrationBuilder;