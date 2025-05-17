// This file can be used to add references for global types like `vite/client`.

// Add global `vite/client` types. For more info, see: https://vitejs.dev/guide/features#client-types
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PUBLIC_XELLAR_ENV: 'sandbox' | 'production';
	readonly PUBLIC_WALLET_CONNECT_PROJECT_ID: string;
	readonly PUBLIC_XELLAR_APP_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
