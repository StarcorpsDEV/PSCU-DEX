import { prepareContractCall } from "thirdweb";
import { tokens } from "@/constants";
import getContract from "@/lib/get-contract";

type WrapOptions = {
	amount: bigint;
}

const WMATIC_CONTRACT = getContract({
	address: tokens['wmatic'].address
});

export default function wrap(options: WrapOptions) {
	return prepareContractCall({
		contract: WMATIC_CONTRACT,
		method: "function deposit()",
		params: [],
		value: options.amount
	});
}

