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
				</div>
				{/* end navigation section */}

				{/* form section */}
				<div class="mt-7 mx-auto flex flex-row gap-x-28">
					<div class="flex flex-col justify-center items-center w-sm bg-base-100 rounded-2xl">
						<div style={{ fontSize: '56px', color: 'var(--color-base-100)' }}>
							<LuPlusCircle style={{ fill: 'var(--color-primary)' }} />
						</div>
					</div>

					<div class="w-2xl bg-base-100 rounded-2xl max-h-130 relative">
						<div class="grid grid-cols-5 gap-6 max-w-full w-screen max-h-full p-8 pr-2 overflow-auto">
							{Array.from({ length: 20 }, (_, i) => `dummy ${i}`).map((i) => (
								<div key={i} class="w-25 h-25 bg-accent rounded-2xl"></div>
							))}
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
	title: 'Issue a Badge',
	meta: [
		{
			name: 'Page for issuing a badge',
			content:
				'Application for issuing and claiming badges in decentralized way',
		},
	],
};
