"use client";
import React, { useState, useEffect } from "react";
import EventCard from "@/app/_component/eventCard/EventCard";
import { getEventsData } from "@/utils/funcionApi/select";
import { Pagination } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react"; 

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 3;

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const offset = (currentPage - 1) * limit;
      const eventRes = await getEventsData(limit, offset); 
      setEvents(eventRes.data.result);
      const totalItems = eventRes.data.events_aggregate.aggregate.count;
      setTotalPages(Math.ceil(totalItems / limit));
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [currentPage, limit]);

  return (
    <div className="w-full h-full bg-[#f9f9f9] min-h-screen">
      <div className="max-w-screen-xl w-full mx-auto px-4 py-5 bg-white pt-10">
        <h3 className="gap-2 mb-6">Sự kiện</h3>
        <div className="w-full h-full flex flex-col items-center">
          {loading ? (
            <Spinner size="lg" color="primary" />
          ) : (
            events.map((event) => <EventCard key={event.id} event={event} isVisible={true}/>)
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <Pagination
              loop
              showControls
              total={totalPages}
              initialPage={1}
              page={currentPage}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
