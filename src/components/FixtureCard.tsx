
import React from "react";
import { MapPin } from "lucide-react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
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

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-2"
            >
              <motion.div 
                whileHover={{ rotate: 10 }}
                className={`${homeTeam.logoColor} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm`}
              >
                {homeTeam.shortName}
              </motion.div>
              <div className="font-medium">{homeTeam.name}</div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
              className="text-lg font-bold"
            >
              VS
            </motion.div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-2"
            >
              <div className="font-medium text-right">{awayTeam.name}</div>
              <motion.div 
                whileHover={{ rotate: -10 }}
                className={`${awayTeam.logoColor} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm`}
              >
                {awayTeam.shortName}
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="flex items-center justify-center text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 mr-1" /> 
            <span>{fixture.venue}</span>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FixtureCard;
