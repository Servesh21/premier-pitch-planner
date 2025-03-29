
import React from "react";
import { Trophy, Users, Cricket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import FixtureCard from "@/components/FixtureCard";
import { teams } from "@/data/teams";
import { fixtures } from "@/data/fixtures";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Cricket className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">IT Premier League</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              The ultimate cricket tournament for IT professionals. 
              Season 1 coming soon!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#teams" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                View Teams
              </a>
              <a href="#fixtures" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                See Fixtures
              </a>
            </div>
          </div>
        </section>

        {/* Tournament Overview */}
        <section className="py-16 cricket-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                <Trophy className="h-8 w-8 text-secondary" />
                <span>Tournament Overview</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <div className="text-gray-600">Teams</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-primary mb-2">28</div>
                  <div className="text-gray-600">Matches</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <div className="text-gray-600">Champion Trophy</div>
                </div>
              </div>
              <p className="text-gray-600 mt-8 text-center">
                The IT Premier League brings together the best cricket talent from the tech world.
                Eight teams will compete in a round-robin format, with each team playing against 
                all others once. The top four teams will advance to the playoffs.
              </p>
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section id="teams" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                <Users className="h-7 w-7 text-primary" />
                <span>Tournament Teams</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Eight tech giants competing for glory in the inaugural season of the IT Premier League.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </div>
        </section>

        {/* Fixtures Section */}
        <section id="fixtures" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Match Fixtures</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                One-legged matches between all teams. Dates to be announced.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {fixtures.map((fixture) => (
                <FixtureCard key={fixture.id} fixture={fixture} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
