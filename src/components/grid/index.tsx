"use client";

import {
  AboutCard,
  DeveloperLandingCard,
  EthikisCard,
  GlowCard,
  IconCard,
  JobsCard,
  MapCard,
  MyTechCard,
  PageTransitionCard,
  RenoirCard,
  ResumeCard,
  ShowAdviserCard,
  TextMarqueeCard,
} from "@/components/cards";
import { heights, layouts } from "@/data";
import cn from "classnames";
import { useEffect, useState } from "react";
import {
  ResponsiveGridLayout as Responsive,
  WidthProvider,
} from "react-grid-layout-next";
import BlurFade from "../magic-ui/blur-fade";
import ThemeToggle from "../theme-toggle";
import styles from "./grid.module.scss";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Grid = () => {
  const [height, setHeight] = useState(280);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);

  return (
    <div className={styles.container}>
      <ResponsiveGridLayout
        useCSSTransforms
        className={styles.layout}
        layouts={layouts.all}
        breakpoints={{
          lg: 1199,
          md: 799,
          sm: 374,
        }}
        cols={{
          lg: 12,
          md: 10,
          sm: 4,
        }}
        isDraggable={false}
        rowHeight={height}
        onBreakpointChange={(breakpoint: any) => {
          setHeight(heights[breakpoint]);
        }}
        margin={[16, 16]}
      >
        <div
          key="bio"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
            height: "100%",
          }}
        >
          <BlurFade delay={0.01}>
            <AboutCard />
          </BlurFade>
        </div>
        <div
          key="theme-toggle"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <div className="flex flex-col-reverse sm:flex-col gap-3 h-full">
            <BlurFade delay={0.1}>
              <ResumeCard />
            </BlurFade>
            <BlurFade delay={0.12}>
              <ThemeToggle />
            </BlurFade>
          </div>
        </div>
        <div
          key="map"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.08}>
            <MapCard />
          </BlurFade>
        </div>
        <div
          key="text-marquee"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.04}>
            <TextMarqueeCard />
          </BlurFade>
        </div>
        <div
          key="linkedin"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.24}>
            <IconCard
              title="Linkedin"
              link="https://www.linkedin.com/in/pablo-correiamourato/"
            />
          </BlurFade>
        </div>
        <div
          key="github"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.26}>
            <IconCard title="Github" link="https://github.com/Yozora0" />
          </BlurFade>
        </div>
        <div
          key="codepen"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.28}>
            <IconCard
              title="Vercel"
              link="https://vercel.com/pablo-mouratos-projects"
            />
          </BlurFade>
        </div>
        <div
          key="email"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.3}>
            <IconCard
              title="Email"
              link="mailto:pablo.correiamourato@gmail.com"
            />
          </BlurFade>
        </div>
        <div
          key="my-stack"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.35}>
            <MyTechCard />
          </BlurFade>
        </div>
        <div
          key="jobs"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.4}>
            <JobsCard />
          </BlurFade>
        </div>
        <div
          key="station-ui"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.5}>
            <PageTransitionCard />
          </BlurFade>
        </div>
        <div
          key="station-landing"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.55}>
            <ShowAdviserCard />
          </BlurFade>
        </div>
        <div
          key="station-setup"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.6}>
            <RenoirCard />
          </BlurFade>
        </div>
        <div
          key="alliance-dao"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.65}>
            <EthikisCard />
          </BlurFade>
        </div>
        <div
          key="alliance-landing"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.7}>
            <GlowCard />
          </BlurFade>
        </div>
        <div
          key="developer-landing"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.75}>
            <DeveloperLandingCard />
          </BlurFade>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Grid;
