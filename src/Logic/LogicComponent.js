const medicineFreq = {
  "metXL-25": 1,
  "oxra-10": 1,
  omnacortil: 4,
  febuget: 2,
  zavetox: 1,
  renoque: 2,
};

export const MedicineInfo = {
  "metXL-25": {
    color: "#ff0000",
    name: "Metoprolol-XL 25mg",
  },
  "oxra-10": {
    color: "#008080",
    name: "Oxra 10mg",
  },
  omnacortil: {
    color: "#0000ff",
    name: "Omnacortil 2.5mg",
  },
  febuget: {
    color: "#794044",
    name: "Febuxostat 40mg",
  },
  zavetox: {
    color: "#ffd700",
    name: "Zavetox",
  },
  renoque: {
    color: "#696969",
    name: "Renoque",
  },
};

function CreateCurrentDayMedicines() {
  return {
    "metXL-25": false,
    "oxra-10": false,
    omnacortil: false,
    febuget: false,
    zavetox: false,
    renoque: false,
  };
}

export default function CoreLogic(date) {
  const startDate = "2025-12-31";
  const currentDate = date;
  //Get Number of days between current date and start date
  const daysDiff = Math.abs(
    (new Date(startDate).setHours(0, 0, 0, 0) -
      new Date(currentDate).setHours(0, 0, 0, 0)) /
      86400000,
  );

  let currentDayMeds = CreateCurrentDayMedicines();

  Object.entries(medicineFreq).forEach(([med, freq]) => {
    if (freq === 1 || daysDiff % freq === 0) {
      currentDayMeds[med] = true;
    }
  });

  return currentDayMeds;
}
