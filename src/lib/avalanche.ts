import { defineChain } from "thirdweb"

export default defineChain({
    id: 43114,
    name: "Avalanche",
    rpc: "https://api.avax.network/ext/bc/C/rpc",
    nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18
    },
});
