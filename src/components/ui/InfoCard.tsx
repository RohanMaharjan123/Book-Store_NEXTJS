// components/InfoCard.tsx
import { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

// Define the type for props
interface InfoCardProps {
  title: string;
  description: string;
  content: string;
}

const InfoCard: FC<InfoCardProps> = ({ title, description, content }) => (
  <div className="h-full overflow-hidden shadow-inner">
    <Card className="flex flex-col justify-between w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>

      </CardHeader>
      <CardContent>
        <h1>{content}</h1>
      </CardContent>
      <CardFooter>
        <CardDescription>{description}</CardDescription>
      </CardFooter>
    </Card>
  </div>
);

export default InfoCard;