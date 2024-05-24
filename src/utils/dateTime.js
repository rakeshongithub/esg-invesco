import moment from "moment";
import { HH_MM_SS } from "../constants";

export const currentUserTime = moment().format(HH_MM_SS);
