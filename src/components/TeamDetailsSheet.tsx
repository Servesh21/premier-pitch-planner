
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
import { Team } from "@/data/teams";

interface TeamDetailsSheetProps {
  team: Team;
  isOpen: boolean;
  onClose: () => void;
}

const TeamDetailsSheet: React.FC<TeamDetailsSheetProps> = ({ team, isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="overflow-y-auto w-full sm:max-w-md">
        <SheetHeader className="mb-6">
          <div className={`${team.logoColor} w-full h-24 absolute top-0 left-0 flex items-center justify-center`}>
            <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center text-xl font-bold">
              {team.shortName}
            </div>
          </div>
          <div className="pt-28">
            <SheetTitle className="text-2xl">{team.name}</SheetTitle>
            <SheetDescription>
              Owner: {team.owner}
            </SheetDescription>
          </div>
        </SheetHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Team Captain</h3>
            <PlayerCard 
              name={team.captain} 
              playStyle={team.playerDetails?.find(p => p.name === team.captain)?.playStyle || "All-rounder"} 
              price={team.playerDetails?.find(p => p.name === team.captain)?.price || "$1.2M"} 
              image={`/players/${team.shortName.toLowerCase()}/${team.captain.split(' ')[0].toLowerCase()}.jpg`} 
              isCaptain
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Team Players</h3>
            <div className="space-y-3">
              {team.players.filter(player => player !== team.captain).map((player, index) => {
                const playerDetails = team.playerDetails?.find(p => p.name === player);
                
                return (
                  <PlayerCard 
                    key={index} 
                    name={player} 
                    playStyle={playerDetails?.playStyle || getRandomPlayStyle()} 
                    price={playerDetails?.price || getRandomPrice()} 
                    image={`/players/${team.shortName.toLowerCase()}/${player.split(' ')[0].toLowerCase()}.jpg`} 
                  />
                );
              })}
            </div>
          </div>
        </div>
        
        <SheetClose className="sr-only">Close</SheetClose>
      </SheetContent>
    </Sheet>
  );
};

interface PlayerCardProps {
  name: string;
  playStyle: string;
  price: string;
  image: string;
  isCaptain?: boolean;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, playStyle, price, image, isCaptain }) => {
  return (
    <div className="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg">
      <Avatar className="h-14 w-14 border-2 border-gray-200">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className={isCaptain ? "bg-yellow-100 text-yellow-800" : ""}>
          {name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center">
          <h4 className="font-medium">{name}</h4>
          {isCaptain && (
            <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
              Captain
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">{playStyle}</p>
      </div>
      <div className="text-sm font-semibold text-primary">{price}</div>
    </div>
  );
};

// Helper functions for random data generation
function getRandomPlayStyle() {
  const styles = ["Batsman", "Bowler", "All-rounder", "Wicket-keeper", "Spin Bowler", "Fast Bowler"];
  return styles[Math.floor(Math.random() * styles.length)];
}

function getRandomPrice() {
  const base = (0.8 + Math.random() * 1.7).toFixed(1);
  return `$${base}M`;
}

export default TeamDetailsSheet;
