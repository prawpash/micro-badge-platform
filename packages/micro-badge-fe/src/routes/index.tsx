import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { QWeb3Provider } from '~/integrations/react/web3-provider';

export default component$(() => {
	return (
		<div class="w-screen h-screen flex flex-col items-center justify-center">
			<div class="join">
				<button class="btn join-item w-50 h-50">Issue Badge</button>
				<button class="btn join-item w-50 h-50">Claim Badge</button>
			</div>
			<div>
				<QWeb3Provider></QWeb3Provider>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
};
