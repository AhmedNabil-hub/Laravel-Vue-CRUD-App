import axios from "axios";

const actions = {
	saveEmployee({ commit }, payload) {
		commit('displayLoader');

		axios
			.post("/employees", payload)
			.then((res) => {
				ElNotification({
					title: "Success",
					message: "Employee add successfully",
					type: "success",
				});

				commit('removeLoader');

				setTimeout(() => {
					window.location.href = "/employees";
				}, 2000);
			})
			.catch((err) => {});
	},
	getEmployees({commit}) {
		commit("displayLoader");

		axios
			.get("/api/employees")
			.then((res) => {
				commit('setEmployees', res.data.data);

				commit('removeLoader');
			})
			.catch((err) => {});
	}
};

export default actions;
