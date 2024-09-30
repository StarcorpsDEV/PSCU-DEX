import { Address, getContract as thirdwebGetContract, Chain } from "thirdweb";
import client from "@/lib/thirdweb-client";
import avalanche from "@/lib/avalanche";

type GetContractOptions = {
    address: Address;
    chain?: Chain
}

export default function getContract(options: GetContractOptions) {
    return thirdwebGetContract({
        client,
        chain: options.chain ?? avalanche,
        address: options.address
    });
}

