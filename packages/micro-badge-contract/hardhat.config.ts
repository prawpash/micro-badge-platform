import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
require("dotenv").config();

const config: HardhatUserConfig = {
	defaultNetwork: "hardhat",
	solidity: "0.8.28",
	paths: {
		sources: "./contracts",
		tests: "./test",
		cache: "./cache/",
		artifacts: "./artifacts/",
	},
	networks: {
		localhost: {
			url: "http://127.0.0.1:8545",
		},
		hardhat: {},
		liskSepolia: {
			url: "https://rpc.sepolia-api.lisk.com",
			accounts: [process.env.REAL_PERSONAL_WALLET_KEY as string],
			gasPrice: 1000000000,
		},
	},
	etherscan: {
		// Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
		apiKey: {
			"lisk-sepolia": "123",
		},
		customChains: [
			{
				network: "lisk-sepolia",
				chainId: 4202,
				urls: {
					apiURL: "https://sepolia-blockscout.lisk.com/api",
					browserURL: "https://sepolia-blockscout.lisk.com",
				},
			},
		],
	},
	sourcify: {
		enabled: false,
	},
};

export default config;
