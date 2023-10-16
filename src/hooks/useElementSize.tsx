import { useEffect, useState } from "react";

type ElementSize = {
  height: number;
  width: number;
}

const useElementSize = (elementId: string): ElementSize | null => {
  const [elementSize, setElementSize] = useState<ElementSize | null>(null);

  useEffect(() => {
    const getElementSize = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const { offsetHeight, offsetWidth } = element;
        setElementSize({ height: offsetHeight, width: offsetWidth });
      }
    };

    getElementSize();

    const resizeHandler = () => {
      getElementSize();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [elementId]);

  return elementSize;
};

export default useElementSize;
