<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-8">
				<el-card class="box-card w-100">
					<template #header>
						Employee Data
						<a href="/employees/create">
							<el-button type="success" class="float-end">
								Add Employee
							</el-button>
						</a>
					</template>
					<div>
						<el-table :data="tableData" style="width: 100%" height="450">
							<el-table-column
								v-for="column in columns"
								:key="column.label"
								:label="column.label"
								:prop="column.prop"
								:column-key="column.prop"
								:min-width="column.minWidth"
								:sortable="column.sortable"
								:align="column.align"
								:header-align="column.align"
							/>
							<el-table-column align="right">
								<template #header>
									<el-input
										v-model="search"
										size="mini"
										placeholder="Type to search"
									/>
								</template>
								<template #default="scope">
									<el-button
										size="mini"
										type="success"
										@click="handleEdit(scope.$index, scope.row)"
										>Edit</el-button
									>
									<el-button
										size="mini"
										type="danger"
										@click="handleDelete(scope.$index, scope.row)"
										>Delete</el-button
									>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</el-card>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps([]);
const store = useStore();

store.dispatch("getEmployees");

const tableData = computed(() => store.getters.employeesTableData);

const columns = reactive([
	{
		prop: "name",
		label: "Name",
		minWidth: 100,
		sortable: true,
		hidden: true,
		align: "center",
		fixed: true,
	},
	{
		prop: "department",
		label: "Department",
		minWidth: 100,
		sortable: false,
		hidden: true,
		align: "center",
		fixed: true,
	},
	{
		prop: "section",
		label: "Section",
		minWidth: 100,
		sortable: false,
		hidden: true,
		align: "center",
		fixed: true,
	},
	{
		prop: "email",
		label: "Email",
		minWidth: 100,
		sortable: false,
		hidden: true,
		align: "center",
		fixed: true,
	},
]);
</script>

<style lang="scss" scoped></style>
