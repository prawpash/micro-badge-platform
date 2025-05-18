import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import "@nomicfoundation/hardhat-ignition-viem";

const BadgeSBTModule = buildModule("BadgeSBTModule", (m) => {
	const initialOwner = m.getAccount(0);

	const badgeSBT = m.contract("BadgeSBT", [
		"Micro Badge Chain",
		"MBC",
		initialOwner,
	]);

	return { badgeSBT };
});

export default BadgeSBTModule;
