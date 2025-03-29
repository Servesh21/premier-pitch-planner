
import { teams } from './teams';

export interface Fixture {
  id: number;
  homeTeam: number;
  awayTeam: number;
  venue: string;
  date: string; // Optional date field for future use
}

// Creating a round-robin tournament where each team plays every other team once
export const fixtures: Fixture[] = [];

// Generate all possible team combinations (one-legged matches)
const venues = [
  "Top Court"
];

let fixtureId = 1;

// Generate fixtures where each team plays against all other teams once
for (let i = 0; i < teams.length; i++) {
  for (let j = i + 1; j < teams.length; j++) {
    fixtures.push({
      id: fixtureId++,
      homeTeam: teams[i].id,
      awayTeam: teams[j].id,
      venue: venues[Math.floor(Math.random() * venues.length)],
      date: "2025-04-04T10:00:00Z" // Placeholder date, can be updated later
    });
  }
}
