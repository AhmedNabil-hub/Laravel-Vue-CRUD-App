import "./bootstrap";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import store from "./store";

const app = createApp({});

app.use(ElementPlus);

app.use(store);

import ExampleComponent from "./components/ExampleComponent.vue";
app.component("example-component", ExampleComponent);

Object.entries(import.meta.glob("./**/*.vue", { eager: true })).forEach(
	([path, definition]) => {
		app.component(
			path
				.split("/")
				.pop()
				.replace(/\.\w+$/, ""),
			definition.default
		);
	}
);

app.mount("#app");
