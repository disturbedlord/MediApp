import { MedicineInfo } from "../Logic/LogicComponent";

export default function LegendComponent() {
  return (
    <div>
      <div style={{ fontSize: 25, fontStyle: "italic bold" }}>Legend</div>
      <div>
        {Object.entries(MedicineInfo).map(([key, val]) => {
          return (
            <div
              key={key}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderRadius: 100,
                  backgroundColor: val.color,
                  height: 12,
                  width: 12,
                }}
              />
              {val.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
