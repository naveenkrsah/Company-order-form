import React from "react";

const Illumination = () => {
  return (
    <div className="space-y-10 my-20">
      <h1 className="text-center">ILLUMINATION</h1>
      <form className="bg-zinc-200 grid grid-cols-2 gap-2 space-y-4 px-20">
        <p className="bg-red-200">
          Stand to be illuminated using LED consealed lights. 4" LED consealed
          lights. 6" LED Spot Lights. LED wide lights 50 watts LED Strip Lights.
          LED Profile light Track lights 18 -24 watts Floor to be made Edge Lit
          as shown in the design.
        </p>
        <label htmlFor="">Padestral Lamps as shown in the design :</label>
        <textarea name="" id="" cols="30" rows="2"></textarea>

        <p className="bg-red-200">
          Padestral Lamps as shown in the design Table Lamps as shown in the
          design. Hanging Decorative lights as shown in the design. Chandelier
          as shown in the design.
        </p>
      </form>

      <h1 className="text-center">MISCELLANEOUS</h1>
      <form className="bg-zinc-200 grid grid-cols-2 gap-2 space-y-4 px-20">
        <p className="bg-red-300">Plants as shown in the design.</p>
        <label htmlFor="">
          Big Waste bin with black dispsal bag in pantry/bar area :
        </label>
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>

        <label htmlFor="">
          SS/ Plastic waste paper bins with black dumping bag :
        </label>
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>

        <label htmlFor="">Fish bowl for Visiting card :</label>
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>

        <p className="bg-red-300">
          Visitors book Fabrication Labour Charges Painting Labour Charges
          Branding Labour Charges Transportation charges Travelling charges if
          any
        </p>
      </form>
    </div>
  );
};

export default Illumination;
