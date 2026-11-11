import { useEffect, useState } from "react";

export default function useDeviceSize(): [width: number, height: number] {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const handleWindowResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return size;
}
