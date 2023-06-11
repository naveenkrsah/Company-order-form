import React, { useState } from "react";
// import Branding from "./Branding";
// import Director from "./Director";
// import Electricals from "./Electricals";
// import Meeting from "./Meeting";
// import WoodenPlatform from "./WoodenPlatform";

const WoddenStructure = () => {
  const [woodenPlatformdata, setWoodenPlatformdata] = useState({
    upto25mm: { value: "", quantity: "" },
    upto100mm: { value: "", quantity: "" },
    upto150mm: { value: "", quantity: "" },
    single18mm: { value: "", quantity: "" },
    double18mm: { value: "", quantity: "" },
  });

  const [floorCoveringData, setFloorCoveringData] = useState({
    punched: { value: "", quantity: "" },
    velore: { value: "", quantity: "" },
    loop: { value: "", quantity: "" },
    pvc: { value: "", quantity: "" },
    wooden: { value: "", quantity: "" },
    laminated: { value: "", quantity: "" },
    acrylic: { value: "", quantity: "" },
    edgelit: { value: "", quantity: "" },
  });

  const [wallData, setWallData] = useState({
    mdfSurface :{value: "", quantity: ""},
    plywoodSurface:{value: "", quantity: ""}
  })

  return (
    <div className="space-y-10 my-20">
      {/* <WoodenPlatform/>
      <Meeting/>
      <Director/>
      <Branding/>
      <Electricals/> */}
      <h1 className="text-3xl text-center">Wooden Structure</h1>
      <h1 className="text-center">WOODEN PLATFORM</h1>
      <form className="bg-zinc-200  space-y-4 px-20 mt-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Wooden Platform to raise the height up to 25mm"}
              id="w1"
              onChange={(e) => {
                if (e.target.checked) {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    upto25mm: {
                      ...woodenPlatformdata.upto25mm,
                      value: e.target.value,
                    },
                  });
                } else {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    upto25mm: "",
                  });
                }
              }}
            />
            {console.log(woodenPlatformdata)}
            <label htmlFor="w1">
              Wooden Platform to raise the height up to 25mm :
            </label>
          </span>

          {woodenPlatformdata.upto25mm.value ===
            "Wooden Platform to raise the height up to 25mm" && (
            <select
              name=""
              id="fc"
              onChange={(e) =>
                setWoodenPlatformdata({
                  ...woodenPlatformdata,
                  upto25mm: {
                    ...woodenPlatformdata.upto25mm,
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
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Wooden Platform to raise the height up to 100mm"}
              id="w2"
              onChange={(e) => {
                if (e.target.checked) {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    upto100mm: {
                      ...woodenPlatformdata.upto100mm,
                      value: e.target.value,
                    },
                  });
                } else {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    upto100mm: "",
                  });
                }
              }}
            />
            <label htmlFor="w2">
              Wooden Platform to raise the height up to 100mm :
            </label>
          </span>
          {woodenPlatformdata.upto100mm.value ===
            "Wooden Platform to raise the height up to 100mm" && (
            <select
              name=""
              id="fc"
              onChange={(e) =>
                setWoodenPlatformdata({
                  ...woodenPlatformdata,
                  upto100mm: {
                    ...woodenPlatformdata.upto100mm,
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
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Wooden Platform to raise the height up to 150mm"}
              id="w3"
              onChange={(e) => {
                if (e.target.checked) {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    upto150mm: {
                      ...woodenPlatformdata.upto150mm,
                      value: e.target.value,
                    },
                  });
                } else {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    upto150mm: "",
                  });
                }
              }}
            />
            <label htmlFor="w3">
              Wooden Platform to raise the height up to 150mm :
            </label>
          </span>
          {woodenPlatformdata.upto150mm.value ===
            "Wooden Platform to raise the height up to 150mm" && (
            <select
              name=""
              id="fc"
              onChange={(e) =>
                setWoodenPlatformdata({
                  ...woodenPlatformdata,
                  upto150mm: {
                    ...woodenPlatformdata.upto150mm,
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
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"Wooden platform with MS base with Single 18mm Plywood"}
              id="w4"
              onChange={(e) => {
                if (e.target.checked) {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    single18mm: {
                      ...woodenPlatformdata.single18mm,
                      value: e.target.value,
                    },
                  });
                } else {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    single18mm: "",
                  });
                }
              }}
            />
            <label htmlFor="w4">
              Wooden platform with MS base with Single 18mm Plywood :
            </label>
          </span>
          {woodenPlatformdata.single18mm.value ===
            "Wooden platform with MS base with Single 18mm Plywood" && (
            <select
              name=""
              id="fc"
              onChange={(e) =>
                setWoodenPlatformdata({
                  ...woodenPlatformdata,
                  single18mm: {
                    ...woodenPlatformdata.single18mm,
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
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              value={"Wooden platform with MS base with Double 18mm Plywood"}
              name=""
              id="w5"
              onChange={(e) => {
                if (e.target.checked) {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    double18mm: {
                      ...woodenPlatformdata.double18mm,
                      value: e.target.value,
                    },
                  });
                } else {
                  setWoodenPlatformdata({
                    ...woodenPlatformdata,
                    double18mm: "",
                  });
                }
              }}
            />
            <label htmlFor="w5">
              Wooden platform with MS base with Double 18mm Plywood :
            </label>
          </span>
          {woodenPlatformdata.double18mm.value ===
            "Wooden platform with MS base with Double 18mm Plywood" && (
            <select
              name=""
              id="fc"
              onChange={(e) =>
                setWoodenPlatformdata({
                  ...woodenPlatformdata,
                  double18mm: {
                    ...woodenPlatformdata.double18mm,
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
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
        </div>
      </form>

      <h1 className="text-center">FLOOR COVERING</h1>
      <form className="bg-zinc-200  space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              value={"All new Niddle Punched Carpet to be used"}
              name=""
              id="f1"
              onChange={(e) => {
                if (e.target.checked) {
                  setFloorCoveringData({
                    ...floorCoveringData,
                    punched: {
                      ...floorCoveringData.punched,
                      value:e.target.value,
                    },
                  });
                } else {
                  setFloorCoveringData({ ...floorCoveringData, punched: "" });
                }
              }}
            />

            <label htmlFor="f1">
              All new Niddle Punched Carpet to be used :
            </label>
          </span>
          {floorCoveringData.punched.value ===
            "All new Niddle Punched Carpet to be used" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setFloorCoveringData({
                  ...floorCoveringData,
                  punched: {
                    ...floorCoveringData.punched,
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
              value={"All new Velore Carpet to be used"}
              name=""
              id="f2"
              onChange={(e) => {
                if (e.target.checked) {
                  setFloorCoveringData({
                    ...floorCoveringData,
                    velore: {
                      ...floorCoveringData.velore,
                      value: e.target.value,
                    },
                  });
                } else {
                  setFloorCoveringData({ ...floorCoveringData, velore: "" });
                }
              }}
            />

            <label htmlFor="f2">All new Velore Carpet to be used : </label>
          </span>
          {floorCoveringData.velore.value ===
            "All new Velore Carpet to be used" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setFloorCoveringData({
                  ...floorCoveringData,
                  velore: {
                    ...floorCoveringData.velore,
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
              value={"All new Loop pile carpet to be used"}
              name=""
              id="fz"
              onChange={(e) => {
                if (e.target.checked) {
                  setFloorCoveringData({
                    ...floorCoveringData,
                    loop: {
                      ...floorCoveringData.loop,
                      value: e.target.value,
                    },
                  });
                } else {
                  setFloorCoveringData({ ...floorCoveringData, loop: "" });
                }
              }}
            />

            <label htmlFor="fz">All new Loop pile carpet to be used : </label>
          </span>
          {floorCoveringData.loop.value ===
            "All new Loop pile carpet to be used" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setFloorCoveringData({
                  ...floorCoveringData,
                  loop: {
                    ...floorCoveringData.loop,
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
              value={"Vinyl / PVC Flooring"}
              name=""
              id="f3"
              onChange={(e) => {
                if (e.target.checked) {
                  setFloorCoveringData({
                    ...floorCoveringData,
                    pvc: {
                      ...floorCoveringData.pvc,
                      value: e.target.value,
                    },
                  });
                } else {
                  setFloorCoveringData({ ...floorCoveringData, pvc: "" });
                }
              }}
            />

            <label htmlFor="f3">Vinyl / PVC Flooring : </label>
          </span>
          {floorCoveringData.pvc.value === "Vinyl / PVC Flooring" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setFloorCoveringData({
                  ...floorCoveringData,
                  pvc: {
                    ...floorCoveringData.pvc,
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
              value={
                "Wooden flooring AC4 Grade to be used as shown in the design"
              }
              name=""
              id="f4"
              onChange={(e) => {
                if (e.target.checked) {
                  setFloorCoveringData({
                    ...floorCoveringData,
                    wooden: {
                      ...floorCoveringData.wooden,
                      value: e.target.value,
                    },
                  });
                } else {
                  setFloorCoveringData({ ...floorCoveringData, wooden: "" });
                }
              }}
            />

            <label htmlFor="f4">
              Wooden flooring AC4 Grade to be used as shown in the design :
            </label>
          </span>
          {floorCoveringData.wooden.value ===
            "Wooden flooring AC4 Grade to be used as shown in the design" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setFloorCoveringData({
                  ...floorCoveringData,
                  wooden: {
                    ...floorCoveringData.wooden,
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
              value={"Laminated flooring as shown in the design"}
              name=""
              id="f5"
              onChange={(e) => {
                if (e.target.checked) {
                  setFloorCoveringData({
                    ...floorCoveringData,
                    laminated: {
                      ...floorCoveringData.laminated,
                      value: e.target.value,
                    },
                  });
                } else {
                  setFloorCoveringData({ ...floorCoveringData, laminated: "" });
                }
              }}
            />

            <label htmlFor="f5">
              Laminated flooring as shown in the design :
            </label>
          </span>
          {floorCoveringData.laminated.value ===
            "Laminated flooring as shown in the design" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setFloorCoveringData({
                  ...floorCoveringData,
                  laminated: {
                    ...floorCoveringData.laminated,
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
              value={"Acrylic backlit floor"}
              name=""
              id="f6"
              onChange={(e) => {
                if (e.target.checked) {
                  setFloorCoveringData({
                    ...floorCoveringData,
                    acrylic: {
                      ...floorCoveringData.acrylic,
                      value: e.target.value,
                    },
                  });
                } else {
                  setFloorCoveringData({ ...floorCoveringData, acrylic: "" });
                }
              }}
            />

            <label htmlFor="f6">Acrylic backlit floor : </label>
          </span>
          {floorCoveringData.acrylic.value === "Acrylic backlit floor" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setFloorCoveringData({
                  ...floorCoveringData,
                  acrylic: {
                    ...floorCoveringData.acrylic,
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
              value={"Edge Lit Floor"}
              name=""
              id="f7"
              onChange={(e) => {
                if (e.target.checked) {
                  setFloorCoveringData({
                    ...floorCoveringData,
                    edgelit: {
                      ...floorCoveringData.edgelit,
                      value: e.target.value,
                    },
                  });
                } else {
                  setFloorCoveringData({ ...floorCoveringData, edgelit: "" });
                }
              }}
            />

            <label htmlFor="f7">Edge Lit Floor : </label>
          </span>
          {floorCoveringData.edgelit.value === "Edge Lit Floor" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setFloorCoveringData({
                  ...floorCoveringData,
                  edgelit: {
                    ...floorCoveringData.edgelit,
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
      {console.log( floorCoveringData)}
      </form>
      <h1 className="text-center">WALLS</h1>
      <form className="bg-zinc-200  gap-2 space-y-4 px-20">
        <div className="grid grid-cols-2">
        <span className="space-x-2">
          <input
            type="checkbox"
            value={
              "Walls made with frame using 18mm Plywood & MDF on surface for best paint finish"
            }
            name=""
            id="w11"
            onChange={(e) => {
              if (e.target.checked) {
                setWallData({
                  ...wallData,
                  mdfSurface: {
                    ...wallData.mdfSurface,
                    value: e.target.value,
                  },
                });
              } else {
                setWallData({
                  ...wallData,
                  mdfSurface: "",
                });
              }
            }}
          />

          <label htmlFor="w11">
            Walls made with frame using 18mm Plywood & MDF on surface for best
            paint finish :
          </label>
        </span>
        {wallData.mdfSurface.value === "Walls made with frame using 18mm Plywood & MDF on surface for best paint finish" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setWallData({
                  ...wallData,
                  mdfSurface: {
                    ...wallData.mdfSurface,
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
            value={
              "Walls made with frame using 18mm Plywood & 6mm-8mm plywood on surface for pasting Laminate"
            }
            name=""
            id="w22"
            onChange={(e) => {
              if (e.target.checked) {
                setWallData({
                  ...wallData,
                  plywoodSurface: {
                    ...wallData.plywoodSurface,
                    value: e.target.value,
                  },
                });
              } else {
                setWallData({
                  ...wallData,
                  plywoodSurface: "",
                });
              }
            }}
          />

          <label htmlFor="w22">
            Walls made with frame using 18mm Plywood & 6mm-8mm plywood on
            surface for pasting Laminate :
          </label>
        </span>
        {wallData.plywoodSurface.value === "Walls made with frame using 18mm Plywood & 6mm-8mm plywood on surface for pasting Laminate" && (
            <select
              name=""
              id="f1"
              onChange={(e) =>
                setWallData({
                  ...wallData,
                  plywoodSurface: {
                    ...wallData.plywoodSurface,
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
          {console.log(wallData)}
      </form>
      <h1 className="text-center">FASCIA STRUCTURE</h1>
      <form className="bg-red-300 grid grid-cols-2 gap-2 space-y-4 px-20">
        <p>
          1 sided Decorative Fascia structure as shown in the design. 2 sided
          Decorative Fascia structure as shown in the design. 3 sided Decorative
          Fascia structure as shown in the design. 4 sided Decorative Fascia
          structure as shown in the design.
        </p>
      </form>

      <h1 className="text-center">SPECIAL ELEMENTS</h1>
      <form className="bg-zinc-200 grid grid-cols-2 gap-2 space-y-4 px-20">
        <label htmlFor="sp1">
          Customized reception table as shown in the design :
        </label>
        <textarea name="" id="sp1" cols="10" rows="2"></textarea>

        <label htmlFor="sp2">
          Panels for product display as shown in the design :
        </label>
        <textarea name="" id="sp2" cols="10" rows="2"></textarea>

        <label htmlFor="sp3">
          Podiums for product display as shown in the design :
        </label>
        <textarea name="" id="sp3" cols="10" rows="2"></textarea>

        <label htmlFor="sp4">
          Shelves for product display as shown in the design :
        </label>
        <textarea name="" id="sp4" cols="10" rows="2"></textarea>

        <label htmlFor="sp5">Green Creepers as shown in the design : </label>
        <textarea name="" id="sp5" cols="10" rows="2"></textarea>

        <label htmlFor="sp6">Vertical Garden as shown in the design : </label>
        <textarea name="" id="sp6" cols="10" rows="2"></textarea>

        <label htmlFor="sp7">
          Water fall on Glass as shown in the design :
        </label>
        <textarea name="" id="sp7" cols="10" rows="2"></textarea>
      </form>
    </div>
  );
};

export default WoddenStructure;
