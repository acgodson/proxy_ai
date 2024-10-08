import { ChainId } from "@certusone/wormhole-sdk";

export interface ChainInfo {
  description: string;
  chainId: number;
  rpc: string;
  tokenBridge: string;
  wormholeRelayer: string;
  wormhole: string;
  explorer: string;
}

export interface Config {
  chains: Record<number, ChainInfo>;
  sourceChain: ChainId;
  targetChain: ChainId;
}

export const config: Config = {
  chains: {
    6: {
      description: "Avalanche testnet fuji",
      chainId: 6,
      rpc: "https://api.avax-test.network/ext/bc/C/rpc",
      tokenBridge: "0x61E44E506Ca5659E6c0bba9b678586fA2d729756",
      wormholeRelayer: "0xA3cF45939bD6260bcFe3D66bc73d60f19e49a8BB",
      wormhole: "0x7bbcE28e64B3F8b84d876Ab298393c38ad7aac4C",
      explorer: "https://testnet.snowtrace.io",
    },
    4: {
      description: "BSC Testnet",
      chainId: 4,
      rpc: "https://bsc-testnet.public.blastapi.io",
      tokenBridge: "0x9dcF9D205C9De35334D646BeE44b2D2859712A09",
      wormholeRelayer: "0x80aC94316391752A193C1c47E27D382b507c93F3",
      wormhole: "0x68605AD7b15c732a30b1BbC62BE8F2A509D74b4D",
      explorer: "https://testnet.bscscan.com",
    },
    14: {
      description: "Celo Testnet",
      chainId: 14,
      rpc: "https://alfajores-forno.celo-testnet.org",
      tokenBridge: "0x05ca6037eC51F8b712eD2E6Fa72219FEaE74E153",
      wormholeRelayer: "0x306B68267Deb7c5DfCDa3619E22E9Ca39C374f84",
      wormhole: "0x88505117CA88e7dd2eC6EA1E13f0948db2D50D56",
      explorer: "https://alfajores.celoscan.io/",
    },
  },
  sourceChain: 6 as ChainId,
  targetChain: 14 as ChainId,
};

export default config;
