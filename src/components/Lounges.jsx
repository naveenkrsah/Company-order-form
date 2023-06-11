import React, { useState } from "react";

const Lounges = () => {
  const [directorLoungeData, setdirectorLoungeData] = useState({
    glassDoor: { value: "", quantity: "" },
    woodenDoor: { value: "", quantity: "" },
    sofaSeating: { value: "", quantity: "" },
  });

  const [barAreaData, setbarAreaData] = useState({
    barArea: { value: "", quantity: "" },
    barCounter: { value: "", quantity: "" },
  });

  const [pantryData, setpantryData] = useState({
    storageRacks: { value: "", quantity: "" },
    podium: { value: "", quantity: "" },
    teaVendingMachine: { value: "", quantity: "" },
    soupVendingMachine: { value: "", quantity: "" },
    ccdCoffeeMachine: { value: "", quantity: "" },
    smRefrigerator: { value: "", quantity: "" },
    mdRefrigerator: { value: "", quantity: "" },
    deepFreezer: { value: "", quantity: "" },
    oven: { value: "", quantity: "" },
    hotPlate: { value: "", quantity: "" },
  });

  const [storeRoomData, setstoreRoomData] = useState({
    storageRacks: { value: "", quantity: "" },
  });

  const [pantryCumStoreRoom, setpantryCumStoreRoom] = useState({
    storageRacks: { value: "", quantity: "" },
    podium: { value: "", quantity: "" },
    teaVendingMachine: { value: "", quantity: "" },
    soupVendingMachine: { value: "", quantity: "" },
    ccdCoffeeMachine: { value: "", quantity: "" },
    smRefrigerator: { value: "", quantity: "" },
    mdRefrigerator: { value: "", quantity: "" },
    deepFreezer: { value: "", quantity: "" },
    oven: { value: "", quantity: "" },
    hotPlate: { value: "", quantity: "" },
  });

  return (
    <div className="space-y-10 my-20">
      <h1 className="text-center">DIRECTOR'S LOUNGE</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Director's Lounge with glass door"}
              id="l1"
              onChange={(e) => {
                if (e.target.checked) {
                  setdirectorLoungeData({
                    ...directorLoungeData,
                    glassDoor: {
                      ...directorLoungeData.glassDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setdirectorLoungeData({
                    ...directorLoungeData,
                    glassDoor: "",
                  });
                }
              }}
            />
            <label htmlFor="l1">Director's Lounge with glass door :</label>
          </span>
          {directorLoungeData.glassDoor.value ===
            "Director's Lounge with glass door" && (
            <select
              name=""
              id="l1"
              onChange={(e) =>
                setdirectorLoungeData({
                  ...directorLoungeData,
                  glassDoor: {
                    ...directorLoungeData.glassDoor,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Director's Lounge with wooden door with glass in fill"}
              id="l2"
              onChange={(e) => {
                if (e.target.checked) {
                  setdirectorLoungeData({
                    ...directorLoungeData,
                    woodenDoor: {
                      ...directorLoungeData.woodenDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setdirectorLoungeData({
                    ...directorLoungeData,
                    woodenDoor: "",
                  });
                }
              }}
            />
            <label htmlFor="l2">
              Director's Lounge with wooden door with glass in fill :
            </label>
          </span>
          {directorLoungeData.woodenDoor.value ===
            "Director's Lounge with wooden door with glass in fill" && (
            <select
              name=""
              id="l2"
              onChange={(e) =>
                setdirectorLoungeData({
                  ...directorLoungeData,
                  woodenDoor: {
                    ...directorLoungeData.woodenDoor,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Sofa seating with center table"}
              id="l3"
              onChange={(e) => {
                if (e.target.checked) {
                  setdirectorLoungeData({
                    ...directorLoungeData,
                    sofaSeating: {
                      ...directorLoungeData.sofaSeating,
                      value: e.target.value,
                    },
                  });
                } else {
                  setdirectorLoungeData({
                    ...directorLoungeData,
                    sofaSeating: "",
                  });
                }
              }}
            />
            <label htmlFor="l3">Sofa seating with center table :</label>
          </span>
          {directorLoungeData.sofaSeating.value ===
            "Sofa seating with center table" && (
            <select
              name=""
              id="l3"
              onChange={(e) =>
                setdirectorLoungeData({
                  ...directorLoungeData,
                  sofaSeating: {
                    ...directorLoungeData.sofaSeating,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        {console.log(directorLoungeData)}
      </form>

      <h1 className="text-center">BAR AREA</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Bar area as shown in the design"}
              id="b1"
              onChange={(e) => {
                if (e.target.checked) {
                  setbarAreaData({
                    ...barAreaData,
                    barArea: {
                      ...barAreaData.barArea,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbarAreaData({
                    ...barAreaData,
                    barArea: "",
                  });
                }
              }}
            />
            <label htmlFor="b1">Bar area as shown in the design :</label>
          </span>
          {barAreaData.barArea.value === "Bar area as shown in the design" && (
            <select
              name=""
              id="b1"
              onChange={(e) =>
                setbarAreaData({
                  ...barAreaData,
                  barArea: {
                    ...barAreaData.barArea,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Bar Counter as shown in the design"}
              id="b2"
              onChange={(e) => {
                if (e.target.checked) {
                  setbarAreaData({
                    ...barAreaData,
                    barCounter: {
                      ...barAreaData.barCounter,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbarAreaData({
                    ...barAreaData,
                    barCounter: "",
                  });
                }
              }}
            />
            <label htmlFor="b2">Bar Counter as shown in the design :</label>
          </span>
          {barAreaData.barCounter.value ===
            "Bar Counter as shown in the design" && (
            <select
              name=""
              id="b2"
              onChange={(e) =>
                setbarAreaData({
                  ...barAreaData,
                  barCounter: {
                    ...barAreaData.barCounter,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>
        {console.log(barAreaData)}
      </form>

      <h1 className="text-center">PANTRY</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Storage racks"}
              id="p1"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    storageRacks: {
                      ...pantryData.storageRacks,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    storageRacks: "",
                  });
                }
              }}
            />
            <label htmlFor="p1">Storage racks :</label>
          </span>
          {pantryData.storageRacks.value === "Storage racks" && (
            <select
              name=""
              id="p1"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  storageRacks: {
                    ...pantryData.storageRacks,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Podium/ table for keeping coffee/ tea vending machine"}
              id="p2"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    podium: {
                      ...pantryData.podium,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    podium: "",
                  });
                }
              }}
            />
            <label htmlFor="p2">
              Podium/ table for keeping coffee/ tea vending machine :
            </label>
          </span>
          {pantryData.podium.value ===
            "Podium/ table for keeping coffee/ tea vending machine" && (
            <select
              name=""
              id="p2"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  podium: {
                    ...pantryData.podium,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Regular Premix Tea / Coffee vending machine"}
              id="p3"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    teaVendingMachine: {
                      ...pantryData.teaVendingMachine,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    teaVendingMachine: "",
                  });
                }
              }}
            />

            <label htmlFor="p3">
              Regular Premix Tea / Coffee vending machine :
            </label>
          </span>
          {pantryData.teaVendingMachine.value ===
            "Regular Premix Tea / Coffee vending machine" && (
            <select
              name=""
              id="p3"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  teaVendingMachine: {
                    ...pantryData.teaVendingMachine,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Regular premix Tea / Coffee / Soup vending machine"}
              id="p4"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    soupVendingMachine: {
                      ...pantryData.soupVendingMachine,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    soupVendingMachine: "",
                  });
                }
              }}
            />

            <label htmlFor="p4">
              Regular premix Tea / Coffee / Soup vending machine :
            </label>
          </span>
          {pantryData.soupVendingMachine.value ===
            "Regular premix Tea / Coffee / Soup vending machine" && (
            <select
              name=""
              id="p4"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  soupVendingMachine: {
                    ...pantryData.soupVendingMachine,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Café Coffee Day fresh bean coffee machine"}
              id="p5"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    ccdCoffeeMachine: {
                      ...pantryData.ccdCoffeeMachine,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    ccdCoffeeMachine: "",
                  });
                }
              }}
            />

            <label htmlFor="p5">
              Café Coffee Day fresh bean coffee machine :
            </label>
          </span>
          {pantryData.ccdCoffeeMachine.value ===
            "Café Coffee Day fresh bean coffee machine" && (
            <select
              name=""
              id="p5"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  ccdCoffeeMachine: {
                    ...pantryData.ccdCoffeeMachine,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Small refrigerator up to 100 Ltr"}
              id="p6"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    smRefrigerator: {
                      ...pantryData.smRefrigerator,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    smRefrigerator: "",
                  });
                }
              }}
            />

            <label htmlFor="p6">Small refrigerator up to 100 Ltr :</label>
          </span>
          {pantryData.smRefrigerator.value ===
            "Small refrigerator up to 100 Ltr" && (
            <select
              name=""
              id="p6"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  smRefrigerator: {
                    ...pantryData.smRefrigerator,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Medium refrigerator up to 180 Ltr"}
              id="p7"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    mdRefrigerator: {
                      ...pantryData.mdRefrigerator,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    mdRefrigerator: "",
                  });
                }
              }}
            />

            <label htmlFor="p7">Medium refrigerator up to 180 Ltr :</label>
          </span>
          {pantryData.mdRefrigerator.value ===
            "Medium refrigerator up to 180 Ltr" && (
            <select
              name=""
              id="p7"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  mdRefrigerator: {
                    ...pantryData.mdRefrigerator,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Deep Freezer"}
              id="p8"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    deepFreezer: {
                      ...pantryData.deepFreezer,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    deepFreezer: "",
                  });
                }
              }}
            />

            <label htmlFor="p8">Deep Freezer :</label>
          </span>
          {pantryData.deepFreezer.value === "Deep Freezer" && (
            <select
              name=""
              id="p8"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  deepFreezer: {
                    ...pantryData.deepFreezer,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Microwave oven"}
              id="p9"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    oven: {
                      ...pantryData.oven,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    oven: "",
                  });
                }
              }}
            />

            <label htmlFor="p9">Microwave oven :</label>
          </span>
          {pantryData.oven.value === "Microwave oven" && (
            <select
              name=""
              id="p9"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  oven: {
                    ...pantryData.oven,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Hot Plate/ induction plate"}
              id="p10"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryData({
                    ...pantryData,
                    hotPlate: {
                      ...pantryData.hotPlate,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryData({
                    ...pantryData,
                    hotPlate: "",
                  });
                }
              }}
            />

            <label htmlFor="p10">Hot Plate/ induction plate :</label>
          </span>
          {pantryData.hotPlate.value === "Hot Plate/ induction plate" && (
            <select
              name=""
              id="p10"
              onChange={(e) =>
                setpantryData({
                  ...pantryData,
                  hotPlate: {
                    ...pantryData.hotPlate,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>
        {console.log(pantryData)}
      </form>
      <h1 className="text-center">STORE ROOM</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Storage racks"}
              id="s1"
              onChange={(e) => {
                if (e.target.checked) {
                  setstoreRoomData({
                    ...storeRoomData,
                    storageRacks: {
                      ...storeRoomData.storageRacks,
                      value: e.target.value,
                    },
                  });
                } else {
                  setstoreRoomData({
                    ...storeRoomData,
                    storageRacks: "",
                  });
                }
              }}
            />
            <label htmlFor="s1">Storage racks :</label>
          </span>
          {storeRoomData.storageRacks.value === "Storage racks" && (
            <select
              name=""
              id="s1"
              onChange={(e) =>
                setstoreRoomData({
                  ...storeRoomData,
                  storageRacks: {
                    ...storeRoomData.storageRacks,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>
        {console.log(storeRoomData)}
      </form>
      <h1 className="text-center">PANTRY CUM STORE ROOM</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Storage racks"}
              id="pc1"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    storageRacks: {
                      ...pantryCumStoreRoom.storageRacks,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    storageRacks: "",
                  });
                }
              }}
            />
            <label htmlFor="pc1">Storage racks :</label>
          </span>
          {pantryCumStoreRoom.storageRacks.value === "Storage racks" && (
            <select
              name=""
              id="pc1"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  storageRacks: {
                    ...pantryCumStoreRoom.storageRacks,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Podium/ table for keeping coffee/ tea vending machine"}
              id="pc2"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    podium: {
                      ...pantryCumStoreRoom.podium,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    podium: "",
                  });
                }
              }}
            />

            <label htmlFor="pc2">
              Podium/ table for keeping coffee/ tea vending machine :
            </label>
          </span>
          {pantryCumStoreRoom.podium.value ===
            "Podium/ table for keeping coffee/ tea vending machine" && (
            <select
              name=""
              id="pc2"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  podium: {
                    ...pantryCumStoreRoom.podium,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Regular Tea / Coffee vending machine"}
              id="pc3"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    teaVendingMachine: {
                      ...pantryCumStoreRoom.teaVendingMachine,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    teaVendingMachine: "",
                  });
                }
              }}
            />

            <label htmlFor="pc3">Regular Tea / Coffee vending machine :</label>
          </span>
          {pantryCumStoreRoom.teaVendingMachine.value ===
            "Regular Tea / Coffee vending machine" && (
            <select
              name=""
              id="pc3"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  teaVendingMachine: {
                    ...pantryCumStoreRoom.teaVendingMachine,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Regular Tea / Coffee / Soup vending machine"}
              id="pc4"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    soupVendingMachine: {
                      ...pantryCumStoreRoom.soupVendingMachine,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    soupVendingMachine: "",
                  });
                }
              }}
            />

            <label htmlFor="pc4">
              Regular Tea / Coffee / Soup vending machine :
            </label>
          </span>
          {pantryCumStoreRoom.soupVendingMachine.value ===
            "Regular Tea / Coffee / Soup vending machine" && (
            <select
              name=""
              id="pc4"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  soupVendingMachine: {
                    ...pantryCumStoreRoom.soupVendingMachine,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Café Coffee Day fresh bean coffee machine"}
              id="pc5"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    ccdCoffeeMachine: {
                      ...pantryCumStoreRoom.ccdCoffeeMachine,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    ccdCoffeeMachine: "",
                  });
                }
              }}
            />

            <label htmlFor="pc5">
              Café Coffee Day fresh bean coffee machine :
            </label>
          </span>
          {pantryCumStoreRoom.ccdCoffeeMachine.value ===
            "Café Coffee Day fresh bean coffee machine" && (
            <select
              name=""
              id="pc5"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  ccdCoffeeMachine: {
                    ...pantryCumStoreRoom.ccdCoffeeMachine,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Small refrigerator up to 100 Ltr"}
              id="pc6"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    smRefrigerator:{
                      ...pantryCumStoreRoom.smRefrigerator,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    smRefrigerator: "",
                  });
                }
              }}
            />

            <label htmlFor="pc6">Small refrigerator up to 100 Ltr :</label>
          </span>
          {pantryCumStoreRoom.smRefrigerator.value ===
            "Small refrigerator up to 100 Ltr" && (
            <select
              name=""
              id="pc6"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  smRefrigerator: {
                    ...pantryCumStoreRoom.smRefrigerator,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Medium refrigerator up to 180 Ltr"}
              id="pc7"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    mdRefrigerator: {
                      ...pantryCumStoreRoom.mdRefrigerator,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    mdRefrigerator: "",
                  });
                }
              }}
            />

            <label htmlFor="pc7">Medium refrigerator up to 180 Ltr :</label>
          </span>
          {pantryCumStoreRoom.mdRefrigerator.value ===
            "Medium refrigerator up to 180 Ltr" && (
            <select
              name=""
              id="pc7"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  mdRefrigerator: {
                    ...pantryCumStoreRoom.mdRefrigerator,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Deep Freezer"}
              id="pc8"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    deepFreezer: {
                      ...pantryCumStoreRoom.deepFreezer,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    deepFreezer: "",
                  });
                }
              }}
            />

            <label htmlFor="pc8">Deep Freezer :</label>
          </span>
          {pantryCumStoreRoom.deepFreezer.value === "Deep Freezer" && (
            <select
              name=""
              id="pc8"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  deepFreezer: {
                    ...pantryCumStoreRoom.deepFreezer,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Microwave oven"}
              id="pc9"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    oven: {
                      ...pantryCumStoreRoom.oven,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    oven: "",
                  });
                }
              }}
            />

            <label htmlFor="pc9">Microwave oven :</label>
          </span>
          {pantryCumStoreRoom.oven.value === "Microwave oven" && (
            <select
              name=""
              id="pc9"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  oven: {
                    ...pantryCumStoreRoom.oven,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Hot Plate"}
              id="pc10"
              onChange={(e) => {
                if (e.target.checked) {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    hotPlate: {
                      ...pantryCumStoreRoom.hotPlate,
                      value: e.target.value,
                    },
                  });
                } else {
                  setpantryCumStoreRoom({
                    ...pantryCumStoreRoom,
                    hotPlate: "",
                  });
                }
              }}
            />

            <label htmlFor="pc10">Hot Plate :</label>
          </span>
          {pantryCumStoreRoom.hotPlate.value === "Hot Plate" && (
            <select
              name=""
              id="pc10"
              onChange={(e) =>
                setpantryCumStoreRoom({
                  ...pantryCumStoreRoom,
                  hotPlate: {
                    ...pantryCumStoreRoom.hotPlate,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </div>
        {console.log(pantryCumStoreRoom)}
      </form>
    </div>
  );
};

export default Lounges;
