import React, { useState } from "react";

const WoodenPlatform = () => {
  const [woodenPlatformdata, setWoodenPlatformdata] = useState({
    woodenPlatform: {
      type: "",
      quantity: "",
    },
    floorCovering: {
      type: "",
      quantity: "",
    },
    walls: {
      type: "",
      quantity: "",
    },
    fasciaStructure: "",
    specialElements: {
      type: "",
      text: "",
    },
  });

  return (
    <div className="space-y-10 my-20">
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="wp">WOODEN PLATFORM</label>
        <select
          name=""
          id="wp"
          onChange={(e) =>
            setWoodenPlatformdata({
              ...woodenPlatformdata,
              woodenPlatform: {
                type: e.target.value,
              },
            })
          }
        >
          {console.log(woodenPlatformdata)}
          <option value="Wooden Platform to raise the height up to 25mm">
            Wooden Platform to raise the height up to 25mm
          </option>
          <option value="Wooden Platform to raise the height up to 100mm">
            Wooden Platform to raise the height up to 100mm
          </option>
          <option value="Wooden Platform to raise the height up to 150mm">
            Wooden Platform to raise the height up to 150mm
          </option>
          <option value="Wooden platform with MS base with Single 18mm Plywood">
            Wooden platform with MS base with Single 18mm Plywood
          </option>
          <option value="Wooden platform with MS base with Double 18mm Plywood">
            Wooden platform with MS base with Double 18mm Plywood
          </option>
        </select>
        <select
          name=""
          id="wp"
          onChange={(e) =>
            setWoodenPlatformdata({
              ...woodenPlatformdata,
              woodenPlatform: {
                ...woodenPlatformdata.woodenPlatform,
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
      </form>
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="fc">FLOOR COVERING</label>
        <select
          name=""
          id="fc"
          onChange={(e) =>
            setWoodenPlatformdata({
              ...woodenPlatformdata,
              floorCovering: {
                type: e.target.value,
              },
            })
          }
        >
          <option value="All new Niddle Punched Carpet to be used">
            All new Niddle Punched Carpet to be used
          </option>
          <option value="All new Velore Carpet to be used ">
            All new Velore Carpet to be used{" "}
          </option>
          <option value="All new Loop pile carpet to be used">
            All new Loop pile carpet to be used
          </option>
          <option value="Vinyl / PVC Flooring">Vinyl / PVC Flooring</option>
          <option value="Wooden flooring AC4 Grade to be used as shown in the design">
            Wooden flooring AC4 Grade to be used as shown in the design
          </option>
          <option value="Laminated flooring as shown in the design">
            Laminated flooring as shown in the design
          </option>
          <option value="Acrylic backlit floor">Acrylic backlit floor</option>
          <option value="Edge Lit Floor">Edge Lit Floor</option>
        </select>
        <select
          name=""
          id="fc"
          onChange={(e) =>
            setWoodenPlatformdata({
              ...woodenPlatformdata,
              floorCovering: {
                ...woodenPlatformdata.floorCovering,
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
      </form>
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="w">WALLS</label>
        <select
          name=""
          id="w"
          onChange={(e) =>
            setWoodenPlatformdata({
              ...woodenPlatformdata,
              walls: { type: e.target.value },
            })
          }
        >
          <option value="Walls made with frame using 18mm Plywood & MDF on surface for best paint finish">
            Walls made with frame using 18mm Plywood & MDF on surface for best
            paint finish
          </option>
          <option value="Walls made with frame using 18mm Plywood & 6mm-8mm plywood on surface for pasting Laminate">
            Walls made with frame using 18mm Plywood & 6mm-8mm plywood on
            surface for pasting Laminate
          </option>
        </select>
        <select
          name=""
          id="w"
          onChange={(e) =>
            setWoodenPlatformdata({
              ...woodenPlatformdata,
              walls: { ...woodenPlatformdata.walls, quantity: e.target.value },
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
      </form>
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="fs">FASCIA STRUCTURE</label>
        <select
          name=""
          id="fs"
          onChange={(e) =>
            setWoodenPlatformdata({
              ...woodenPlatformdata,
              fasciaStructure: e.target.value,
            })
          }
        >
          <option value="1 sided Decorative Fascia structure as shown in the design">
            1 sided Decorative Fascia structure as shown in the design
          </option>
          <option value="2 sided Decorative Fascia structure as shown in the design">
            2 sided Decorative Fascia structure as shown in the design
          </option>
          <option value="3 sided Decorative Fascia structure as shown in the design">
            3 sided Decorative Fascia structure as shown in the design
          </option>
          <option value="4 sided Decorative Fascia structure as shown in the design">
            4 sided Decorative Fascia structure as shown in the design
          </option>
        </select>
      </form>
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="se">SPECIAL ELEMENTS</label>
        <select
          name=""
          id=""
          onChange={(e) =>
            setWoodenPlatformdata({
              ...woodenPlatformdata,
              specialElements:{type:e.target.value},
            })
          }
        >
          <option value="Customized reception table as shown in the design">
            Customized reception table as shown in the design
          </option>
          <option value="  Panels for product display as shown in the design">
           
            Panels for product display as shown in the design
          </option>
          <option value="Podiums for product display as shown in the design">
            Podiums for product display as shown in the design
          </option>
          <option value="Shelves for product display as shown in the design">
            Shelves for product display as shown in the design
          </option>
          <option value="Green Creepers as shown in the design">
            Green Creepers as shown in the design
          </option>
          <option value="Vertical Garden as shown in the design">
            Vertical Garden as shown in the design
          </option>
          <option value="Water fall on Glass as shown in the design">
            Water fall on Glass as shown in the design
          </option>
        </select>
        <textarea
          name=""
          id="sp7"
          cols="10"
          rows="2"
          placeholder="writting space for narration"
          onChange={(e) =>
            setWoodenPlatformdata({
              ...woodenPlatformdata,
              specialElements: {
                ...woodenPlatformdata.specialElements,
                text:e.target.value
              },
            })
          }
        ></textarea>
      </form>
    </div>
  );
};

export default WoodenPlatform;
