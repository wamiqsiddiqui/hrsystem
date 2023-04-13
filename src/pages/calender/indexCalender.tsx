import FullCalendar from "@fullcalendar/react";
import {
  CalendarApi,
  DateSelectArg,
  EventApi,
  formatDate,
} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { Header } from "../../components/Header";
// import interactionPlugin from "@fullcalendar/interaction";

export const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([] as EventApi[]);
  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your Interview");
    const calendarApi: CalendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title: title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the interview event ${selected.event.title}?`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={"20px"}>
      <Header
        title={"INTERVIEWS SCHEDULER"}
        subtitle={"Schedule your interviews and get notified!"}
      />
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          flex={"1 1 20%"}
          sx={{ backgroundColor: colors.primary[400] }}
          padding={"15px"}
          borderRadius={"4px"}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: any) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex={"1 1 100%"} ml={"15px"}>
          <FullCalendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "React Dev Interview", date: "2023-04-11" },
              {
                id: "4321",
                title: "Flutter Dev Interview",
                date: "2023-04-13",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
