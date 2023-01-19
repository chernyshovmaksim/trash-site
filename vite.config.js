import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		devSourcemap: true,
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "partials"),
		}),
	],
});
