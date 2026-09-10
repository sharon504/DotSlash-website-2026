"use client";

import React, { forwardRef, Ref } from "react";
import Image from "next/image";
import image1 from "../assets/Committee Call.png";
import HoverButton from "../components/HoverButton";
import { PortableText } from "@portabletext/react";

export interface EventData {
  _id: string;
  title: string;
  // description arrives as either PortableText blocks or a plain string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: any;
  date: string;
  poster?: {
    asset: {
      url: string;
    };
  };
  posterUrl?: string;
  link?: string;
  featured: boolean;
  large: boolean;
  isSanityData?: boolean;
}

interface EventCardProps {
  event: EventData;
  layout: "large" | "small";
}

function EventCardInner({ event, layout }: EventCardProps) {
  const posterUrl = event.posterUrl || event.poster?.asset?.url || "";
  const isPortableText = event.isSanityData && Array.isArray(event.description);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "long" });
      const year = date.getFullYear();
      return { day, month, year };
    } catch (error) {
      console.error("Date formatting error:", error);
      return { day: "27", month: "March", year: "2026" };
    }
  };

  const { day, month, year } = formatDate(event.date);

  const baseCard =
    "relative w-full h-full md:min-h-[340px] bg-background border border-border transition-all duration-200 ease-in-out hover:border-primary hover:-translate-y-1 flex";

  const descriptionBlock = isPortableText ? (
    <div className="relative">
      <div className="line-clamp-4">
        <PortableText value={event.description} />
      </div>
    </div>
  ) : (
    <p className="font-body text-base text-foreground-muted leading-relaxed line-clamp-3">
      {typeof event.description === "string"
        ? event.description.slice(0, 260) + "..."
        : ""}
    </p>
  );

  const metaBlock = (
    <div className="flex items-end justify-between gap-4">
      <div className="flex items-baseline gap-3">
        <span className="font-display font-medium text-primary text-5xl md:text-6xl leading-none">
          {day}
        </span>
        <span className="font-body text-xs uppercase tracking-[0.15em] text-foreground-muted leading-tight">
          {month}
          <br />
          {year}
        </span>
      </div>
      <span className="font-body text-xs uppercase tracking-[0.15em] text-foreground-subtle whitespace-nowrap">
        CS 218
      </span>
    </div>
  );

  if (layout === "large") {
    return (
      <div className={`${baseCard} md:flex-row`}>
        {event.featured && (
          <span className="absolute -top-3 left-4 z-10 bg-primary text-white font-display text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5">
            Featured
          </span>
        )}

        <div className="relative md:w-[38%] border-b md:border-b-0 md:border-r border-border bg-surface">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden">
            <Image
              src={posterUrl || image1}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 38vw"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6 md:p-8 justify-between gap-8">
          <div>
            <h3 className="font-display font-medium uppercase tracking-tight text-foreground text-2xl md:text-3xl leading-tight line-clamp-2">
              {event.title}
            </h3>
            <div className="mt-4">{descriptionBlock}</div>
          </div>
          <div className="flex items-end justify-between gap-4">
            <div>{metaBlock}</div>
            <HoverButton
              url={event.link || "#"}
              size="sm"
              text="Register"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseCard} relative`}>
      {event.featured && (
        <span className="absolute top-0 right-0 z-10 bg-primary text-white font-display text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5">
          Featured
        </span>
      )}
      <div className="flex flex-col flex-1 p-6 md:p-7 justify-between gap-6">
        <div>
          <h3 className="font-display font-medium uppercase tracking-tight text-foreground text-xl md:text-2xl leading-tight line-clamp-2">
            {event.title}
          </h3>
          <div className="mt-3">{descriptionBlock}</div>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>{metaBlock}</div>
          <HoverButton
            url={event.link || "#"}
            size="sm"
            text="Register"
          />
        </div>
      </div>
    </div>
  );
}

// Small/large cards need equal heights inside flex rows
const eventsCardHeight = "h-full";

const EventCard = forwardRef<HTMLDivElement, EventCardProps>(function EventCard(
  { event, layout },
  ref
) {
  return (
    <div ref={ref} className={eventsCardHeight}>
      <EventCardInner event={event} layout={layout} />
    </div>
  );
});

export default EventCard;