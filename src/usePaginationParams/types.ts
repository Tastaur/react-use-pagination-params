export interface UsePaginationParamsDefaultArgs {
  offset?: number;
  limit?: number;
}

export type Maybe<T> = T | null | undefined;

export type UsePaginationParamsResponse = {
  offset: number;
  limit: number;
  setOffset: (newOffset: number) => void;
  setLimit: (newLimit: number) => void;
};