<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-8">
				<el-card class="box-card w-100">
					<template #header>
						<el-page-header @back="goBack">
							<template #content>
								<span class="text-large font-600 mr-3">{{
									`${props.scope} form`
								}}</span>
							</template>
						</el-page-header>
					</template>
					<div>
						<el-form ref="employeeForm" :model="form" label-width="120px">
							<el-row :gutter="10">
								<el-form-item label="Name" required prop="name">
									<el-input
										:readonly="props.scope == 'show'"
										v-model="form.name"
										aria-placeholder="Employee Name"
									/>
								</el-form-item>
								<el-form-item label="Department" required prop="department">
									<el-input
										:readonly="props.scope == 'show'"
										v-model="form.department"
										aria-placeholder="Employee Department"
									/>
								</el-form-item>
								<el-form-item label="Section" required prop="section">
									<el-input
										:readonly="props.scope == 'show'"
										v-model="form.section"
										aria-placeholder="Employee Section"
									/>
								</el-form-item>
								<el-form-item label="Email" required prop="email">
									<el-input
										:readonly="props.scope == 'show'"
										v-model="form.email"
										aria-placeholder="Employee Email"
									/>
								</el-form-item>
							</el-row>
							<el-row :gutter="10" v-if="props.scope != 'show'">
								<el-form-item>
									<el-button type="success" @click="saveForm(employeeForm)">
										Save
									</el-button>
								</el-form-item>
							</el-row>
						</el-form>
					</div>
				</el-card>
			</div>
		</div>
	</div>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps(["scope", "id"]);
const store = useStore();

const form = ref({
	name: "",
	department: "",
	section: "",
	email: "",
});

const employeeForm = ref(null);

if (props.scope == "edit" || props.scope == "show") {
	axios.get(`/api/employees/${props.id}`).then((res) => {
		let employee = res.data.data;
		form.value = employee;
	});
}

function goBack() {
	window.location.href = "/employees";
}

function saveForm(formElement) {
	formElement.validate((valid) => {
		if (valid) {
			if (props.scope == "create") {
				store.dispatch("saveEmployee", {
					form: form.value,
				});
			} else {
				store.dispatch("updateEmployee", {
					form: form.value,
					id: props.id,
				});
			}
		} else {
			console.log("error submit!");
			return false;
		}
	});
}
</script>

<style lang="scss" scoped>
.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.text {
	font-size: 14px;
}

.item {
	margin-bottom: 18px;
}

.box-card {
	width: 480px;
}
</style>
