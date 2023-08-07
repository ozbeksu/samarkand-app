import { formatDistance, format } from "date-fns";

export function dateSince(datetime: Date): string {
	return formatDistance(new Date(datetime), new Date());
}

export function dateFormat(datetime: Date, formatStr = "dd/MM/yyyy"): string {
	return format(new Date(datetime), formatStr);
}
