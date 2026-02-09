"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const Marquee = () => {
  const autoScroll = React.useRef<ReturnType<typeof AutoScroll> | null>(null);
  if (!autoScroll.current) {
    autoScroll.current = AutoScroll({
      speed: 1.1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    });
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [autoScroll.current]
  );

  useEffect(() => {
    if (!emblaApi) return;
    autoScroll.current?.play?.();
  }, [emblaApi]);

  const baseItems = [
    {
      label: "1",
      icon: <Image src="/marquee/1.png" alt="1" height={80} width={80} />,
    },
    {
      label: "2",
      icon: <Image src="/marquee/2.png" alt="2" height={80} width={80} />,
    },
    {
      label: "3",
      icon: <Image src="/marquee/3.png" alt="3" height={80} width={80} />,
    },
    {
      label: "4",
      icon: <Image src="/marquee/4.png" alt="4" height={80} width={80} />,
    },
    {
      label: "5",
      icon: <Image src="/marquee/5.png" alt="5" height={80} width={80} />,
    },
    {
      label: "6",
      icon: <Image src="/marquee/6.png" alt="6" height={80} width={80} />,
    },
    {
      label: "7",
      icon: <Image src="/marquee/7.png" alt="7" height={80} width={80} />,
    },
    {
      label: "8",
      icon: <Image src="/marquee/8.png" alt="8" height={80} width={80} />,
    },
  ];

  const items = [
    ...baseItems,
    ...baseItems,
    ...baseItems,
    ...baseItems,
    ...baseItems,
  ];

  return (
    <div className="embla mt-10 lg:mt-20 w-full text-gray-900 text-sm lg:text-lg gap-5">
      <div ref={emblaRef} className="embla__viewport overflow-hidden ">
        <div className="embla__container flex items-center gap-5 lg:gap-20">
          {items.map((item, index) => (
            <div key={`${item.label}-${index}`} className="embla__slide flex-none">
              <div className="flex flex-row items-center gap-3 lg:gap-5">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;