
import React from "react";
import { Users } from "lucide-react";
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

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
      <div className={`${team.logoColor} h-2 w-full`}></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{team.name}</CardTitle>
            <CardDescription>Owner: {team.owner}</CardDescription>
          </div>
          <div className={`${team.logoColor} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center`}>
            {team.shortName}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div>
            <h4 className="text-sm font-semibold">Captain</h4>
            <p>{team.captain}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold flex items-center gap-1">
              <Users className="h-4 w-4" /> 
              Key Players
            </h4>
            <p className="text-sm text-muted-foreground">
              {team.players.slice(0, 3).join(", ")}...
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          className="text-sm text-primary w-full justify-start p-0 h-auto hover:bg-transparent hover:underline"
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
