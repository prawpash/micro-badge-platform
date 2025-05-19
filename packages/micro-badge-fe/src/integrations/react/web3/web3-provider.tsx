/** @jsxImportSource react */
import type { ReactNode } from 'react';
import { qwikify$ } from '@builder.io/qwik-react';
import { defaultConfig, darkTheme, XellarKitProvider } from '@xellar/kit';
import { type Config, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const xellarConfig = defaultConfig({
	appName: 'Micro Badge',
	walletConnectProjectId: import.meta.env.PUBLIC_WALLET_CONNECT_PROJECT_ID,
	xellarAppId: import.meta.env.PUBLIC_XELLAR_APP_ID,
	xellarEnv: import.meta.env.PUBLIC_XELLAR_ENV,
	ssr: true,
}) as Config;

const queryClient = new QueryClient();

function Web3Provider({ children }: { children?: ReactNode[] }) {
	return (
		<WagmiProvider config={xellarConfig}>
			<QueryClientProvider client={queryClient}>
				<XellarKitProvider theme={darkTheme}>{children}</XellarKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export const QWeb3Provider = qwikify$(Web3Provider, {
	eagerness: 'visible',
});
