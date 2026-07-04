export interface EventItem {
  title: string;
  image: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Advanced 2026",
    image: "/images/event1.png",
    location: "London, UK",
    date: "October 15-16, 2026",
    time: "09:00",
  },
  {
    title: "DevOpsDays Seattle",
    image: "/images/event2.png",
    location: "Seattle, WA",
    date: "November 3-4, 2026",
    time: "08:30",
  },
  {
    title: "Hack the North",
    image: "/images/event3.png",
    location: "Waterloo, Canada",
    date: "September 25-27, 2026",
    time: "10:00",
  },
  {
    title: "AWS Community Day",
    image: "/images/event4.png",
    location: "Berlin, Germany",
    date: "December 8, 2026",
    time: "09:30",
  },
  {
    title: "AI & Product Meetup",
    image: "/images/event5.png",
    location: "Austin, TX",
    date: "August 21, 2026",
    time: "18:00",
  },
  {
    title: "Web Summit",
    image: "/images/event6.png",
    location: "Lisbon, Portugal",
    date: "November 10-13, 2026",
    time: "09:00",
  },
];