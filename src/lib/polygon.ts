import { defineChain } from "thirdweb"

export default defineChain({
    id: 137,
    name: "Polygon",
    rpc: "https://polygon.llamarpc.com",
    nativeCurrency: {
        name: "Polygon",
        symbol: "POL",
        decimals: 18
    },
});
