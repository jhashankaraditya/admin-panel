import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import useCalendar from '../../Store/Calendar'
import "./Calendar.css"
import { createEventId } from '../../Data/Data'
/* eslint-disable no-restricted-globals */

const Calendar = () => {
    const { currentEvents, setCurrentEvents } = useCalendar();

    const handleEvents = async (events) => {
        await Promise.resolve(setCurrentEvents(events));
    }

    const handleDataSelect = (selectInfo) => {
        let title = prompt("Please enter the title for the event");
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay
            })
        }
    }

    const handleEventClick = (clickInfo) => {
        if (confirm("Are you sure you want to delete this event?")) {
            clickInfo.event.remove();
        }
    }

    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                allDaySlot={false}
                initialView='timeGridWeek'
                slotDuration={"01:00:00"}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                nowIndicator={true}
                initialEvents={currentEvents}
                eventsSet={handleEvents}
                select={handleDataSelect}
                eventClick={handleEventClick}
            />
        </div>
    )
}

export default Calendar