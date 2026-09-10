"use client"

import React, { useState, useEffect } from 'react';
import EventCard, { EventData } from '../lib/EventCard';
import { client } from '../../sanity/client';

const EventsPage = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const query = `*[_type == "Events"] {
          _id,
          title,
          description,
          date,
          "posterUrl": poster.asset->url,
          link,
          featured,
          large
        }`;

        const data = await client.fetch<EventData[]>(query);

        if (data && data.length > 0) {
          const processedData = data.map(event => ({
            ...event,
            isSanityData: true
          }));

          const sortedEvents = processedData.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;

            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime();
          });

          setEvents(sortedEvents);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="bg-background w-full min-h-screen flex justify-center items-center">
        <div className="font-body text-foreground-muted text-xl">Loading events...</div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="bg-background w-full min-h-screen flex flex-col justify-center items-center px-4 py-20 pt-40">
        <h1 className="font-display font-medium uppercase text-foreground text-4xl md:text-6xl text-primary mb-6">
          Events.
        </h1>
        <div className="font-body text-foreground-muted text-xl text-center">
          No events found. Check back later for upcoming events.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen px-5 md:px-10 lg:px-16 py-20 pt-40 max-w-[1440px] mx-auto">
      <div className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-foreground-subtle mb-6">
        <span>Events</span>
        <span className="flex-1 border-t border-dashed border-foreground/25" />
        <span className="text-primary">/</span>
      </div>

      <h1 className="font-display font-medium uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(3rem,8vw,7.5rem)] mb-14 md:mb-20">
        Events<span className="text-primary">.</span>
      </h1>

      <div className="flex flex-col gap-8 md:gap-10">
        {events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            layout="large"
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;