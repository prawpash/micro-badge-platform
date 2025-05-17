import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import {
	LuChevronLeft,
	LuPlusCircle,
	LuBadgeHelp,
} from '@qwikest/icons/lucide';

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

				{/* form section */}
				<div class="mt-7 mx-auto flex flex-col gap-y-13">
					<div class="flex flex-row gap-x-13">
						<div class="flex flex-col gap-y-5 justify-center w-lg">
							<input
								id="name-field"
								name="name"
								class="input w-full h-12 rounded-3xl px-4 text-lg text-center"
								placeholder="Input Badge Code"
								autocomplete="off"
							/>
							<button class="btn bg-base-100 w-full h-13 mx-auto rounded-3xl">
								Search / Claim
							</button>
						</div>

						<div class="flex flex-col justify-center items-center w-2xl h-130 bg-base-100 rounded-2xl">
							<div style={{ fontSize: '56px', color: 'var(--color-base-100)' }}>
								<LuBadgeHelp style={{ fill: 'var(--color-primary)' }} />
							</div>

							<input type="file" class="hidden" accept="image/*" />
						</div>
					</div>
				</div>
				{/* end form section */}
			</div>

			{/* end body */}
		</>
	);
});

export const head: DocumentHead = {
	title: 'Claim a Badge',
	meta: [
		{
			name: 'Page for claiming a badge',
			content:
				'Application for issuing and claiming badges in decentralized way',
		},
	],
};
