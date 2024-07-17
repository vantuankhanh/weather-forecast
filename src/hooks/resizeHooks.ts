import { RefObject, useEffect, useState } from "react";

interface ISize {
  width: number | undefined;
  height: number | undefined;
}

export const useResize = (ref: RefObject<HTMLDivElement>) => {
  const [size, setSize] = useState<ISize>({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => {
      if (ref.current) {
        return {
          width: ref.current?.offsetWidth,
          height: ref.current?.offsetHeight,
        };
      }
      return { width: 0, height: 0 };
    };

    const handleResize = () => {
      setSize(getDimensions());
    };

    if (ref.current) {
      setSize(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return size;
};
