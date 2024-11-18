// EventCard.jsx
"use client";
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
import Link from "next/link";
import EventRegistrationModal from "../EventRegistrationModal";

const EventCard = ({ event,isVisible }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const eventDate = new Date(event.start_time);
  const hours = eventDate.getHours().toString().padStart(2, "0");
  const minutes = eventDate.getMinutes().toString().padStart(2, "0");
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString("default", { month: "short" });
  const year = eventDate.getFullYear();

  return (
    <>
      <Card className="py-4 m-4 w-full h-[95%]">
        <CardHeader>
          <div className="w-2/5 h-full rounded-r-lg overflow-hidden">
            <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-md p-2 justify-between">
              <div className="text-center px-2">
                <span className="block text-base font-bold">
                  {hours}:{minutes}
                </span>
                <span className="block text-sm">Time</span>
              </div>
              <div className="text-center px-2 border-l-2 border-gray-300">
                <span className="block text-base font-bold">{day}</span>
                <span className="block text-sm">Day</span>
              </div>
              <div className="text-center px-2 border-l-2 border-gray-300">
                <span className="block text-base font-bold">{month}</span>
                <span className="block text-sm">Month</span>
              </div>
              <div className="text-center px-2 border-l-2 border-gray-300">
                <span className="block text-base font-bold ">{year}</span>
                <span className="block text-sm">Year</span>
              </div>
            </div>
          </div>
          <div className="w-3/5 h-full flex flex-col items-start px-8 py-2 flex-grow">
            <span className="text-md bg-green-100 text-green-800 font-medium me-2 px-2.5 rounded-full dark:bg-green-900 dark:text-green-300">
              {event.event_type.name}
            </span>
          </div>
        </CardHeader>
        <CardBody className="flex flex-row items-start h-full">
          <div className="w-2/5 h-full rounded-r-lg overflow-hidden">
            <img
              className="object-cover rounded-xl w-full"
              src={event.image_url}
              alt="Event image"
            />
          </div>
          <div className="w-3/5 h-full flex flex-col items-start px-4 ">
            <div className="w-full flex flex-col items-start px-4 pb-2 flex-grow gap-3">
              <h4 className="font-bold text-large uppercase">{event.title}</h4>
              <p className="text-base">{event.description}</p>
            </div>
            <div className="w-full flex justify-between items-center px-4 pt-2 gap-3">
              <Button
                radius="sm"
                color="warning"
                className="text-large text-white"
                onPress={onOpen}
              >
                Tham gia ngay
              </Button>
              <Link
                href={`/events/${event.slug}`}
                className={`text-blue-500 hover:text-blue-700 font-semibold underline ${!isVisible ? "hidden" : ""}`}
              >
                Xem thêm
              </Link>
            </div>
          </div>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      {/* Use EventRegistrationModal component */}
      <EventRegistrationModal
        isOpen={isOpen}
        onClose={() => onOpenChange(false)}
        eventId={event.id}
      />
    </>
  );
};

export default EventCard;
