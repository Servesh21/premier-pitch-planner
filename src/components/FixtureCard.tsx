
import React from "react";
import { MapPin } from "lucide-react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Fixture } from "@/data/fixtures";
import { teams } from "@/data/teams";

interface FixtureCardProps {
  fixture: Fixture;
}

const FixtureCard: React.FC<FixtureCardProps> = ({ fixture }) => {
  const homeTeam = teams.find(team => team.id === fixture.homeTeam);
  const awayTeam = teams.find(team => team.id === fixture.awayTeam);

  if (!homeTeam || !awayTeam) return null;

  return (
    <Card className="overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className={`${homeTeam.logoColor} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm`}>
              {homeTeam.shortName}
            </div>
            <div className="font-medium">{homeTeam.name}</div>
          </div>
          <div className="text-lg font-bold">VS</div>
          <div className="flex items-center space-x-2">
            <div className="font-medium text-right">{awayTeam.name}</div>
            <div className={`${awayTeam.logoColor} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm`}>
              {awayTeam.shortName}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" /> 
          <span>{fixture.venue}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FixtureCard;
