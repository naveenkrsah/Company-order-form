import React, { useState } from "react";

const Form = () => {
  const [storeRoomData, setStoreRoomData] = useState({
    date: "",
    CompanyName: "",
    Address: "",
    ConcernedPerson: "",
    Exhibition: "",
    StandNumber: "",
    HallNo: "",
    StandSize: "",
    SidesOpen: "",
    Venue: "",
    City: "",
    ShowDays: "",
  });

  return (
    <div>
      <form className="bg-zinc-200 space-y-4 px-20 grid grid-cols-2 gap-2">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name=""
          id="date"
          onChange={(event) => {
            // storeRoomData.date = event.target.value;
            setStoreRoomData({ ...storeRoomData, date: event.target.value });
          }}
          // onChange={(event) => (storeRoomData.date = event.target.value)}
        />
        {/* {console.log(storeRoomData.date)} */}
        {console.log(storeRoomData)}
        <label htmlFor="cname">Company Name:</label>
        <input
          type="text"
          name=""
          id="cname"
          // onChange={(event) => (storeRoomData.date = event.target.value)}
          onChange={(event) => {
            // storeRoomData.CompanyName = event.target.value;
            setStoreRoomData({
              ...storeRoomData,
              CompanyName: event.target.value,
            });
          }}
        />
        {console.log(storeRoomData)}
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name=""
          id="address"
          onChange={(event) => {
            // storeRoomData.Address = event.target.value;
            setStoreRoomData({ ...storeRoomData, Address: event.target.value });
          }}
        />
        {console.log(storeRoomData)}
        <label htmlFor="concernedperson">Concerned Person:</label>
        <input
          type="text"
          name=""
          id="concernedperson"
          onChange={(event) => {
            // storeRoomData.ConcernedPerson = event.target.value;
            setStoreRoomData({
              ...storeRoomData,
              ConcernedPerson: event.target.value,
            });
          }}
        />
        <label htmlFor="exhibition">Exhibition:</label>
        <input
          type="text"
          name=""
          id="exhibition"
          onChange={(event) => {
            // storeRoomData.Exhibition = event.target.value;
            setStoreRoomData({
              ...storeRoomData,
              Exhibition: event.target.value,
            });
          }}
        />
        <label htmlFor="standnumber">Stand Number:</label>
        <input
          type="text"
          name=""
          id="standnumber"
          onChange={(event) => {
            // storeRoomData.StandNumber = event.target.value;
            setStoreRoomData({
              ...storeRoomData,
              StandNumber: event.target.value,
            });
          }}
        />
        <label htmlFor="hallno">Hall No.:</label>
        <input
          type="text"
          name=""
          id="hallno"
          onChange={(event) => {
            // storeRoomData.HallNo = event.target.value;
            setStoreRoomData({ ...storeRoomData, HallNo: event.target.value });
          }}
        />
        <label htmlFor="standsize">Stand Size:</label>
        <input
          type="text"
          name=""
          id="standsize"
          onChange={(event) => {
            // storeRoomData.StandSize = event.target.value;
            setStoreRoomData({
              ...storeRoomData,
              StandSize: event.target.value,
            });
          }}
        />
        <label htmlFor="sidesopen">Sides Open:</label>
        <input
          type="text"
          name=""
          id="sidesopen"
          onChange={(event) => {
            // storeRoomData.Address = event.target.value;
            setStoreRoomData({
              ...storeRoomData,
              SidesOpen: event.target.value,
            });
          }}
        />
        <label htmlFor="venue">Venue:</label>
        <input
          type="text"
          name=""
          id="venue"
          onChange={(event) => {
            // storeRoomData.Venue = event.target.value;
            setStoreRoomData({ ...storeRoomData, Venue: event.target.value });
          }}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name=""
          id="city"
          onChange={(event) => {
            // storeRoomData.City = event.target.value;
            setStoreRoomData({ ...storeRoomData, City: event.target.value });
          }}
        />
        <label htmlFor="showdays">Show Days:</label>
        <input
          type="text"
          name=""
          id="showdays"
          onChange={(event) => {
            // storeRoomData.ShowDays = event.target.value;
            setStoreRoomData({
              ...storeRoomData,
              ShowDays: event.target.value,
            });
          }}
        />
        {console.log(storeRoomData)}
      </form>
    </div>
  );
};

export default Form;
