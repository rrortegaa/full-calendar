import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const TOMORROW_STR = new Date(new Date().setDate(new Date().getDate() + 1))
  .toISOString()
  .replace(/T.*$/, ''); // YYYY-MM-DD of tomorrow

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'test 1',
    start: TODAY_STR,
  },
  // {
  //   id: createEventId(),
  //   title: 'test 2',
  //   start: TODAY_STR + 'T00:00:00',
  //   end: TODAY_STR + 'T03:00:00',
  // },
  // {
  //   id: createEventId(),
  //   title: 'Timed event',
  //   start: TODAY_STR + 'T12:00:00',
  //   end: TODAY_STR + 'T15:00:00',
  // },
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR,
    end: TOMORROW_STR,
  },
];

export function createEventId() {
  return String(eventGuid++);
}
