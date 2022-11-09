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
						<el-table
							:data="filterTableData"
							style="width: 100%"
							height="450"
						>
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
							<el-table-column align="right" min-width="150">
								<template #header>
									<el-input
										v-model="search"
										size="mini"
										placeholder="Type to search"
									/>
								</template>
								<template #default="scope">
									<el-button
										:icon="View"
										circle
										type="info"
										@click="showEmployee(scope.$index, scope.row)"
									>
									</el-button>
									<el-button
										:icon="Edit"
										circle
										type="success"
										@click="editEmployee(scope.$index, scope.row)"
									>
									</el-button>
									<el-button
										:icon="Delete"
										circle
										type="danger"
										@click="deleteEmployee(scope.$index, scope.row)"
									>
									</el-button>
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
import { Delete, Edit, View } from "@element-plus/icons-vue";

const props = defineProps(["scope", "id"]);
const store = useStore();

store.dispatch("getEmployees");

const tableData = computed(() => store.getters.employeesTableData);
const search = ref("");
const filterTableData = computed(() =>
	tableData.value.filter(
		(data) =>
			!search.value ||
			data.name.toLowerCase().includes(search.value.toLowerCase())
	)
);

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
		sortable: true,
		hidden: true,
		align: "center",
		fixed: true,
	},
	{
		prop: "section",
		label: "Section",
		minWidth: 100,
		sortable: true,
		hidden: true,
		align: "center",
		fixed: true,
	},
	{
		prop: "email",
		label: "Email",
		minWidth: 100,
		sortable: true,
		hidden: true,
		align: "center",
		fixed: true,
	},
]);

function showEmployee(index, row) {
	window.location.href = `/employees/${row.id}`;
}

function editEmployee(index, row) {
	window.location.href = `/employees/${row.id}/edit`;
}

function deleteEmployee(index, row) {
	store.dispatch("deleteEmployee", {
		id: row.id,
	});

	store.dispatch("getEmployees");
}
</script>

<style lang="scss" scoped></style>
