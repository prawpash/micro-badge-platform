import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { LuChevronLeft, LuSearch, LuShare2 } from '@qwikest/icons/lucide';

export default component$(() => {
	return (
		<>
			{/* body */}
			<div class="flex-1 flex flex-col">
				{/* navigation section */}
				<div class="flex px-4 mt-5">
					<Link
						href="/issue-badge"
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
					<div class="flex flex-col">
						<div>
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

						<div class="flex w-2xl bg-base-100 rounded-2xl max-h-130 relative mt-2">
							<div class="max-w-full w-screen h-full max-h-full overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
								<table class="table">
									{/* <!-- head --> */}
									<thead>
										<tr>
											<th>#</th>
											<th>Name</th>
											<th>Issued Date</th>
											<th>Alias Code</th>
										</tr>
									</thead>
									<tbody>
										{/* <!-- row 1 --> */}
										<tr>
											<th>1</th>
											<td>Spark</td>
											<td>1 May 2022</td>
											<td>12FDSA2</td>
										</tr>
										{/* <!-- row 2 --> */}
										<tr>
											<th>2</th>
											<td>Kayak Competition</td>
											<td>1 May 2022</td>
											<td>12FDSA2</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div class="flex flex-col w-sm bg-base-100 rounded-2xl p-4 relative">
						{/* open detail button */}
						<a
							target="_blank"
							class="absolute top-2 right-2 bg-accent p-2 btn btn-circle border-0"
						>
							<div style={{ fontSize: '20px', color: 'var(--color-base-100)' }}>
								<LuShare2 />
							</div>
						</a>
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
								<h2>Expiration After Claim :</h2>
								<p>1 Year 2 Months</p>
							</div>
							<div class="flex flex-row gap-x-2">
								<h2>Alias Code :</h2>
								<p>12FDSA2</p>
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
				</div>
				{/* end list of collected badges */}
			</div>

			{/* end body */}
		</>
	);
});

export const head: DocumentHead = {
	title: 'Issued a Badges',
	meta: [
		{
			name: 'List of issued badges',
			content:
				'Application for issuing and claiming badges in decentralized way',
		},
	],
};
