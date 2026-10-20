"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Repository } from "@/lib/projects";
import { siteConfig } from "@/config/site";

export function ProjectArtwork({ repository, className }: { repository: Repository; className?: string }) {
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const banner = repository.banners[0] ?? siteConfig.github.banners[repository.name.toLocaleLowerCase("en")];

  return (
    <div className={cn("project-artwork", className)} data-tone={repository.id % 4}>
      {banner && banner !== failedImage ? (
        <Image
          src={banner}
          alt={`Prévia do projeto ${repository.name}`}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 75vw"
          className="object-contain p-5 sm:p-8"
          onError={() => setFailedImage(banner)}
        />
      ) : (
        <span className="project-artwork-name" aria-hidden="true">{repository.name}</span>
      )}
    </div>
  );
}
