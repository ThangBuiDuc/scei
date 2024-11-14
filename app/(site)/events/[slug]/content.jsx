"use client";
import React, { useState } from "react";
import CountdownTimer from "@/app/_component/CountdownTimer";
import moment from "moment";
// import "moment/locale/vi";
import EventRegistrationModal from "@/app/_component/EventRegistrationModal";
import { Image, Button, useDisclosure } from "@nextui-org/react";

const Content = ({ event }) => {
    
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full h-full bg-[#f9f9f9] min-h-screen">
      <div className="flex flex-col items-center gap-5 max-w-screen-xl mx-auto px-5 py-5 bg-white pt-10">
        {/* Event Title */}
        <h1 className="text-3xl font-bold">{event.title}</h1>

        {/* Event Image */}
        <div className="w-full h-auto rounded-md shadow-md">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-auto object-cover"
            src={event.image_url}
          />
        </div>

        {/* Event Details */}
        <div className="flex flex-col items-start w-full gap-5">
          {/* Registration Deadline */}
          <div className="flex w-full justify-around items-center">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xl text-[#0083C2]">
                <strong>Thời gian hết hạn đăng ký: </strong>
              </p>
              {/* <p className="text-xl">
                {moment(event.registration_time).format("LT")}{" "}
                {moment(event.registration_time).format("L")}
              </p> */}
              <CountdownTimer targetDate={event.registration_time} />
            </div>
            <Button radius="full" size="lg" color="warning" onPress={onOpen}>
              Tham gia ngay
            </Button>
          </div>
          <div className="text-gray-600 space-y-2">
            {/* Location */}
            <p className="text-lg">
              <strong>Địa điểm:</strong> {event.location}
            </p>

            {/* Date and Time */}
            <p className="text-lg">
              <strong>Bắt đầu:</strong> {moment(event.start_time).format("LT")}{" "}
              {moment(event.start_time).format("L")}
            </p>
            <p className="text-lg">
              <strong>Kết thúc:</strong> {moment(event.end_time).format("LT")}{" "}
              {moment(event.end_time).format("L")}
            </p>

            {/* Event Type and Format */}
            <p className="text-lg">
              <strong>Loại hình:</strong> {event.event_type.name}
            </p>
            <p className="text-lg">
              <strong>Hình thức:</strong> {event.event_format.name} -{" "}
              {event.event_format.description}
            </p>
          </div>

          {/* Event Description */}
          <div className="text-gray-700">
            <h2 className="text-2xl font-semibold">Mô tả</h2>
            <p className="text-lg">{event.description}</p>
          </div>

          {/* Additional Links */}
          {event.docs_url && (
            <div>
              <a
                href={event.docs_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-lg"
              >
                Tài liệu
              </a>
            </div>
          )}
        </div>
      </div>
      <EventRegistrationModal
        isOpen={isOpen}
        onClose={() => onOpenChange(false)}
        eventId={event.id}
      />
    </div>
  );
};

export default Content;
