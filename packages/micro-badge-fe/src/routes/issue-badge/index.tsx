import { $, component$, useSignal } from '@builder.io/qwik';
import { type DocumentHead, Link } from '@builder.io/qwik-city';
import { LuChevronLeft, LuPlusCircle } from '@qwikest/icons/lucide';
import { createPublicClient, createWalletClient, custom, http } from 'viem';
import BadgeSBT from '@contract/artifacts/contracts/BadgeSBT.sol/BadgeSBT.json';
import BadgeSBTData from '../../../../micro-badge-contract/ignition/deployments/chain-31337/deployed_addresses.json';
import { hardhat } from 'viem/chains';
import 'viem/window';

const contractAddress = BadgeSBTData['BadgeSBTModule#BadgeSBT'];

export default component$(() => {
	const isIssueBadgeLoading = useSignal(false);

	const issueBadge = $(async () => {
		try {
			if (!window.ethereum) {
				alert('Please install MetaMask!');
				return;
			}

			isIssueBadgeLoading.value = true;

			const publicClient = createPublicClient({
				chain: hardhat,
				transport: http(),
			});

			// const templatesCount = await publicClient.readContract({
			// 	address: `0x5fbdb2315678afecb367f032d93f642f64180aa3`,
			// 	abi: BadgeSBT.abi,
			// 	functionName: 'getTemplateCount',
			// });
			//
			// console.log(templatesCount);

			const walletClient = createWalletClient({
				chain: hardhat,
				transport: custom(window.ethereum),
			});

			const [account] = await walletClient.getAddresses();

			const { request } = await publicClient.simulateContract({
				account,
				// @ts-ignore
				address: contractAddress,
				abi: BadgeSBT.abi,
				functionName: 'createBadge',
				args: ['https://viem.sh/docs/ethers-migration#call'],
			});

			const txHash = await walletClient.writeContract(request);

			console.log(`Transaction sent: ${txHash}`);

			await publicClient.waitForTransactionReceipt({ hash: txHash });
		} catch (error) {
			alert(`Error: ${error instanceof Error ? error.message : String(error)}`);
		} finally {
			isIssueBadgeLoading.value = false;
		}
	});

	return (
		<>
			{/* body */}
			<div class="flex-1 flex flex-col">
				{/* navigation section */}
				<div class="flex px-4 mt-5">
					<Link
						href="/"
						class="btn btn-primary btn-circle p-2 w-auto h-auto border-0"
					>
						<div style={{ color: 'var(--color-base-100)', fontSize: '40px' }}>
							<LuChevronLeft />
						</div>
					</Link>

					<Link
						href="/issued-badges"
						class="btn bg-base-100 ml-auto rounded-3xl text-xl font-normal py-4.5 px-10.5"
					>
						Issued Badges
					</Link>
				</div>
				{/* end navigation section */}

				{/* form section */}
				<div class="mt-7 w-[1270px] mx-auto flex flex-col gap-y-13">
					<div class="flex flex-row gap-x-13">
						<label class="flex flex-col justify-center items-center w-md h-130 bg-base-100 rounded-2xl btn">
							<div style={{ fontSize: '56px', color: 'var(--color-base-100)' }}>
								<LuPlusCircle style={{ fill: 'var(--color-primary)' }} />
							</div>

							<input type="file" class="hidden" accept="image/*" />
						</label>

						<div class="flex-1 flex flex-col gap-y-5 justify-center">
							<div class="flex flex-col gap-y-2.5">
								<label for="name-field" class="text-2xl">
									Name
								</label>
								<input
									id="name-field"
									name="name"
									class="input w-full h-12 rounded-3xl px-4 text-lg"
									placeholder="Meme Holder"
								/>
							</div>
							<div class="flex flex-col gap-y-2.5">
								<label for="description-field" class="text-2xl">
									Description
								</label>
								<textarea
									id="description-field"
									name="description"
									class="textarea w-full rounded-3xl px-4 text-lg"
									placeholder="Bio"
								></textarea>
							</div>
							<div class="flex flex-col gap-y-2.5">
								<label for="name-field" class="text-2xl">
									Expiration After Claim
								</label>
								<label class="input w-full h-12 rounded-3xl px-4">
									<input
										name="name"
										class="grow text-lg"
										placeholder="1 Year 2 months"
									/>
									<span class="badge badge-neutral text-base">Optional</span>
								</label>
							</div>
						</div>
					</div>

					<div class="flex justify-center">
						<button
							onClick$={issueBadge}
							class="btn bg-base-100 w-2xl h-13 mx-auto rounded-3xl"
							disabled={isIssueBadgeLoading.value}
						>
							{isIssueBadgeLoading.value ? (
								<span class="loading loading-spinner loading-lg"></span>
							) : (
								'Issue a Badge'
							)}
						</button>
					</div>
				</div>
				{/* end form section */}
			</div>

			{/* end body */}
		</>
	);
});

export const head: DocumentHead = {
	title: 'Issue a Badge',
	meta: [
		{
			name: 'Page for issuing a badge',
			content:
				'Application for issuing and claiming badges in decentralized way',
		},
	],
};
