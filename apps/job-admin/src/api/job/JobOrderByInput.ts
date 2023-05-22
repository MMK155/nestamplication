import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
