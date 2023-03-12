export type RenameQueryReturnProperties<TData = unknown> = {
  emptyFallback?: TData;
};

export const renameQueryReturnProperties = <TData, TKey extends string = string>(
  key: TKey,
  rtkQueryResult: any,
  configs?: RenameQueryReturnProperties<TData>
): Record<Uncapitalize<TKey>, TData> &
  Record<`isLoading${TKey}`, boolean> &
  Record<`isFetching${TKey}`, boolean> &
  Record<`refetch${TKey}`, any> &
  Record<Uncapitalize<`${TKey}Error`>, any> &
  Record<`isLoad${TKey}Success`, boolean> => {
  const { emptyFallback } = configs ?? {};
  const { data, isLoading, isFetching, refetch, error, isSuccess } = rtkQueryResult;

  const keyInCamelCase = key.charAt(0).toLowerCase() + key.slice(1);

  return {
    [keyInCamelCase]: data ?? emptyFallback,
    [`isLoading${key}`]: isLoading,
    [`isFetching${key}`]: isFetching,
    [`refetch${key}`]: refetch,
    [`${keyInCamelCase}Error`]: error,
    [`isLoad${key}Success`]: isSuccess,
  } as any;
};
