import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Dumbbell, Pill, CalendarDays, Dot, Circle } from "lucide-react";
import CoreLogic, { MedicineInfo } from "../Logic/LogicComponent";
import "../App.css";

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export default function CalendarComponent() {
  return (
    <div className="p-6 max-w-md mx-auto calendar">
      <Calendar
        tileContent={({ date, view }) => {
          if (view !== "month") return null;
          //   const dayEvents = formatDate(date);
          //   if (dayEvents !== "2026-02-01") return null;
          const medData = CoreLogic(date);
          //   const medicineInfo = MedicineInfo();
          //   const dayEvents = events[formatDate(date)];
          //   if (!dayEvents) return null;

          return (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 1,
                height: 20,
                backgroundColor: "transparent",
              }}
            >
              {Object.entries(medData).map(([med, toTake]) => {
                console.log(date, med, toTake);
                if (toTake === true) {
                  console.log("med", med);
                  {
                    return (
                      <div
                        key={med + Math.random()}
                        style={{
                          borderRadius: 100,
                          backgroundColor: MedicineInfo[med].color,
                          height: 10,
                          width: 10,
                        }}
                      />
                    );
                  }
                }
              })}
            </div>
          );
        }}
      />
    </div>
  );
}

// const events = {
//   "2026-01-30": ["workout"],
//   "2026-01-31": ["meds", "meeting"],
//   "2026-02-01": ["workout"],
// };

// function formatDate(date) {
//   return date.toISOString().split("T")[0];
// }

// export default function CalendarComponent() {
//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <Calendar
//         tileContent={({ date, view }) => {
//           if (view !== "month") return null;

//           const dayEvents = events[formatDate(date)];
//           if (!dayEvents) return null;

//           return (
//             <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
//               {dayEvents.includes("workout") && <Dumbbell size={14} />}
//               {dayEvents.includes("meds") && <Pill size={14} />}
//               {dayEvents.includes("meeting") && <CalendarDays size={14} />}
//             </div>
//           );
//         }}
//       />
//     </div>
//   );
// }
