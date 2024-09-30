import { prepareContractCall } from "thirdweb";
import { tokens } from "@/constants";
import getContract from "@/lib/get-contract";

type WrapOptions = {
	amount: bigint;
}

const WAVAX_CONTRACT = getContract({
	address: tokens['wavax'].address
});

export default function wrap(options: WrapOptions) {
	return prepareContractCall({
		contract: WAVAX_CONTRACT,
		method: "function deposit()",
		params: [],
		value: options.amount
	});
}

