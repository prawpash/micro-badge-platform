import { component$ } from '@builder.io/qwik';
import { QWeb3ConnectButton } from '~/integrations/react/web3/connect-button';

export default component$(() => {
	return (
		<>
			{/* navbar */}
			<div class="navbar bg-base-100 px-4">
				<div class="flex-1">
					<a class="btn btn-ghost text-xl">daisyUI</a>
				</div>
				<div>
					<QWeb3ConnectButton />
					{/* <button class="btn btn-primary gap-x-4"> */}
					{/* 	<div class="avatar"> */}
					{/* 		<div class="w-8 rounded-full"> */}
					{/* 			<img */}
					{/* 				alt="Tailwind CSS Navbar component" */}
					{/* 				src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" */}
					{/* 			/> */}
					{/* 		</div> */}
					{/* 	</div> */}
					{/**/}
					{/* 	<span>Connect</span> */}
					{/* </button> */}
				</div>
			</div>
			{/* end navbar */}
		</>
	);
});
