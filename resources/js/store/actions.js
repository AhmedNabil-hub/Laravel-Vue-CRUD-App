import axios from "axios";

let loader = null;

function displayLoader(loadingText = "Loading...") {
	loader = ElLoading.service({
		lock: true,
		text: loadingText,
		background: "rgba(0, 0, 0, 0.7)",
	});
}

function removeLoader() {
	loader.close();
}

const actions = {
	saveEmployee({ commit }, payload) {
		displayLoader();

		axios
			.post("/employees", payload)
			.then((res) => {
				ElNotification({
					title: "Success",
					message: "Employee add successfully",
					type: "success",
				});

				removeLoader();

				setTimeout(() => {
					window.location.href = "/employees";
				}, 2000);
			})
			.catch((err) => {});
	},
};

export default actions;
