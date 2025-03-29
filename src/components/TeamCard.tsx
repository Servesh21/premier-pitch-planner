
import React from "react";
import { Users, User, Trophy } from "lucide-react";
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

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const captain = team.playerDetails.find(player => player.isCaptain);
  const nonCaptainPlayers = team.playerDetails.filter(player => !player.isCaptain && !player.isOwner);

  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
      <div className={`${team.logoColor} h-2 w-full`}></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{team.name}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" /> Owner: {team.owner}
            </CardDescription>
          </div>
          <div className={`${team.logoColor} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center`}>
            {team.shortName}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          {captain && (
            <div>
              <h4 className="text-sm font-semibold flex items-center gap-1">
                <Trophy className="h-4 w-4 text-yellow-500" /> Captain
              </h4>
              <div className="flex items-center gap-2">
                <p>{captain.name}</p>
                <Badge variant="outline" className="text-xs bg-yellow-50">{captain.playStyle}</Badge>
              </div>
            </div>
          )}
          <div>
            <h4 className="text-sm font-semibold flex items-center gap-1">
              <Users className="h-4 w-4" /> 
              Top Players
            </h4>
            <p className="text-sm text-muted-foreground">
              {nonCaptainPlayers.slice(0, 3).map(p => p.name).join(", ")}...
            </p>
          </div>
          <div className="text-sm">
            <span className="font-semibold">Squad Size:</span> {nonCaptainPlayers.length + 1} players
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="default" 
          className="w-full justify-center"
          onClick={() => setIsOpen(true)}
        >
          View Team Details
        </Button>
      </CardFooter>
      
      <TeamDetailsSheet 
        team={team} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </Card>
  );
};

export default TeamCard;
