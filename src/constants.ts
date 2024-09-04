import getContract from "./lib/get-contract";
import Token from "./types/token";

export const tokens: { [id: string]: Token } = {
  "wmatic":{
    "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    "symbol": "wMATIC",
    "decimals": 18,
    "image": "/native-token-icons/matic.png"
  },
  "weth":{
    "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    "symbol": "wETH",
    "decimals": 18,
    "image": "/native-token-icons/eth.png"
  },
  "usdc":{
    "address": "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    "symbol": "USDC",
    "decimals": 6,
    "image": "/erc20-icons/usdc.png"
  },
  "dmf":{
    "address": "0xd5bd4BeEf25b5952a1462e92C73CF8dc5870D683",
    "symbol": "DMF",
    "decimals": 18,
    "image": "/erc20-icons/dmf.png"
  },
  "rpf":{
    "address": "0x6238F788a7291f5D1b4786F7CE0835468cd84fBa",
    "symbol": "RPF",
    "decimals": 18,
    "image": "/erc20-icons/rpf.png"
  },
  "rgf":{
    "address": "0x645Cb7A052b178cbB4eDCF9bc4A28F9Fcc67b5A7",
    "symbol": "RGF",
    "decimals": 18,
    "image": "/erc20-icons/rgf.png"
  },
  "rbf":{
    "address": "0x512037B66BacD1b020AA439e159934095Df8A2C8",
    "symbol": "RBF",
    "decimals": 18,
    "image": "/erc20-icons/rbf.png"
  },
  "rrf":{
    "address": "0x7F8A9B97d252E76919eb70fe48cE78835af7a6D9",
    "symbol": "RRF",
    "decimals": 18,
    "image": "/erc20-icons/rrf.png"
  },
    "smf":{
    "address": "0xBfC68ed382e12B81bd8a3517c4FD3Cf76Cf853f9",
    "symbol": "SMF",
    "decimals": 18,
    "image": "/erc20-icons/smf.png"
  }
}

export const tokensStable: { [id: string]: Token } = {
  "usdc":{
    "address": "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    "symbol": "USDC",
    "decimals": 6,
    "image": "/erc20-icons/usdc.png"
  },
  "usdt":{
    "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    "symbol": "USDT",
    "decimals": 6,
    "image": "/erc20-icons/usdt.png"
  },
  "dai":{
    "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    "symbol": "DAI",
    "decimals": 18,
    "image": "/erc20-icons/dai.png"
  }
}

export const ROUTER = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
export const FACTORY = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const QUOTER = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"

export const ROUTER_CONTRACT = getContract({ address: ROUTER });
export const FACTORY_CONTRACT = getContract({ address: FACTORY });
export const QUOTER_CONTRACT = getContract({ address: QUOTER });
