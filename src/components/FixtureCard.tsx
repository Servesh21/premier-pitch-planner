import React from "react";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Fixture } from "@/data/fixtures";
import { teams } from "@/data/teams";
import { motion } from "framer-motion";

interface FixtureCardProps {
  fixture: Fixture;
}

const FixtureCard: React.FC<FixtureCardProps> = ({ fixture }) => {
  const homeTeam = teams.find(team => team.id === fixture.homeTeam);
  const awayTeam = teams.find(team => team.id === fixture.awayTeam);

  if (!homeTeam || !awayTeam) return null;

  // Format date and time for display
  const fixtureDate = new Date(fixture.date);
  const dateFormatted = fixtureDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
  const timeFormatted = fixtureDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/20 rounded-xl border-t-4 border-primary relative">
        {/* Match status indicator */}
        <div className="absolute top-0 right-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg"
          >
            { "Upcoming"}
          </motion.div>
        </div>

        <CardContent className="p-6">
          {/* Date and time banner */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 mb-4 flex justify-center items-center space-x-3 text-sm"
          >
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-primary" />
              {dateFormatted}
            </span>
            <span className="h-4 border-r border-gray-300 dark:border-gray-600"></span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-primary" />
              {timeFormatted}
            </span>
          </motion.div>

          {/* Teams section */}
          <div className="relative py-4">
            {/* Center divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
            
            <div className="flex justify-between items-center">
              {/* Home team */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center space-y-3 w-5/12"
              >
                <motion.div
                  whileHover={{ 
                    rotate: 10,
                    scale: 1.1,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  className={`${homeTeam.logoColor} text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-xl shadow-md`}
                >
                  {homeTeam.shortName}
                </motion.div>
                <div className="font-medium text-center">{homeTeam.name}</div>
                
                {/* Home team stats */}
 
              </motion.div>

              {/* VS badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                className="z-10 bg-primary text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              >
                VS
              </motion.div>

              {/* Away team */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center space-y-3 w-5/12"
              >
                <motion.div
                  whileHover={{ 
                    rotate: -10,
                    scale: 1.1, 
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  className={`${awayTeam.logoColor} text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-xl shadow-md`}
                >
                  {awayTeam.shortName}
                </motion.div>
                <div className="font-medium text-center">{awayTeam.name}</div>
                
                {/* Away team stats */}

              </motion.div>
            </div>
          </div>

          {/* Venue and attendance */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-primary" />
              <span>{fixture.venue}</span>
            </div>
            
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-primary" />
              
            </div>
          </motion.div>
          
         

        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FixtureCard;