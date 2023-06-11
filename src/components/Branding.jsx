import React from "react";

const Branding = () => {
  return (
    <div className="space-y-10 my-20">
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="b">BRANDING</label>
        <select name="" id="b">
          <option value="3D Backlit branding as shown in the design">
            3D Backlit branding as shown in the design
          </option>
          <option value="Edgelit logo as shown in the design">
            Edgelit logo as shown in the design
          </option>
          <option value="3MM Acrylic cut letter logo as shown in the design">
            3MM Acrylic cut letter logo as shown in the design
          </option>
          <option value="6mm WPC letter as shown in the design">
            6mm WPC letter as shown in the design
          </option>
          <option value="3D non lit Box letter as shown in the design">
            3D non lit Box letter as shown in the design
          </option>
          <option value="3mm acrylic cut letter branding for all catagory heads">
            3mm acrylic cut letter branding for all catagory heads
          </option>
          <option value="Vinyl cut letters branding on fascia">
            Vinyl cut letters branding on fascia
          </option>
          <option value="Print n cut letter branding as shown in the design">
            Print n cut letter branding as shown in the design
          </option>
          <option value="Roll up Standy with Baner Media">
            Roll up Standy with Baner Media
          </option>
          <option value="Roll up Standy with star blackout media">
            Roll up Standy with star blackout media
          </option>
          <option value="Acryclic display stand for QR code">
            Acryclic display stand for QR code
          </option>
        </select>
        <select name="" id="b">
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
          rows="6"
          placeholder="mention something extra here"
        ></textarea>
      </form>
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="a">ARTWORKS</label>
        <select name="" id="a">
          <option value="Artworks to be realised using Star blackout media">
            Artworks to be realised using Star blackout media
          </option>
          <option value="Artworks to be realised using Matt flex blackout media">
            Artworks to be realised using Matt flex blackout media
          </option>
          <option value="Artworks to be realised using vinyl print with matt lamination on 3mm sunboard">
            Artworks to be realised using vinyl print with matt lamination on
            3mm sunboard
          </option>
          <option value="Artworks to be realised using vinyl print with matt lamination on 6mm MDF">
            Artworks to be realised using vinyl print with matt lamination on
            6mm MDF
          </option>
          <option value="Backlit artworks to be realised using translit print">
            Backlit artworks to be realised using translit print
          </option>
          <option value="Backlit artworks to be realised using star backlit media">
            Backlit artworks to be realised using star backlit media
          </option>
          <option value="Backlit artworks to be realised using Backlit Flex .media">
            Backlit artworks to be realised using Backlit Flex .media
          </option>
        </select>
      </form>
      <form className="bg-red-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="">Audio visuals</label>
      </form>
      <form className="bg-zinc-200 grid grid-cols-3 gap-2 space-y-4 px-20 mt-20">
        <label htmlFor="f">FURNITURE</label>
        <select name="" id="f">
          <option value="Single seat sofa">Single seat sofa</option>
          <option value="Double seater sofa ">Double seater sofa </option>
          <option value="Tripple Seat Sofa ">Tripple Seat Sofa </option>
          <option value="Center Table ">Center Table </option>
          <option value="Side table">Side table</option>
          <option value="Fixed chair">Fixed chair</option>
          <option value="Revolving chair">Revolving chair</option>
          <option value="Revolving High Back Chair">
            Revolving High Back Chair
          </option>
          <option value="Glass top round table">Glass top round table</option>
          <option value="Bar stools">Bar stools</option>
          <option value="Bistro Table/ High Table with glass top">
            Bistro Table/ High Table with glass top
          </option>
          <option value="Brochure Stand">Brochure Stand</option>
        </select>
        <select name="" id="b">
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>
      </form>
    </div>
  );
};

export default Branding;
