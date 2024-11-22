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

const AvataCard = ({ name }) => {
  return (
    <>
      <Card className="py-4 w-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Nguyễn Quốc Thụ</p>
          <small className="text-default-500">Chuyên viên tư vấn</small>
          <h4 className="font-bold text-large text-blue-500">thunq@hpu.edu.vn</h4>
        </CardHeader>
        <CardBody className="overflow-visible w-full py-2">
          <Image
            alt="Card background"
            className="object-cover w-full rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
      </Card>
    </>
  );
};

export default AvataCard;
