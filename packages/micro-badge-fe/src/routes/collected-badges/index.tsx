import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { LuChevronLeft, LuSearch, LuExternalLink } from '@qwikest/icons/lucide';

export default component$(() => {
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
				</div>
				{/* end navigation section */}

				{/* list of collected badges */}
				<div class="mt-7 mx-auto flex flex-row gap-x-28">
					<div class="flex flex-col w-sm bg-base-100 rounded-2xl p-4 relative">
						{/* open detail button */}
						<Link class="absolute top-2 right-2 bg-accent p-2 btn btn-circle border-0">
							<div style={{ fontSize: '20px', color: 'var(--color-base-100)' }}>
								<LuExternalLink />
							</div>
						</Link>
						{/* head */}
						<div class="flex flex-col w-full mt-3">
							<div class="w-[80%] self-center">
								<div class="responsive aspect-video bg-accent rounded-2xl"></div>
							</div>
							<h1 class="text-2xl text-center mt-4">Badge Name</h1>
						</div>
						{/* body */}
						<div class="flex flex-col gap-y-2 mt-4">
							<div class="flex flex-row gap-x-2">
								<h2>Issuer :</h2>
								<p>0x0921423152314cavsd4321</p>
							</div>
							<div class="flex flex-row gap-x-2">
								<h2>Owner :</h2>
								<p>0x0921423152314cavsd4321</p>
							</div>
							<div class="flex flex-row gap-x-2">
								<h2>Expiration Date :</h2>
								<p>02 May 2026</p>
							</div>
							<div class="flex flex-col gap-y-1">
								<h2>Description :</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
								</p>
							</div>
						</div>
					</div>

					<div class="flex flex-col">
						<div class="ml-auto">
							<label class="input w-sm">
								<div
									style={{ fontSize: '16px', color: 'var(--color-base-100)' }}
									class="bg-primary rounded-full p-1"
								>
									<LuSearch />
								</div>
								<input type="search" required placeholder="Search" />
							</label>
						</div>

						<div class="w-2xl bg-base-100 rounded-2xl max-h-130 relative mt-2">
							<div class="grid grid-cols-5 gap-6 max-w-full w-screen max-h-full p-8 pr-2 overflow-auto">
								{Array.from({ length: 20 }, (_, i) => `dummy ${i}`).map((i) => (
									<div key={i} class="w-25 h-25 bg-accent rounded-2xl"></div>
								))}
							</div>
						</div>
					</div>
				</div>
				{/* end list of collected badges */}
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
