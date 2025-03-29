import React from "react";
import { Users, User, Trophy, Star, Award, Zap, Shield, Medal, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Team } from "@/data/teams";
import TeamDetailsSheet from "./TeamDetailsSheet";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const captain = team.playerDetails.find(player => player.isCaptain);
  const owner = team.playerDetails.find(player => player.isOwner);
  const topPlayers = team.playerDetails
    .filter(player => !player.isCaptain && !player.isOwner)
    .slice(0, 3);

  // Team stats visualizer
  const getStatWidth = (stat: number) => `${Math.min(stat * 10, 100)}%`;
  
  // Random stats to display (would use real data in production)
  const teamStats = {
    attack: team.stats?.attack || Math.floor(Math.random() * 6) + 5,
    defense: team.stats?.defense || Math.floor(Math.random() * 6) + 5,
    teamwork: team.stats?.teamwork || Math.floor(Math.random() * 6) + 5
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      // Added flex and justify-center here
    >
      <Card className="h-full w-full max-w-md overflow-hidden transition-all hover:shadow-lg border-none bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        {/* Color accent and logo */}
        <div className={`${team.logoColor} h-24 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-full p-1 shadow-lg">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={`${team.logoColor} text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-xl shadow-inner`}
            >
              {team.shortName}
            </motion.div>
          </div>
          

        </div>
        
        <CardHeader className="pt-12 pb-2">
          <div className="text-center">
            <CardTitle className="text-2xl font-bold">{team.name}</CardTitle>
            <CardDescription className="flex items-center justify-center gap-1 mt-1">
              <User className="h-3.5 w-3.5" /> 
              Owner: <span className="font-medium text-primary">{team.owner}</span>
            </CardDescription>
            

          </div>
        </CardHeader>
        
        <CardContent className="pb-2 space-y-4">
          {/* Team stats visualizer */}
          <div className="space-y-2 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
            <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-primary" /> Team Stats
            </h3>
            
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-blue-500" /> Attack
                  </span>
                  <span>{teamStats.attack}/10</span>
                </div>
                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full" 
                    style={{ width: getStatWidth(teamStats.attack) }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-green-500" /> Defense
                  </span>
                  <span>{teamStats.defense}/10</span>
                </div>
                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full" 
                    style={{ width: getStatWidth(teamStats.defense) }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3 text-purple-500" /> Teamwork
                  </span>
                  <span>{teamStats.teamwork}/10</span>
                </div>
                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-500 rounded-full" 
                    style={{ width: getStatWidth(teamStats.teamwork) }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Captain section */}
            {captain && (
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-lg p-3 border border-yellow-100 dark:border-yellow-900/50">
                <h4 className="text-sm font-semibold flex items-center gap-1 mb-2">
                  <Trophy className="h-4 w-4 text-yellow-500" /> Captain
                </h4>
                <div className="space-y-1">
                  <p className="font-medium text-sm">{captain.name}</p>
                  <div className="flex items-center gap-1">
                    <Badge variant="outline" className="text-xs bg-yellow-50 dark:bg-yellow-950/50">
                      {captain.playStyle}
                    </Badge>

                  </div>
                </div>
              </div>
            )}
            
            {/* Top players section */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
              <h4 className="text-sm font-semibold flex items-center gap-1 mb-2">
                <Star className="h-4 w-4 text-primary" /> Top Players
              </h4>
              <ul className="space-y-1 text-sm">
                {topPlayers.map((player, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span className="truncate">{player.name}</span>
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-sm flex justify-between items-center bg-gray-50 dark:bg-gray-900 p-2 rounded-lg">
            <span className="font-semibold flex items-center">
              <Users className="h-4 w-4 mr-1 text-gray-500" />
              Squad Size:
            </span>
            <Badge variant="secondary">
              {team.playerDetails.length} players
            </Badge>
          </div>
        </CardContent>
        
        <CardFooter className="pt-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <Button
              variant="default"
              className={`w-full justify-center font-medium ${team.logoColor} hover:opacity-90`}
              onClick={() => setIsOpen(true)}
            >
              View Full Roster
            </Button>
          </motion.div>
        </CardFooter>
        
        <TeamDetailsSheet
          team={team}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Card>
    </motion.div>
  );
};

export default TeamCard;