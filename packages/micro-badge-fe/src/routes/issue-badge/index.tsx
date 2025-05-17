import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { LuChevronLeft, LuPlusCircle } from '@qwikest/icons/lucide';

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
						<button class="btn bg-base-100 w-2xl h-13 mx-auto rounded-3xl">
							Upload
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
