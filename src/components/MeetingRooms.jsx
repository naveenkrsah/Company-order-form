import React, { useState } from "react";

const MeetingRooms = () => {
  const [meetingRoom1, setMeetingRoom1] = useState({
    glassDoor: { value: "", quantity: "" },
    woodenDoor: { value: "", quantity: "" },
    conferenceTable: { value: "", quantity: "" },
  });
  const [meetingRoom2, setMeetingRoom2] = useState({
    glassDoor: { value: "", quantity: "" },
    woodenDoor: { value: "", quantity: "" },
    conferenceTable: { value: "", quantity: "" },
    sofaSeating: { value: "", quantity: "" },
  });
  const [meetingRoom3, setMeetingRoom3] = useState({
    glassDoor: { value: "", quantity: "" },
    woodenDoor: { value: "", quantity: "" },
    conferenceTable: { value: "", quantity: "" },
    sofaSeating: { value: "", quantity: "" },
  });
  const [meetingRoom4, setMeetingRoom4] = useState({
    glassDoor: { value: "", quantity: "" },
    woodenDoor: { value: "", quantity: "" },
    conferenceTable: { value: "", quantity: "" },
    sofaSeating: { value: "", quantity: "" },
  });

  return (
    <div className="space-y-10 my-20">
      <h1 className="text-center">MEETING ROOM 1</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              id="m1"
              value={"Meeting room with glass door with frosted vinyl"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom1({
                    ...meetingRoom1,
                    glassDoor: {
                      ...meetingRoom1.glassDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom1({ ...meetingRoom1, glassDoor: "" });
                }
              }}
            />
            <label htmlFor="m1">
              Meeting room with glass door with frosted vinyl :
            </label>
          </span>
          {meetingRoom1.glassDoor.value ===
            "Meeting room with glass door with frosted vinyl" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom1({
                  ...meetingRoom1,
                  glassDoor: {
                    ...meetingRoom1.glassDoor,
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
          {console.log(meetingRoom1)}
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              id="m2"
              value={
                "Meeting room with wooden door with glass infill with frosted vinyl"
              }
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom1({
                    ...meetingRoom1,
                    woodenDoor: {
                      ...meetingRoom1.woodenDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom1({ ...meetingRoom1, woodenDoor: "" });
                }
              }}
            />

            <label htmlFor="m2">
              Meeting room with wooden door with glass infill with frosted vinyl
              :
            </label>
          </span>
          {meetingRoom1.woodenDoor.value ===
            "Meeting room with wooden door with glass infill with frosted vinyl" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom1({
                  ...meetingRoom1,
                  woodenDoor: {
                    ...meetingRoom1.woodenDoor,
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
              id="m3"
              value={"Customized Table for Confrence"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom1({
                    ...meetingRoom1,
                    conferenceTable: {
                      ...meetingRoom1.conferenceTable,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom1({
                    ...meetingRoom1,
                    conferenceTable: "",
                  });
                }
              }}
            />
            <label htmlFor="m3">Customized Table for Confrence :</label>
          </span>
          {meetingRoom1.conferenceTable.value ===
            "Customized Table for Confrence" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom1({
                  ...meetingRoom1,
                  conferenceTable: {
                    ...meetingRoom1.conferenceTable,
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
      </form>
      <h1 className="text-center">MEETING ROOM 2</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              id="m4"
              value={"Meeting room with glass door"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom2({
                    ...meetingRoom2,
                    glassDoor: {
                      ...meetingRoom2.glassDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom2({ ...meetingRoom2, glassDoor: "" });
                }
              }}
            />
            <label htmlFor="m4">Meeting room with glass door :</label>
          </span>
          {meetingRoom2.glassDoor.value === "Meeting room with glass door" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom2({
                  ...meetingRoom2,
                  glassDoor: {
                    ...meetingRoom2.glassDoor,
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
              id="m5"
              value={"Meeting room with wooden door with glass infill"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom2({
                    ...meetingRoom2,
                    woodenDoor: {
                      ...meetingRoom2.woodenDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom2({ ...meetingRoom2, woodenDoor: "" });
                }
              }}
            />
            <label htmlFor="m5">
              Meeting room with wooden door with glass infill :
            </label>
          </span>
          {meetingRoom1.woodenDoor.value ===
            "Meeting room with wooden door with glass infill" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom2({
                  ...meetingRoom2,
                  woodenDoor: {
                    ...meetingRoom2.woodenDoor,
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
              id="m6"
              value={"Customized Confrence table"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom2({
                    ...meetingRoom2,
                    conferenceTable: {
                      ...meetingRoom2.conferenceTable,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom2({ ...meetingRoom2, conferenceTable: "" });
                }
              }}
            />
            <label htmlFor="m6">Customized Confrence table :</label>
          </span>
          {meetingRoom1.conferenceTable.value ===
            "Customized Confrence table" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom2({
                  ...meetingRoom2,
                  conferenceTable: {
                    ...meetingRoom2.conferenceTable,
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
              id="m7"
              value={"Sofa seating with center table"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom2({
                    ...meetingRoom2,
                    sofaSeating: {
                      ...meetingRoom2.sofaSeating,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom2({ ...meetingRoom2, sofaSeating: "" });
                }
              }}
            />
            <label htmlFor="m7">Sofa seating with center table :</label>
          </span>
          {meetingRoom2.sofaSeating.value ===
            "Sofa seating with center table" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom2({
                  ...meetingRoom2,
                  sofaSeating: {
                    ...meetingRoom2.sofaSeating,
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
      </form>

      <h1 className="text-center">MEETING ROOM 3</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              id="m8"
              value={"Meeting room with glass door"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom3({
                    ...meetingRoom3,
                    glassDoor: {
                      ...meetingRoom3.glassDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom3({ ...meetingRoom3, glassDoor: "" });
                }
              }}
            />
            <label htmlFor="m8">Meeting room with glass door :</label>
          </span>
          {meetingRoom3.glassDoor.value === "Meeting room with glass door" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom3({
                  ...meetingRoom3,
                  glassDoor: {
                    ...meetingRoom3.glassDoor,
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
              id="m9"
              value={"Meeting room with wooden door with glass infill"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom3({
                    ...meetingRoom3,
                    woodenDoor: {
                      ...meetingRoom3.woodenDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom3({ ...meetingRoom3, woodenDoor: "" });
                }
              }}
            />
            <label htmlFor="m9">
              Meeting room with wooden door with glass infill :
            </label>
          </span>
          {meetingRoom3.woodenDoor.value ===
            "Meeting room with wooden door with glass infill" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom3({
                  ...meetingRoom3,
                  woodenDoor: {
                    ...meetingRoom3.woodenDoor,
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
              id="m10"
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom3({
                    ...meetingRoom3,
                    conferenceTable: {
                      ...meetingRoom3.conferenceTable,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom3({ ...meetingRoom3, conferenceTable: "" });
                }
              }}
            />
            <label htmlFor="m10">Customized Confrence table :</label>
          </span>
          {meetingRoom3.conferenceTable.value ===
            "Meeting room with glass door with frosted vinyl" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom3({
                  ...meetingRoom3,
                  conferenceTable: {
                    ...meetingRoom3.conferenceTable,
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
              id="m11"
              value={"Sofa seating with center table"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom3({
                    ...meetingRoom3,
                    sofaSeating: {
                      ...meetingRoom3.sofaSeating,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom3({ ...meetingRoom3, sofaSeating: "" });
                }
              }}
            />
            <label htmlFor="m11">Sofa seating with center table :</label>
          </span>
          {meetingRoom3.sofaSeating.value ===
            "Sofa seating with center table" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom3({
                  ...meetingRoom3,
                  sofaSeating: {
                    ...meetingRoom3.sofaSeating,
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
      </form>

      <h1 className="text-center">MEETING ROOM 4</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              id="m12"
              value={"Meeting room with glass door"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom4({
                    ...meetingRoom4,
                    glassDoor: {
                      ...meetingRoom4.glassDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom4({ ...meetingRoom4, glassDoor: "" });
                }
              }}
            />
            <label htmlFor="m12">Meeting room with glass door :</label>
          </span>
          {meetingRoom4.glassDoor.value === "Meeting room with glass door" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom4({
                  ...meetingRoom4,
                  glassDoor: {
                    ...meetingRoom4.glassDoor,
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
              id="m13"
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom4({
                    ...meetingRoom4,
                    woodenDoor: {
                      ...meetingRoom4.woodenDoor,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom4({ ...meetingRoom4, woodenDoor: "" });
                }
              }}
            />
            <label htmlFor="m13">
              Meeting room with wooden door with glass infill :
            </label>
          </span>
          {meetingRoom4.woodenDoor.value ===
            "Meeting room with glass door with frosted vinyl" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom4({
                  ...meetingRoom4,
                  woodenDoor: {
                    ...meetingRoom4.woodenDoor,
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
              id="m14"
              value={"Customized Confrence table"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom4({
                    ...meetingRoom4,
                    conferenceTable: {
                      ...meetingRoom4.conferenceTable,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom4({ ...meetingRoom4, conferenceTable: "" });
                }
              }}
            />
            <label htmlFor="m14">Customized Confrence table :</label>
          </span>
          {meetingRoom4.conferenceTable.value ===
            "Customized Confrence table" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom4({
                  ...meetingRoom4,
                  conferenceTable: {
                    ...meetingRoom4.conferenceTable,
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
              id="m15"
              value={"Sofa seating with center table"}
              onChange={(e) => {
                if (e.target.checked) {
                  setMeetingRoom4({
                    ...meetingRoom4,
                    sofaSeating: {
                      ...meetingRoom4.sofaSeating,
                      value: e.target.value,
                    },
                  });
                } else {
                  setMeetingRoom4({ ...meetingRoom4, sofaSeating: "" });
                }
              }}
            />
            <label htmlFor="m15">Sofa seating with center table :</label>
          </span>
          {meetingRoom4.sofaSeating.value ===
            "Sofa seating with center table" && (
            <select
              name=""
              id="m1"
              onChange={(e) =>
                setMeetingRoom4({
                  ...meetingRoom4,
                  sofaSeating: {
                    ...meetingRoom4.sofaSeating,
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
      </form>
    </div>
  );
};

export default MeetingRooms;
