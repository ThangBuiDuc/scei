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

const PartnerCard = ({ name }) => {
  return (
    <>
      <Card className="h-[300px] w-full">
        <CardHeader className="h-10 !items-start">
          <p className="text-sm text-black/60 uppercase font-bold">{name}</p>
        </CardHeader>
        <CardBody className="mt-2">
          <Image
            removeWrapper
            alt="Card background"
            className="w-full h-full rounded-lg object-cover overflow-hidden p-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQiZ8xEKjm9Y9Yy0K-RYIU-VL-JYixw7Zkw&s"
            width={250}
            height={250}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default PartnerCard;
