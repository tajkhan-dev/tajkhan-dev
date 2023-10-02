import  React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface CardData{
    projectName:string
    projectDescription:string
    techStack:string
}

 const Cards = ({projectName,projectDescription,techStack}:CardData) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{projectName}</CardTitle>
        
      </CardHeader>
      <CardContent>
        <CardDescription>{projectDescription}</CardDescription>
        <CardDescription>{techStack}</CardDescription>

      
      </CardContent>
      <CardFooter className="flex justify-between">
      
      </CardFooter>
    </Card>
  )
}

export default Cards