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
      <Card className="py-4 w-1/4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Nguyễn Quốc Thụ</p>
          <small className="text-default-500">Chuyên viên tư vấn</small>
          <h4 className="font-bold text-large text-blue-500">thunq@hpu.edu.vn</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default AvataCard;
