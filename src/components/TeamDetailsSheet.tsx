import React from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
  SheetClose
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, User, Trophy, Star, Activity } from "lucide-react";
import { Team, PlayerDetail } from "@/data/teams";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TeamDetailsSheetProps {
  team: Team;
  isOpen: boolean;
  onClose: () => void;
}

const TeamDetailsSheet: React.FC<TeamDetailsSheetProps> = ({ team, isOpen, onClose }) => {
  // Find the owner
  const owner = team.playerDetails.find(player => player.isOwner);
  
  // Get all players (excluding owner)
  const allPlayers = team.playerDetails.filter(player => !player.isOwner);
  
  // Find captain
  const captain = allPlayers.find(player => player.isCaptain);
  
  // Get regular players (excluding captain)
  const regularPlayers = allPlayers.filter(player => !player.isCaptain);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="overflow-y-auto w-full sm:max-w-md p-0">
        {/* Stylized header with wave effect */}
        <div className="relative">
          <div className={`${team.logoColor} w-full h-32 relative overflow-hidden`}>
            {/* SVG wave pattern */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                    fill="#ffffff" fillOpacity=".3" className="opacity-25"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                    fill="#ffffff" fillOpacity=".5" className="opacity-50"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                    fill="#ffffff" className="opacity-75"></path>
            </svg>
            
            {/* Team logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white rounded-full h-20 w-20 shadow-lg flex items-center justify-center text-2xl font-bold">
                {team.shortName}
              </div>
            </div>
          </div>
          
          {/* Team info */}
          <div className="bg-white rounded-t-3xl relative -mt-6 px-6 pt-8 pb-4">
            <SheetTitle className="text-2xl font-bold text-center">{team.name}</SheetTitle>
            <SheetDescription className="flex items-center justify-center gap-2 mt-2">
              <User className="h-4 w-4" /> Owner: <span className="font-medium">{team.owner}</span>
            </SheetDescription>
          </div>
        </div>
        
        <div className="px-6 py-4 space-y-6">
          {/* Team stats */}
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-4 rounded-xl">
            <div className="text-center">
              <div className="text-sm text-gray-500">Win Rate</div>
              <div className="text-lg font-bold text-primary">72%</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-sm text-gray-500">Players</div>
              <div className="text-lg font-bold text-primary">{allPlayers.length}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">Ranking</div>
              <div className="text-lg font-bold text-primary">#3</div>
            </div>
          </div>
          
          {captain && (
            <div className="relative">
              <div className="absolute -left-2 top-3 w-4 h-8 bg-yellow-400 rounded-l"></div>
              <div className="pl-4">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" /> Team Captain
                </h3>
                <PlayerCard 
                  player={captain}
                  isCaptain={true}
                />
              </div>
            </div>
          )}
          
          <div className="relative">
            <div className="absolute -left-2 top-3 w-4 h-8 bg-primary rounded-l"></div>
            <div className="pl-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" /> Team Players
              </h3>
              <div className="space-y-3">
                {regularPlayers.map((player, index) => (
                  <PlayerCard 
                    key={index} 
                    player={player}
                    animationDelay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <SheetClose className="sr-only">Close</SheetClose>
      </SheetContent>
    </Sheet>
  );
};

interface PlayerCardProps {
  player: PlayerDetail;
  isCaptain?: boolean;
  animationDelay?: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, isCaptain, animationDelay = 0 }) => {
  // Custom skill indicator
  const skillLevel = Math.floor(Math.random() * 5) + 1; // Random skill level 1-5
  
  return (
    <div className="relative overflow-hidden p-4 bg-white rounded-xl transition-all hover:shadow-md border border-gray-100">
      {/* Background pattern for cards */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="currentColor" />
          <path d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className={`relative ${isCaptain ? "ring-2 ring-yellow-400 ring-offset-2" : ""}`}>
          <Avatar className="h-16 w-16 border-2 border-gray-100 shadow-sm">
            <AvatarImage src={player.photo || ""} alt={player.name} />
            <AvatarFallback className={isCaptain ? "bg-yellow-100 text-yellow-800" : "bg-primary/10 text-primary"}>
              {player.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {isCaptain && (
            <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-white p-1 rounded-full">
              <Trophy className="h-3 w-3" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center flex-wrap gap-2">
            <h4 className="font-medium text-gray-900">{player.name}</h4>
            {isCaptain && (
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                Captain
              </Badge>
            )}
            
            {/* Play style badge */}
            <Badge variant="outline" className="ml-auto bg-gray-50 text-gray-700 border-gray-200 text-xs">
              {player.playStyle}
            </Badge>
          </div>
          
          {/* Skill level indicator */}
          <div className="flex items-center mt-2 gap-1">
            <span className="text-xs text-gray-500 mr-1">Skill:</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} 
                className={`h-3 w-3 ${i < skillLevel ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
              />
            ))}
            <span className="ml-auto text-sm font-semibold text-primary">{player.price}</span>
          </div>
          
          {/* Mock stats bar */}
          <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsSheet;