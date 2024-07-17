import { RefObject, useEffect, useState } from "react";
import { useResize } from "./resizeHooks";

export const useHiddenCountHook = (
  ref: RefObject<HTMLDivElement>,
  itemWidth: number,
  listLength: number
) => {
  const { width } = useResize(ref);
  const [hiddenItemsCount, setHiddenItemsCount] = useState(0);
  useEffect(() => {
    if (width && width > 0) {
      const maxItem = Math.floor((width ?? 0) / itemWidth);
      let count = maxItem - (listLength % maxItem);
      if (count === maxItem) count = 0;

      setHiddenItemsCount(count);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listLength, width]);
  if (listLength) {
    return hiddenItemsCount;
  }
  return 0;
};
