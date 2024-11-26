import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  useDisclosure,
} from "@nextui-org/react";

const AvataCard = ({ name, position, email }) => {
  return (
    <>
      <Card className="py-4 w-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{name}</p>
          <small className="text-default-500">{position}</small>
          <h4 className="font-bold text-large text-blue-500">{email}</h4>
        </CardHeader>
        <CardBody className="overflow-visible w-full py-2">
          <div className="w-full h-full flex items-center justify-center overflow-y-hidden">
            <Image
              alt="Card background"
              className="object-cover w-full rounded-xl p-2"
              src="/team/nguyen-the-hung.jpg"
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default AvataCard;
