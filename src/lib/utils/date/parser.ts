import type { Dayjs } from "$lib/utils/day-js";
import { dayJS } from "$lib/utils/day-js";

export function date(day: number, month: number, year: number): Dayjs {
  return dayJS().year(year).month(month - 1).date(day);
}