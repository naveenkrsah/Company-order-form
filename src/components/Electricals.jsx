import React, { useState } from "react";

const Electricals = () => {
  const [selectedValue, setSelectedValue] = useState(0);

  const numberOptions = Array.from({ length: 100 }, (_, i) => i + 1);
  return (
    <div className="space-y-10 my-20">
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="e">ELECTRICALS</label>
        <select name="" id="e">
          <option value="16amp. Power point in pantry area for tea coffee vending machine, refrigerator & other equipments">
            16amp. Power point in pantry area for tea coffee vending machine,
            refrigerator & other equipments
          </option>
          <option value="16amp. Power point in bar area for tea coffee vending machine, refrigerator & other equipments">
            16amp. Power point in bar area for tea coffee vending machine,
            refrigerator & other equipments
          </option>
          <option value="5 amp. power points in stands for mobile phone & laptop charging">
            5 amp. power points in stands for mobile phone & laptop charging
          </option>
          <option value="Power connection for running your equipments (if needed from our side)">
            Power connection for running your equipments (if needed from our
            side)
          </option>
        </select>
        <select name="" id="e">
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
        <textarea
          className="col-span-3"
          name=""
          id=""
          cols="30"
          rows="3"
          placeholder="mention something extra here"
        ></textarea>
      </form>
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="i">ILLUMINATION</label>
        <span>
          <h1>Stand to be illuminated using</h1>
          <select name="" id="i">
            <option value="LED consealed lights. 4 inch">
              LED consealed lights. 4"
            </option>
            <option value="LED consealed lights. 6 inch">
              LED consealed lights. 6"
            </option>
            <option value="LED Spot Lights">LED Spot Lights</option>
            <option value="LED wide lights 50 watts">
              LED wide lights 50 watts
            </option>
            <option value="LED Strip Lights">LED Strip Lights</option>
            <option value="LED Profile light">LED Profile light</option>
            <option value="Track lights 18 -24 watts">
              Track lights 18 -24 watts
            </option>
            <option value="Floor to be made Edge Lit as shown in the design">
              Floor to be made Edge Lit as shown in the design
            </option>
            <option value="Padestral Lamps as shown in the design">
              Padestral Lamps as shown in the design
            </option>
            <option value="Table Lamps as shown in the design">
              Table Lamps as shown in the design
            </option>
            <option value="Hanging Decorative lights as shown in the design">
              Hanging Decorative lights as shown in the design
            </option>
            <option value="Chandelier as shown in the design">
              Chandelier as shown in the design
            </option>
          </select>
        </span>
        <select
          id="w1"
          value={selectedValue}
          onChange={(e) =>
            setSelectedValue({
              ...selectedValue,
              WoodenPlatformtoraisetheheightupto25mm: e.target.value,
            })
          }
        >
          {numberOptions.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </form>
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="m">MISCELLANEOUS</label>
        <select name="" id="m">
          <option value="Plants as shown in the design">
            Plants as shown in the design
          </option>
          <option value="Big Waste bin with black dispsal bag in pantry/bar area">
            Big Waste bin with black dispsal bag in pantry/bar area
          </option>
          <option value="SS/ Plastic waste paper bins with black dumping bag">
            SS/ Plastic waste paper bins with black dumping bag
          </option>
          <option value="Fish bowl for Visiting card">
            Fish bowl for Visiting card
          </option>
          <option value="Visitors book">Visitors book</option>
          <option value="Fabrication Labour Charges">
            Fabrication Labour Charges
          </option>
          <option value="Painting Labour Charges">
            Painting Labour Charges
          </option>
          <option value="Branding Labour Charges">
            Branding Labour Charges
          </option>
          <option value="Transportation charges">Transportation charges</option>
          <option value="Travelling charges if any">
            Travelling charges if any
          </option>
        </select>
      </form>
    </div>
  );
};

export default Electricals;
