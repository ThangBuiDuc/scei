import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";

const AvataCard = ({ name, position, email, img }) => {
  return (
    <>
      <Card className="py-4 w-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{name}</p>
          <small className="text-default-500">{position}</small>
        </CardHeader>
        <CardBody className="overflow-visible w-full py-2">
          <div className="w-full h-full flex items-center justify-center overflow-y-hidden">
            <Image
              alt="Card background"
              className="object-cover w-full rounded-full p-2"
              src={img ? img : "/default-avatar.webp"}
              height={250}
              width={250}
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default AvataCard;
