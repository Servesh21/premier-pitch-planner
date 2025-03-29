import React, { useEffect, useRef, useState } from "react";
import { Trophy, Users, Award, Calendar, Star, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import FixtureCard from "@/components/FixtureCard";
import { teams } from "@/data/teams";
import { fixtures } from "@/data/fixtures";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const teamsRef = useRef<HTMLDivElement>(null);
  const fixturesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const [activeTab, setActiveTab] = useState("teams");
  
  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Animated Elements */}
        <section 
          id="home" 
          ref={heroRef}
          className="relative overflow-hidden min-h-[90vh] flex items-center"
        >
          {/* Animated background patterns */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary/90 to-primary/70 z-0">
            {/* Animated cricket field lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.3" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.2" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.2" />
            </svg>
          </div>
          
          {/* Cricket ball animated elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [Math.random() * -100, Math.random() * 100],
                x: [Math.random() * -100, Math.random() * 100],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
          
          <motion.div 
            style={{ opacity: heroOpacity, y: heroY }}
            className="container mx-auto px-4 text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border-2 border-white/30"
                />
                <Award className="h-24 w-24 text-white relative z-10" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
            >
              IT Premier League
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90"
            >
              Where <span className="font-semibold">tech giants</span> battle on the cricket field.
              Season 1 launching soon!
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#teams" 
                className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg"
              >
                Explore Teams <ChevronRight className="h-4 w-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#fixtures" 
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/30 transition-all flex items-center gap-2"
              >
                View Schedule <Calendar className="h-4 w-4" />
              </motion.a>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
                <motion.div 
                  className="w-1 h-2 bg-white rounded-full"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Tournament Overview with Animated Stats */}
        <section className="py-20 relative">
          {/* Background pattern with animated gradient */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              ref={statsRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                variants={itemVariants}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center justify-center gap-2 bg-primary/10 py-2 px-4 rounded-full text-primary font-medium mb-4">
                  <Trophy className="h-4 w-4" />
                  <span>Tournament Highlights</span>
                </div>
                <h2 className="text-4xl font-bold">The Ultimate Tech Cricket Showdown</h2>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 group-hover:from-primary/10 transition-all duration-300" />
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 z-10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-5xl font-bold text-gray-900 mb-2">3</h3>
                  <p className="text-gray-600">Competing Teams</p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/0 group-hover:from-secondary/10 transition-all duration-300" />
                  <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 z-10">
                    <Calendar className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-5xl font-bold text-gray-900 mb-2">4</h3>
                  <p className="text-gray-600">Exciting Matches</p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-500/0 group-hover:from-yellow-500/10 transition-all duration-300" />
                  <div className="h-16 w-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 z-10">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-5xl font-bold text-gray-900 mb-2">1</h3>
                  <p className="text-gray-600">Champion Trophy</p>
                </motion.div>
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-12 bg-gradient-to-r from-primary/80 to-secondary/80 p-0.5 rounded-xl overflow-hidden"
              >
                <div className="bg-white p-6 rounded-[10px] text-center">
                  <p className="text-gray-700">
                    The IT Premier League brings together the best cricket talent from SE IT.
                    Three teams will compete in a round-robin format, with each team playing against 
                    all others once.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Teams and Fixtures Tab Section */}
        <section id="teams-fixtures" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInVariants}
              className="text-center mb-12"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center justify-center">
                <Tabs 
                  defaultValue="teams" 
                  className="w-full max-w-xl"
                  value={activeTab}
                  onValueChange={setActiveTab}
                >
                  <TabsList className="grid grid-cols-2 bg-gray-100 p-1 rounded-full">
                    <TabsTrigger 
                      value="teams" 
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-md py-3"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Teams
                    </TabsTrigger>
                    <TabsTrigger 
                      value="fixtures" 
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-md py-3"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Fixtures
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="mt-12">
                    <TabsContent value="teams" id="teams" ref={teamsRef}>
                      <motion.div 
                        variants={itemVariants}
                        className="text-center mb-12"
                      >
                        <h2 className="text-4xl font-bold mb-4">Tournament Teams</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                          Three tech giants competing for glory in the inaugural season of the IT Premier League.
                          Click on each team card to see the complete roster.
                        </p>
                      </motion.div>
                      
                      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {teams.map((team, index) => (
                          <TeamCard key={team.id} team={team} />
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="fixtures" id="fixtures" ref={fixturesRef}>
                      <motion.div 
                        variants={itemVariants}
                        className="text-center mb-12"
                      >
                        <h2 className="text-4xl font-bold mb-4">Match Fixtures</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                          One match between all teams. Dates to be announced soon.
                        </p>
                      </motion.div>
                      
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <Carousel className="mx-auto">
                          <CarouselContent className="-ml-2 md:-ml-4">
                            {fixtures.map((fixture) => (
                              <CarouselItem key={fixture.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <FixtureCard fixture={fixture} />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <div className="flex justify-center mt-6">
                            <CarouselPrevious className="relative static transform-none mx-2" />
                            <CarouselNext className="relative static transform-none mx-2" />
                          </div>
                        </Carousel>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Countdown Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Tournament Starting Soon</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              The battle for tech cricket supremacy begins in
            </p>
            
            {/* Countdown timer */}
            <div className="flex justify-center gap-4 md:gap-8 mb-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold">24</div>
                <div className="text-xs md:text-sm text-white/70">Days</div>
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold">12</div>
                <div className="text-xs md:text-sm text-white/70">Hours</div>
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold">45</div>
                <div className="text-xs md:text-sm text-white/70">Minutes</div>
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold">32</div>
                <div className="text-xs md:text-sm text-white/70">Seconds</div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all"
            >
              Register for Updates
            </motion.button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;