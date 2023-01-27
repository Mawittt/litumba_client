interface QueryInterface {}
export interface IncludesObjectParam {
	field: string;
	includes: params[];
	orderBy?: { field: string; value: "asc" | "desc" };
}
type params = string | IncludesObjectParam;

export function getIncludeObject(options: params[]) {
	const query: { [propName: string]: boolean | object } = {};
	options.forEach((option: params) => {
		if (typeof option === "string") {
			query[option] = true;
		}
		if (typeof option === "object") {
			if (option.orderBy) {
				query[option.field] = {
					include: getIncludeObject(option.includes),
					orderBy: {
						[option.orderBy.field]: option.orderBy.value,
					},
				};
			} else {
				query[option.field] = {
					include: getIncludeObject(option.includes),
				};
			}
		}
	});

	return query;
}
