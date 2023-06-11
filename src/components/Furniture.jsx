import React from "react";

const Furniture = () => {
  return (
    <div className="space-y-10 my-20">
      <h1 className="text-center">FURNITURE</h1>
      <form className="bg-zinc-200 grid grid-cols-2 gap-2 space-y-4 px-20">
        <label htmlFor="f1">Single seat sofa : </label>
        <select name="" id="f1">
          <option value="">Black</option>
          <option value="">White</option>
        </select>

        <label htmlFor="f2">Double seater sofa :</label>
        <select name="" id="f2">
          <option value="">Black</option>
          <option value="">White</option>
        </select>
        <label htmlFor="f3">Tripple Seat Sofa :</label>
        <select name="" id="f3">
          <option value="">Black</option>
          <option value="">White</option>
        </select>
        <label htmlFor="f4">Center Table :</label>
        <select name="" id="f4">
          <option value="">Black</option>
          <option value="">White</option>
        </select>
        <label htmlFor="f5">Side table :</label>
        <select name="" id="f5">
          <option value="">Black</option>
          <option value="">White</option>
        </select>
        <label htmlFor="f6">Fixed chair :</label>
        <select name="" id="f6">
          <option value="">Black</option>
          <option value="">White</option>
        </select>
        <label htmlFor="f7">Revolving chair :</label>
        <select name="" id="f7">
          <option value="">Black</option>
          <option value="">White</option>
        </select>
        <label htmlFor="f8">Revolving High Back Chair :</label>
        <select name="" id="f8">
          <option value="">Black</option>
          <option value="">White</option>
        </select>
        <label htmlFor="f9">Glass top round table :</label>
        <select name="" id="f9">
          <option value="">Black</option>
          <option value="">White</option>
        </select>
        <label htmlFor="f10">Bar stools :</label>
        <select name="" id="f10">
          <option value="">Black</option>
          <option value="">White</option>
        </select>
      </form>
      <h1 className="text-center">ELECTRICALS</h1>
      <form className="bg-zinc-200 grid grid-cols-2 gap-2 space-y-4 px-20">
        <label htmlFor="e1">
          16amp. Power point in pantry area for tea coffee vending machine,
          refrigerator & other equipments :
        </label>
        <select name="" id="e1">
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
        <label htmlFor="e2">
          16amp. Power point in bar area for tea coffee vending machine,
          refrigerator & other equipments :
        </label>
        <select name="" id="e2">
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
        <label htmlFor="e3">
          5 amp. power points in stands for mobile phone & laptop charging :
        </label>
        <select name="" id="e3">
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
        <label htmlFor="e4">
          Power connection for running your equipments (if needed from our side)
          :
        </label>
        <select name="" id="e4">
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
        <textarea
          className="col-span-2"
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="mention something extra here"
        ></textarea>
      </form>
    </div>
  );
};

export default Furniture;
