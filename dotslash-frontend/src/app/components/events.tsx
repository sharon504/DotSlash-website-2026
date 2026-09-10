"use client"

import React, { useState, useEffect, useRef } from "react";
import Orbit from "./Orbit";
import EventCard, { EventData } from "../lib/EventCard";
import { client } from "../../sanity/client";
import HoverButton from "./HoverButton";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultEvents: EventData[] = [
  {
    _id: "default-1",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quo voluptatum? Cupiditate soluta nam quam mollitia? Eligendi nostrum voluptas, et corrupti assumenda quasi atque? Et qui facere laborum expedita maxime! Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Nulla dui volutpat in a non faucibus arcu in. Ullamcorper lectus duis sed in amet.",
    date: "2026-03-27",
    link: "#",
    featured: true,
    large: true
  },
  {
    _id: "default-2",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2026-03-27",
    link: "#",
    featured: false,
    large: false
  },
  {
    _id: "default-3",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2026-03-27",
    link: "#",
    featured: false,
    large: false
  },
  {
    _id: "default-4",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quo voluptatum? Cupiditate soluta nam quam mollitia? Eligendi nostrum voluptas, et corrupti assumenda quasi atque? Et qui facere laborum expedita maxime! Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Nulla dui volutpat in a non faucibus arcu in. Ullamcorper lectus duis sed in amet.",
    date: "2026-03-27",
    link: "#",
    featured: false,
    large: true
  },
  {
    _id: "default-5",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2026-03-27",
    link: "#",
    featured: false,
    large: false
  },
  {
    _id: "default-6",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2026-03-27",
    link: "#",
    featured: false,
    large: false
  },
  {
    _id: "default-7",
    title: "Project Expo",
    description: "Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo. Dui lectus venenatis ut nisl. Ullamcorper lectus duis sed in amet. Volutpat eros ut augue lacus commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus amet est minus blanditiis libero temporibus modi, beatae incidunt nostrum sapiente aspernatur",
    date: "2026-03-27",
    link: "#",
    featured: false,
    large: false
  }
];

function Events() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const query = `*[_type == "Events"] | order(date desc) {
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
          setEvents(processedData);
        } else {
          setEvents(defaultEvents);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents(defaultEvents);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  useEffect(() => {
    if (loading) return;
    
    gsap.registerPlugin(ScrollTrigger);
  
    const createAnimation = () => {
      const cards = document.querySelectorAll('.event-card');
      const cards1 = document.querySelectorAll('.event-card1');
      const cards2 = document.querySelectorAll('.event-card2');
      
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 20
      });
      
      gsap.set(cards, {
        opacity: 0,
        y: 50,
        scale: 0.95
      });
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#events',
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
          markers: false
        }
      });
  
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      });
      
      tl.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.4,
        ease: "back.out(1.4)"
      }, "-=0.2");

      tl.to(cards1, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.4,
        ease: "back.out(1.4)"
      }, "-=0.2");

      tl.to(cards2, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.8,
        ease: "back.out(1.4)"
      }, "-=0.2");
  
      return tl;
    };
    
    const timeline = createAnimation();
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (timeline) timeline.kill();
    };
  }, [loading]);

  const getArrangedEvents = () => {
    if (events.length === 0) return defaultEvents;

    const sortedEvents = [...events].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    const featuredEvents = sortedEvents.filter(event => event.featured);
    const nonFeaturedEvents = sortedEvents.filter(event => !event.featured);

    const result: EventData[] = Array(7).fill(null);

    const orderedEvents = [...featuredEvents, ...nonFeaturedEvents];

    for (let i = 0; i < 7; i++) {
      if (i < orderedEvents.length) {
        result[i] = orderedEvents[i];
      } else {
        result[i] = defaultEvents[i];
      }
    }

    return result;
  };

  const displayEvents = getArrangedEvents();

  if (loading) {
    return (
      <div className="bg-background w-full h-96 flex justify-center items-center">
        <div className="font-body text-foreground-muted">Loading events...</div>
      </div>
    );
  }

  return (
    <section id="events" className="bg-background w-full relative overflow-hidden z-[50] py-24 md:py-40">
      <div className="absolute -top-[38%] -right-[38%] pointer-events-none z-0 opacity-20">
        <Orbit />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-foreground-subtle mb-6">
          <span>02 — Events</span>
          <span className="flex-1 border-t border-dashed border-foreground/25" />
          <span className="text-primary">/</span>
        </div>

        <div
          ref={titleRef}
          className="font-display font-semibold uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(3rem,8vw,7.5rem)]"
        >
          Upcoming
          <br />
          <span className="text-primary">Events.</span>
        </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-4">
            <div className="event-card flex-1">
              <EventCard event={displayEvents[0]} layout="large" />
            </div>
            <div className="event-card flex-1">
              <EventCard event={displayEvents[1]} layout="small" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-10">
            <div className="event-card1 flex-1">
              <EventCard event={displayEvents[2]} layout="small" />
            </div>
            <div className="event-card1 flex-1">
              <EventCard event={displayEvents[3]} layout="large" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-6 mt-6 md:mt-10">
            {[4, 5, 6].map((index) => (
              <div key={displayEvents[index]._id} className="event-card2 flex-1">
                <EventCard
                  event={displayEvents[index]}
                  layout="small"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full mt-14">
          <HoverButton url="/events" text="Show all events" size="lg" variant="secondary" />
        </div>
      </div>
    </section>
  );
}

export default Events;