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
          <div className="flex items-center justify-center p-5 overflow-hidden">
            <Image
              removeWrapper
              alt="Card background"
              className="w-full h-full rounded-2xl object-cover overflow-hidden"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQiZ8xEKjm9Y9Yy0K-RYIU-VL-JYixw7Zkw&s"
              width={200}
              height={200}
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default PartnerCard;
