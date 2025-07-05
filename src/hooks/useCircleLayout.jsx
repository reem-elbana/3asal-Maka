// hooks/useCircleLayout.js
import { useEffect, useState } from "react";

export default function useCircleLayout(itemsCount) {
  const [layout, setLayout] = useState({ positions: [], containerSize: 0 });

  useEffect(() => {
    const calculate = () => {
      const width = window.innerWidth;

      let containerSize, radius, cardSize;
      if (width < 500) {
        containerSize = 320;
        radius = 110;
        cardSize = 130;
      } else if (width < 768) {
        containerSize = 450;
        radius = 160;
        cardSize = 150;
      } else if (width < 1024) {
        containerSize = 600;
        radius = 200;
        cardSize = 160;
      } else {
        containerSize = 700;
        radius = 220;
        cardSize = 180;
      }

      const center = containerSize / 2;
      const angleStep = (2 * Math.PI) / itemsCount;

      const positions = Array.from({ length: itemsCount }, (_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x = radius * Math.cos(angle) + center - cardSize / 2;
        const y = radius * Math.sin(angle) + center - cardSize / 2;
        return { x, y, cardSize };
      });

      setLayout({ positions, containerSize });
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [itemsCount]);

  return layout;
}
