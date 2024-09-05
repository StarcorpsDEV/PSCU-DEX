import { prepareContractCall } from "thirdweb";
import { tokens } from "@/constants";
import getContract from "@/lib/get-contract";

type WrapOptions = {
	amount: bigint;
}

const WPOL_CONTRACT = getContract({
	address: tokens['wpol'].address
});

export default function wrap(options: WrapOptions) {
	return prepareContractCall({
		contract: WPOL_CONTRACT,
		method: "function deposit()",
		params: [],
		value: options.amount
	});
}

