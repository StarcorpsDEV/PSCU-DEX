import getContract from "./lib/get-contract";
import Token from "./types/token";

export const tokens: { [id: string]: Token } = {
  "wavax":{
    "address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    "symbol": "wAVAX",
    "decimals": 18,
    "image": "/erc20-icons/wavax.png"
  },
  "usdc":{
    "address": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    "symbol": "USDC",
    "decimals": 6,
    "image": "/erc20-icons/usdc.png"
  },
  "ufcc":{
    "address": "0x952564F369F6cB1BFb26088741cFCB29Fdfaa1CF",
    "symbol": "UFCC",
    "decimals": 18,
    "image": "/erc20-icons/ufcc.png"
  },
    "ufcplsr":{
    "address": "0x7A6bF020161dEab23913ccFa5bE43aD37AEB6CA8",
    "symbol": "UFCPLSR",
    "decimals": 18,
    "image": "/erc20-icons/ufcplsr.png"
  }, "dai":{
    "address": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    "symbol": "DAI",
    "decimals": 18,
    "image": "/erc20-icons/dai.png"
  }
}

export const tokensStable: { [id: string]: Token } = {
  "usdc":{
    "address": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    "symbol": "USDC",
    "decimals": 6,
    "image": "/erc20-icons/usdc.png"
  },
  "usdt":{
    "address": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    "symbol": "USDT",
    "decimals": 6,
    "image": "/erc20-icons/usdt.png"
  },
  "dai":{
    "address": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    "symbol": "DAI",
    "decimals": 18,
    "image": "/erc20-icons/dai.png"
  }
}

export const ROUTER = "0x4Dae2f939ACf50408e13d58534Ff8c2776d45265";
export const FACTORY = "0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD";
export const QUOTER = "0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F"

export const ROUTER_CONTRACT = getContract({ address: ROUTER });
export const FACTORY_CONTRACT = getContract({ address: FACTORY });
export const QUOTER_CONTRACT = getContract({ address: QUOTER });
