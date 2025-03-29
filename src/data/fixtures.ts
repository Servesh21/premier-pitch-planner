
import { teams } from './teams';

export interface Fixture {
  id: number;
  homeTeam: number;
  awayTeam: number;
  venue: string;
}

// Creating a round-robin tournament where each team plays every other team once
export const fixtures: Fixture[] = [];

// Generate all possible team combinations (one-legged matches)
const venues = [
  "Tech Park Stadium",
  "Digital Gardens",
  "Silicon Valley Arena",
  "Code Colosseum",
  "Innovation Field",
  "Developer's Ground",
  "Programmer's Park",
  "Cyber Stadium"
];

let fixtureId = 1;

// Generate fixtures where each team plays against all other teams once
for (let i = 0; i < teams.length; i++) {
  for (let j = i + 1; j < teams.length; j++) {
    fixtures.push({
      id: fixtureId++,
      homeTeam: teams[i].id,
      awayTeam: teams[j].id,
      venue: venues[Math.floor(Math.random() * venues.length)]
    });
  }
}
