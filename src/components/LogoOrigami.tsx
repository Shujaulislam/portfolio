'use client'
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { SiGithub, SiHtml5, SiJavascript, SiReact, SiTypescript } from "react-icons/si";
import { IconType } from 'react-icons';

interface LogoItemProps {
  icon: IconType;
  color: string;
  backgroundColor: string | null;
}

interface DivOrigamiProps {
  icons?: LogoItemProps[];
  children?: React.ReactNode;
}

export const DivOrigami: React.FC<DivOrigamiProps> = ({ icons, children }) => {
  const defaultIcons: LogoItemProps[] = [
    { icon: SiJavascript, color: "yellow", backgroundColor: "bg-neutral-200" },
    { icon: SiReact, color: "#61dbfb", backgroundColor: "bg-gray-500" },
    { icon: SiHtml5, color: "#e34c26", backgroundColor: "bg-neutral-200" },
    { icon: SiGithub, color: "white", backgroundColor: "bg-gray-950" },
    { icon: SiTypescript, color: "#3178c6", backgroundColor: "bg-white" },
  ];

  const logoItems = (icons || defaultIcons).map((item, index) => (
    <LogoItem
      key={index}
      className={`${item.backgroundColor} text-neutral-900`}
    >
      <item.icon color={item.color} />
    </LogoItem>
  ));

  return (
    <section className="flex flex-col items-center">
      {children && <h2 className="mb-4 text-xl font-bold">{children}</h2>}
      <LogoRolodex items={logoItems} />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }: { items: ReactElement[] }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};