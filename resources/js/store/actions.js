import axios from "axios";

const actions = {
	saveEmployee({ commit }, payload) {
		commit("displayLoader", "Saving Employee");

		axios
			.post("/employees", payload.form)
			.then((res) => {
				ElNotification({
					title: "Success",
					message: "Employee add successfully",
					type: "success",
				});

				commit("removeLoader");

				setTimeout(() => {
					window.location.href = "/employees";
				}, 2000);
			})
			.catch((err) => {});
	},
	updateEmployee({ commit }, payload) {
		commit("displayLoader", "Updating Employee");

		axios
			.put(`/employees/${payload.id}`, payload.form)
			.then((res) => {
				ElNotification({
					title: "Success",
					message: "Employee updated successfully",
					type: "success",
				});

				commit("removeLoader");

				setTimeout(() => {
					window.location.href = "/employees";
				}, 2000);
			})
			.catch((err) => {});
	},
	deleteEmployee({ commit }, payload) {
		commit("displayLoader", "Deleting Employee");

		axios
			.delete(`/employees/${payload.id}`)
			.then((res) => {
				ElNotification({
					title: "Success",
					message: "Employee deleted successfully",
					type: "success",
				});

				commit("removeLoader");
			})
			.catch((err) => {});
	},
	getEmployees({ commit }) {
		commit("displayLoader", "Fetching Employees");

		axios
			.get("/api/employees")
			.then((res) => {
				commit("setEmployees", res.data.data);

				commit("removeLoader");
			})
			.catch((err) => {});
	},
};

export default actions;
