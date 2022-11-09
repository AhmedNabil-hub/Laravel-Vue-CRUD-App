const mutations = {
	displayLoader(state, loadingText = "Loading...") {
		state.loader = ElLoading.service({
			lock: true,
			text: loadingText,
			background: "rgba(0, 0, 0, 0.7)",
		});
	},
	removeLoader(state) {
		state.loader.close();
	},
	setEmployees(state, data) {
		state.employees = data;
	},
};

export default mutations;
