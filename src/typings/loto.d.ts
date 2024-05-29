type BetweenDateType = {
  from?: Date;
  to?: Date;
};

type BetweenDateStrType = {
  from?: string;
  to?: string;
};

type PaginationResultData<T = any> = {
  total: number;
  page: number;
  pageSize: number;
  list: T[];
};
