import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { LuBadgeCheck } from '@qwikest/icons/lucide';
// import { QWeb3Provider } from '~/integrations/react/web3-provider';

// export default component$(() => {
// 	return (
// 		<div class="w-screen h-screen flex flex-col items-center justify-center">
// 			<div class="join">
// 				<button class="btn join-item w-50 h-50">Issue Badge</button>
// 				<button class="btn join-item w-50 h-50">Claim Badge</button>
// 			</div>
// 			<div>
// 				<QWeb3Provider></QWeb3Provider>
// 			</div>
// 		</div>
// 	);
// });
export default component$(() => {
	return (
		<>
			{/* body */}
			<div class="flex-1 flex flex-col items-center justify-center">
				<div class="flex flex-col gap-y-12">
					{/* issue and claim badge */}
					<div class="flex flex-row gap-x-25">
						{/* issue a badge	 */}
						<Link
							href="/issue-badge"
							class="btn btn-ghost h-auto w-auto p-0 m-0 hover:bg-transparent hover:border-transparent"
						>
							<div
								class="card bg-base-100 w-2xs shadow-sm aspect-square"
								style={{ boxShadow: '10px 20px 0px 0px #181F2A;' }}
							>
								<div class="card-body flex flex-col items-center justify-center">
									<div class="flex flex-col items-center gap-y-2">
										<div
											style={{
												fontSize: '70px',
												color: 'var(--color-primary)',
											}}
										>
											<LuBadgeCheck
												style={{
													fill: 'var(--color-primary)',
													stroke: 'var(--color-base-100)',
													strokeWidth: '1px',
												}}
											/>
										</div>
										<h1 class="text-4xl font-semibold">Issue a Badge</h1>
									</div>
								</div>
							</div>
						</Link>

						{/* create a badge	 */}
						<Link
							href="/claim-badge"
							class="btn btn-ghost h-auto w-auto p-0 m-0 hover:bg-transparent hover:border-transparent"
						>
							<div
								class="card bg-base-100 w-2xs shadow-sm aspect-square"
								style={{ boxShadow: '10px 20px 0px 0px #181F2A;' }}
							>
								<div class="card-body flex flex-col items-center justify-center">
									<div class="flex flex-col items-center gap-y-2">
										<div
											style={{
												fontSize: '70px',
												color: 'var(--color-primary)',
											}}
										>
											<LuBadgeCheck
												style={{
													fill: 'var(--color-primary)',
													stroke: 'var(--color-base-100)',
													strokeWidth: '1px',
												}}
											/>
										</div>
										<h1 class="text-4xl font-semibold">Claim a Badge</h1>
									</div>
								</div>
							</div>
						</Link>
					</div>
					{/* end issue and claim badge */}

					{/* my badges	 */}
					<div>
						<a class="btn btn-ghost h-auto w-full p-0 m-0 hover:bg-transparent hover:border-transparent">
							<div
								class="card bg-base-100 w-full shadow-sm aspect-3/1"
								style={{ boxShadow: '10px 20px 0px 0px #181F2A;' }}
							>
								<div class="card-body flex flex-col items-center justify-center">
									<div class="flex flex-col items-center gap-y-2">
										<div
											style={{
												fontSize: '70px',
												color: 'var(--color-primary)',
											}}
										>
											<LuBadgeCheck
												style={{
													fill: 'var(--color-primary)',
													stroke: 'var(--color-base-100)',
													strokeWidth: '1px',
												}}
											/>
										</div>
										<h1 class="text-4xl font-semibold">Issue a Badge</h1>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/* end my badges	 */}
				</div>
			</div>
			{/* end body */}
		</>
	);
});

export const head: DocumentHead = {
	title: 'Home',
	meta: [
		{
			name: 'Home page for micro badge application',
			content:
				'Application for issuing and claiming badges in decentralized way',
		},
	],
};
