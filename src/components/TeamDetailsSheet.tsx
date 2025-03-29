
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
import { Users, User, Trophy } from "lucide-react";
import { Team, PlayerDetail } from "@/data/teams";
import { Badge } from "@/components/ui/badge";

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
      <SheetContent className="overflow-y-auto w-full sm:max-w-md">
        <SheetHeader className="mb-6">
          <div className={`${team.logoColor} w-full h-24 absolute top-0 left-0 flex items-center justify-center`}>
            <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center text-xl font-bold">
              {team.shortName}
            </div>
          </div>
          <div className="pt-28">
            <SheetTitle className="text-2xl">{team.name}</SheetTitle>
            <SheetDescription className="flex items-center gap-2">
              <User className="h-4 w-4" /> Owner: {team.owner}
            </SheetDescription>
          </div>
        </SheetHeader>
        
        <div className="space-y-6">
          {captain && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" /> Team Captain
              </h3>
              <PlayerCard 
                player={captain}
                isCaptain={true}
              />
            </div>
          )}
          
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Team Players
            </h3>
            <div className="space-y-3">
              {regularPlayers.map((player, index) => (
                <PlayerCard 
                  key={index} 
                  player={player}
                />
              ))}
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
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, isCaptain }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg transition-all hover:shadow-md">
      <Avatar className="h-16 w-16 border-2 border-gray-200">
        <AvatarImage src={player.photo || ""} alt={player.name} />
        <AvatarFallback className={isCaptain ? "bg-yellow-100 text-yellow-800" : ""}>
          {player.name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center flex-wrap gap-2">
          <h4 className="font-medium">{player.name}</h4>
          {isCaptain && (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
              Captain
            </Badge>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">{player.playStyle}</p>
      </div>
      <div className="text-sm font-semibold text-primary">{player.price}</div>
    </div>
  );
};

export default TeamDetailsSheet;
