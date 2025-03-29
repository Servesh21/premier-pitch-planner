
import React, { useEffect, useRef } from "react";
import { Trophy, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import FixtureCard from "@/components/FixtureCard";
import { teams } from "@/data/teams";
import { fixtures } from "@/data/fixtures";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const teamsRef = useRef<HTMLDivElement>(null);
  const fixturesRef = useRef<HTMLDivElement>(null);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Animated Elements */}
        <section id="home" className="hero-gradient text-white py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <Award className="h-16 w-16" />
            </motion.div>
            
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              IT Premier League
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              The ultimate cricket tournament for IT professionals. 
              Season 1 coming soon!
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#teams" 
                className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                View Teams
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#fixtures" 
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                See Fixtures
              </motion.a>
            </motion.div>
            
            {/* Floating cricket balls animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/10 w-12 h-12"
                  initial={{
                    x: Math.random() * 100 - 50 + "%",
                    y: Math.random() * 100 + "%",
                    opacity: 0.3
                  }}
                  animate={{
                    y: ["-20%", "120%"],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{
                    duration: 10 + Math.random() * 20,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tournament Overview with Animated Stats */}
        <section className="py-16 cricket-pattern">
          <div className="container mx-auto px-4">
            <motion.div 
              ref={statsRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2"
              >
                <Trophy className="h-8 w-8 text-secondary" />
                <span>Tournament Overview</span>
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div variants={itemVariants} className="p-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-primary mb-2"
                  >
                    8
                  </motion.div>
                  <div className="text-gray-600">Teams</div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="p-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-primary mb-2"
                  >
                    28
                  </motion.div>
                  <div className="text-gray-600">Matches</div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="p-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-primary mb-2"
                  >
                    1
                  </motion.div>
                  <div className="text-gray-600">Champion Trophy</div>
                </motion.div>
              </div>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 mt-8 text-center"
              >
                The IT Premier League brings together the best cricket talent from the tech world.
                Eight teams will compete in a round-robin format, with each team playing against 
                all others once. The top four teams will advance to the playoffs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Teams Section with Animated Cards */}
        <section id="teams" className="py-16 bg-gray-50" ref={teamsRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInVariants}
              className="text-center mb-12"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold mb-4 flex items-center justify-center gap-2"
              >
                <Users className="h-7 w-7 text-primary" />
                <span>Tournament Teams</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 max-w-2xl mx-auto mb-8"
              >
                Eight tech giants competing for glory in the inaugural season of the IT Premier League.
                Click on "View Team Details" to see the complete roster.
              </motion.p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teams.map((team, index) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </div>
        </section>

        {/* Fixtures Section with Carousel */}
        <section id="fixtures" className="py-16" ref={fixturesRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInVariants}
              className="text-center mb-12"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold mb-4"
              >
                Match Fixtures
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                One-legged matches between all teams. Dates to be announced.
              </motion.p>
            </motion.div>
            
            <Carousel className="mx-auto max-w-5xl">
              <CarouselContent>
                {fixtures.map((fixture) => (
                  <CarouselItem key={fixture.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <FixtureCard fixture={fixture} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static transform-none mx-2" />
                <CarouselNext className="relative static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
