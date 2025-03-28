"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useWindowDimensions from "@/lib/useWindowDimensions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Globe, Smartphone } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CarrouselProjects() {
  const { width } = useWindowDimensions();
  const isMobile = (width || 1270) < 640;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation={isMobile ? "vertical" : "horizontal"}
      className={cn(isMobile ? "w-full" : "w-3/4 md:w-2/3")}
    >
      <CarouselContent className={isMobile ? "h-[350px]" : ""}>
        <ProjectCard isMobile={isMobile} />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const ProjectCard = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <CarouselItem className="w-full">
      <div className="flex h-full items-center">
        <Card className={cn("flex-1 h-full")}>
          <CardContent
            className={cn(
              "grid grid-cols-2 pt-6 grid-flow-col items-center ",
              isMobile ? "h-full w-full" : "aspect-[2/1]",
            )}
          >
            <div className="flex justify-center">
              <Image
                alt="Imagem do Projeto"
                src="/example.png"
                width={1000}
                height={1}
                className="h-full w-auto select-none"
              />
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-2xl font-semibold">Habits Tracker</span>
              <span>
                Um app que monitora e rastreia seus hábitos, ajudando você a
                acompanhar sua rotina e progresso de forma simples.
              </span>
              <span>App & Web</span>
              <div className="flex items-center gap-4">
                <span>Links:</span>
                <Button variant="ghost" asChild>
                  <Link href="https://habits.pedrorbc.com/">
                    <Globe className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="https://github.com/PedroRBC/habits/releases/latest">
                    <Smartphone className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="https://github.com/PedroRBC/habits">
                    <Icons.gitHub className="w-4 h-4 " />
                  </Link>
                </Button>
              </div>

              <div className="flex gap-4">
                <HoverButton text="Expo">
                  <Icons.expo className="w-6 h-6" />
                </HoverButton>
                <HoverButton text="Next.js">
                  <Icons.next className="w-6 h-6" />
                </HoverButton>
                <HoverButton text="Firebase">
                  <Icons.firebase className="w-6 h-6" />
                </HoverButton>
                <HoverButton text="GoLang">
                  <Icons.go className="w-6 h-6" />
                </HoverButton>
                <HoverButton text="Docker">
                  <Icons.docker className="w-6 h-6" />
                </HoverButton>
                <HoverButton text="TypeScript">
                  <Icons.typeScript className="w-6 h-6" />
                </HoverButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

const HoverButton = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent className="w-auto">
        <span>{text}</span>
      </HoverCardContent>
    </HoverCard>
  );
};
