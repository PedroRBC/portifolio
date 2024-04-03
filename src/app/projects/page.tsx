"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import useWindowDimensions from "@/lib/useWindowDimensions";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const { width } = useWindowDimensions();
  const isMobile = (width || 1270) < 640;
  return (
    <main className="container w-full flex-1 flex items-center justify-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        orientation={isMobile ? "vertical" : "horizontal"}
        className={cn(isMobile ? "w-full" : "w-3/4 md:w-2/3")}
      >
        <CarouselContent className={isMobile ? "h-[350px]" : ""}>
          <ProjectCard isMobile={isMobile} />
          <ProjectCard isMobile={isMobile} />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}

const ProjectCard = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <CarouselItem className="w-full">
      <div className="flex h-full items-center">
        <Card className={cn("flex-1 h-full")}>
          <CardContent
            className={cn(
              "flex items-center justify-center",
              isMobile ? "h-full w-full" : "aspect-[2/1]",
            )}
          >
            <span className="text-2xl font-semibold">
              Nada ainda volte mais tarde 😓
            </span>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};
