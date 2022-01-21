function getBlockData<T>(
  _code: string,
  listBlock?: BlockComponents<T>[],
): T | undefined {
  if (!listBlock) return undefined;
  return listBlock.find((item) => item.code === _code)?.blocks;
}

export default getBlockData;
