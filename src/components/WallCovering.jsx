import React, { useState } from "react";

const WallCovering = () => {
  const [wallCoveringData, setwallCoveringData] = useState({
    plasticPaint: { value: "", quantity: "" },
    asianPaint: { value: "", quantity: "" },
    wallpaper: { value: "", quantity: "" },
    laminatesMica: { value: "", quantity: "" },
    interiorVinyl: { value: "", quantity: "" },
  });

  const [brandingData, setbrandingData] = useState({
    backlitBranding3D: { value: "", quantity: "" },
    EdgelitLogo: { value: "", quantity: "" },
    AcrylicLetterLogo: { value: "", quantity: "" },
    wpcLetter: { value: "", quantity: "" },
    nonLitBoxLetter: { value: "", quantity: "" },
    acrylicLetterBranding: { value: "", quantity: "" },
    vinylBranding: { value: "", quantity: "" },
    printLetterBranding: { value: "", quantity: "" },
    rollUpStandBanner: { value: "", quantity: "" },
    rollUpStandstarmedia: { value: "", quantity: "" },
    acrylicQrCode: { value: "", quantity: "" },
  });

  const [audioVisualData, setaudioVisualData] = useState({
    led: { value: "", quantity: "" },
    smartLed: { value: "", quantity: "" },
    LFDwall: { value: "", quantity: "" },
    p3576: { value: "", quantity: "" },
    p3500: { value: "", quantity: "" },
    p2576: { value: "", quantity: "" },
    p2500: { value: "", quantity: "" },
    curvedLed: { value: "", quantity: "" },
    touchDisplay: { value: "", quantity: "" },
    publicAdressSystem: { value: "", quantity: "" },
  });

  return (
    <div className="space-y-10 mt-10">
      <h1 className="text-center">Wall Covering</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={
                "Walls to be finished with plastic paint (Asian Paints or equivelant Plastic paint)"
              }
              id="wc1"
              onChange={(e) => {
                if (e.target.checked) {
                  setwallCoveringData({
                    ...wallCoveringData,
                    plasticPaint: {
                      ...wallCoveringData.plasticPaint,
                      value: e.target.value,
                    },
                  });
                } else {
                  setwallCoveringData({
                    ...wallCoveringData,
                    plasticPaint: "",
                  });
                }
              }}
            />

            <label htmlFor="wc1">
              Walls to be finished with plastic paint( Asian Paints or
              equivelant Plastic paint) :
            </label>
          </span>
          {wallCoveringData.plasticPaint.value ===
            "Walls to be finished with plastic paint (Asian Paints or equivelant Plastic paint)" && (
            <select
              name=""
              id="wc1"
              onChange={(e) =>
                setwallCoveringData({
                  ...wallCoveringData,
                  plasticPaint: {
                    ...wallCoveringData.plasticPaint,
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
              value={
                "Walls to be finished with Asian Royale Paint or equivelant brand paint"
              }
              id="wc2"
              onChange={(e) => {
                if (e.target.checked) {
                  setwallCoveringData({
                    ...wallCoveringData,
                    asianPaint: {
                      ...wallCoveringData.asianPaint,
                      value: e.target.value,
                    },
                  });
                } else {
                  setwallCoveringData({
                    ...wallCoveringData,
                    asianPaint: "",
                  });
                }
              }}
            />

            <label htmlFor="wc2">
              Walls to be finished with Asian Royale Paint or equivelant brand
              paint :
            </label>
          </span>
          {wallCoveringData.asianPaint.value ===
            "Walls to be finished with Asian Royale Paint or equivelant brand paint" && (
            <select
              name=""
              id="wc2"
              onChange={(e) =>
                setwallCoveringData({
                  ...wallCoveringData,
                  asianPaint: {
                    ...wallCoveringData.asianPaint,
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
              value={
                "Walls to be covered using Wall paper as shown in the design(approval of the same will be taken from the client)"
              }
              id="wc3"
              onChange={(e) => {
                if (e.target.checked) {
                  setwallCoveringData({
                    ...wallCoveringData,
                    wallpaper: {
                      ...wallCoveringData.wallpaper,
                      value: e.target.value,
                    },
                  });
                } else {
                  setwallCoveringData({
                    ...wallCoveringData,
                    wallpaper: "",
                  });
                }
              }}
            />

            <label htmlFor="wc3">
              Walls to be covered using Wall paper as shown in the design
              (approval of the same will be taken from the client) :
            </label>
          </span>
          {wallCoveringData.wallpaper.value ===
            "Walls to be covered using Wall paper as shown in the design(approval of the same will be taken from the client)" && (
            <select
              name=""
              id="wc3"
              onChange={(e) =>
                setwallCoveringData({
                  ...wallCoveringData,
                  wallpaper: {
                    ...wallCoveringData.wallpaper,
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
              value={
                "Walls to be finished will Laminates/ Mica as shown in the design"
              }
              id="wc4"
              onChange={(e) => {
                if (e.target.checked) {
                  setwallCoveringData({
                    ...wallCoveringData,
                    laminatesMica: {
                      ...wallCoveringData.laminatesMica,
                      value: e.target.value,
                    },
                  });
                } else {
                  setwallCoveringData({
                    ...wallCoveringData,
                    laminatesMica: "",
                  });
                }
              }}
            />

            <label htmlFor="wc4">
              Walls to be finished will Laminates/ Mica as shown in the design :
            </label>
          </span>
          {wallCoveringData.laminatesMica.value ===
            "Walls to be finished will Laminates/ Mica as shown in the design" && (
            <select
              name=""
              id="wc4"
              onChange={(e) =>
                setwallCoveringData({
                  ...wallCoveringData,
                  laminatesMica: {
                    ...wallCoveringData.laminatesMica,
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
              value={
                "Walls to be finished will Interior vinyl as shown in the design"
              }
              id="wc5"
              onChange={(e) => {
                if (e.target.checked) {
                  setwallCoveringData({
                    ...wallCoveringData,
                    interiorVinyl: {
                      ...wallCoveringData.interiorVinyl,
                      value: e.target.value,
                    },
                  });
                } else {
                  setwallCoveringData({
                    ...wallCoveringData,
                    interiorVinyl: "",
                  });
                }
              }}
            />

            <label htmlFor="wc5">
              Walls to be finished will Interior vinyl as shown in the design :
            </label>
          </span>
          {wallCoveringData.interiorVinyl.value ===
            "Walls to be finished will Interior vinyl as shown in the design" && (
            <select
              name=""
              id="wc5"
              onChange={(e) =>
                setwallCoveringData({
                  ...wallCoveringData,
                  interiorVinyl: {
                    ...wallCoveringData.interiorVinyl,
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
        {console.log(wallCoveringData)}
      </form>
      <h1 className="text-center">BRANDING</h1>
      <form className="bg-zinc-200 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"3D Backlit branding as shown in the design"}
              id="b1"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    backlitBranding3D: {
                      ...brandingData.backlitBranding3D,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    backlitBranding3D: "",
                  });
                }
              }}
            />
            <label htmlFor="b1">
              3D Backlit branding as shown in the design :
            </label>
          </span>
          {brandingData.backlitBranding3D.value ===
            "3D Backlit branding as shown in the design" && (
            <select
              name=""
              id="b1"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  backlitBranding3D: {
                    ...brandingData.backlitBranding3D,
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
              value={"Edgelit logo as shown in the design"}
              id="b2"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    EdgelitLogo: {
                      ...brandingData.EdgelitLogo,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    EdgelitLogo: "",
                  });
                }
              }}
            />

            <label htmlFor="b2">Edgelit logo as shown in the design : </label>
          </span>
          {brandingData.EdgelitLogo.value ===
            "Edgelit logo as shown in the design" && (
            <select
              name=""
              id="b2"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  EdgelitLogo: {
                    ...brandingData.EdgelitLogo,
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
              value={"3MM Acrylic cut letter logo as shown in the design"}
              id="b3"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    AcrylicLetterLogo: {
                      ...brandingData.AcrylicLetterLogo,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    AcrylicLetterLogo: "",
                  });
                }
              }}
            />

            <label htmlFor="b3">
              3MM Acrylic cut letter logo as shown in the design :
            </label>
          </span>
          {brandingData.AcrylicLetterLogo.value ===
            "3MM Acrylic cut letter logo as shown in the design" && (
            <select
              name=""
              id="b3"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  AcrylicLetterLogo: {
                    ...brandingData.AcrylicLetterLogo,
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
              value={"6mm WPC letter as shown in the design"}
              id="b4"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    wpcLetter: {
                      ...brandingData.wpcLetter,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    wpcLetter: "",
                  });
                }
              }}
            />

            <label htmlFor="b4">6mm WPC letter as shown in the design : </label>
          </span>
          {brandingData.wpcLetter.value ===
            "6mm WPC letter as shown in the design" && (
            <select
              name=""
              id="b4"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  wpcLetter: {
                    ...brandingData.wpcLetter,
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
              value={"3D non lit Box letter as shown in the design"}
              id="b5"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    nonLitBoxLetter: {
                      ...brandingData.nonLitBoxLetter,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    nonLitBoxLetter: "",
                  });
                }
              }}
            />

            <label htmlFor="b5">
              3D non lit Box letter as shown in the design :
            </label>
          </span>
          {brandingData.nonLitBoxLetter.value ===
            "3D non lit Box letter as shown in the design" && (
            <select
              name=""
              id="b5"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  nonLitBoxLetter: {
                    ...brandingData.nonLitBoxLetter,
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
              value={"3mm acrylic cut letter branding for all catagory heads"}
              id="b6"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    acrylicLetterBranding: {
                      ...brandingData.acrylicLetterBranding,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    acrylicLetterBranding: "",
                  });
                }
              }}
            />

            <label htmlFor="b6">
              3mm acrylic cut letter branding for all catagory heads :
            </label>
          </span>
          {brandingData.acrylicLetterBranding.value ===
            "3mm acrylic cut letter branding for all catagory heads" && (
            <select
              name=""
              id="b6"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  acrylicLetterBranding: {
                    ...brandingData.acrylicLetterBranding,
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
              value={"Vinyl cut letters branding on fascia"}
              id="b7"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    vinylBranding: {
                      ...brandingData.vinylBranding,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    vinylBranding: "",
                  });
                }
              }}
            />

            <label htmlFor="b7">Vinyl cut letters branding on fascia : </label>
          </span>
          {brandingData.vinylBranding.value ===
            "Vinyl cut letters branding on fascia" && (
            <select
              name=""
              id="b7"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  vinylBranding: {
                    ...brandingData.vinylBranding,
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
              value={"Print n cut letter branding as shown in the design"}
              id="b8"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    printLetterBranding: {
                      ...brandingData.printLetterBranding,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    printLetterBranding: "",
                  });
                }
              }}
            />

            <label htmlFor="b8">
              Print n cut letter branding as shown in the design :
            </label>
          </span>
          {brandingData.printLetterBranding.value ===
            "Print n cut letter branding as shown in the design" && (
            <select
              name=""
              id="b8"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  printLetterBranding: {
                    ...brandingData.printLetterBranding,
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
              value={"Roll up Standy with Baner Media"}
              id="b9"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    rollUpStandBanner: {
                      ...brandingData.rollUpStandBanner,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    rollUpStandBanner: "",
                  });
                }
              }}
            />

            <label htmlFor="b9">Roll up Standy with Baner Media : </label>
          </span>
          {brandingData.rollUpStandBanner.value ===
            "Roll up Standy with Baner Media" && (
            <select
              name=""
              id="b9"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  rollUpStandBanner: {
                    ...brandingData.rollUpStandBanner,
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
              value={"Roll up Standy with star blackout media"}
              id="b10"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    rollUpStandstarmedia: {
                      ...brandingData.rollUpStandstarmedia,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    rollUpStandstarmedia: "",
                  });
                }
              }}
            />

            <label htmlFor="b10">
              Roll up Standy with star blackout media :
            </label>
          </span>
          {brandingData.rollUpStandstarmedia.value ===
            "Roll up Standy with star blackout media" && (
            <select
              name=""
              id="b10"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  rollUpStandstarmedia: {
                    ...brandingData.rollUpStandstarmedia,
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
              value={"Acryclic display stand for QR code"}
              id="b11"
              onChange={(e) => {
                if (e.target.checked) {
                  setbrandingData({
                    ...brandingData,
                    acrylicQrCode: {
                      ...brandingData.acrylicQrCode,
                      value: e.target.value,
                    },
                  });
                } else {
                  setbrandingData({
                    ...brandingData,
                    acrylicQrCode: "",
                  });
                }
              }}
            />

            <label htmlFor="b11">Acryclic display stand for QR code : </label>
          </span>
          {brandingData.acrylicQrCode.value ===
            "Acryclic display stand for QR code" && (
            <select
              name=""
              id="b11"
              onChange={(e) =>
                setbrandingData({
                  ...brandingData,
                  acrylicQrCode: {
                    ...brandingData.acrylicQrCode,
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
        {console.log(brandingData)}
        <textarea
          className="col-span-2"
          name=""
          id="extra"
          cols="30"
          rows="6"
          placeholder="Mention extra things here"
        ></textarea>
      </form>
      <h1 className="text-center">ARTWORKS</h1>
      <form className="bg-red-300 grid grid-cols-2 gap-2 space-y-4 px-20">
        <p>
          Artworks to be realised using Star blackout media. Artworks to be
          realised using Matt flex blackout media. Artworks to be realised using
          vinyl print with matt lamination on 3mm sunboard. Artworks to be
          realised using vinyl print with matt lamination on 6mm MDF.. Backlit
          artworks to be realised using translit print. Backlit artworks to be
          realised using star backlit media. Backlit artworks to be realised
          using Backlit Flex .media.
        </p>
      </form>
      <h1 className="text-center">AUDIO VISUAL</h1>
      <form className="bg-zinc-300 space-y-4 px-20">
        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"LED TV"}
              id="a1"
              onChange={(e) => {
                if (e.target.checked) {
                  setaudioVisualData({
                    ...audioVisualData,
                    led: {
                      ...audioVisualData.led,
                      value: e.target.value,
                    },
                  });
                } else {
                  setaudioVisualData({
                    ...audioVisualData,
                    led: "",
                  });
                }
              }}
            />
            <label htmlFor="a1">LED TV : </label>
          </span>
          {audioVisualData.led.value === "LED TV" && (
            <select
              name=""
              id="a1"
              onChange={(e) =>
                setaudioVisualData({
                  ...audioVisualData,
                  led: {
                    ...audioVisualData.led,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="32">32</option>
              <option value="40">40</option>
              <option value="42">42</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="65">65</option>
              <option value="75">75</option>
              <option value="80">80</option>
              <option value="85">85</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"SMART LED TV"}
              id="a2"
              onChange={(e) => {
                if (e.target.checked) {
                  setaudioVisualData({
                    ...audioVisualData,
                    smartLed: {
                      ...audioVisualData.smartLed,
                      value: e.target.value,
                    },
                  });
                } else {
                  setaudioVisualData({
                    ...audioVisualData,
                    smartLed: "",
                  });
                }
              }}
            />

            <label htmlFor="a2">SMART LED TV : </label>
          </span>
          {audioVisualData.smartLed.value === "SMART LED TV" && (
            <select
              name=""
              id="a2"
              onChange={(e) =>
                setaudioVisualData({
                  ...audioVisualData,
                  smartLed: {
                    ...audioVisualData.smartLed,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="32">32</option>
              <option value="40">40</option>
              <option value="42">42</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="65">65</option>
              <option value="75">75</option>
              <option value="80">80</option>
              <option value="85">85</option>
            </select>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="space-x-2">
            <input
              type="checkbox"
              name=""
              value={"SEAMLESS LFD WALL WITH SOUND BAR"}
              id="a3"
              onChange={(e) => {
                if (e.target.checked) {
                  setaudioVisualData({
                    ...audioVisualData,
                    LFDwall: {
                      ...audioVisualData.LFDwall,
                      value: e.target.value,
                    },
                  });
                } else {
                  setaudioVisualData({
                    ...audioVisualData,
                    LFDwall: "",
                  });
                }
              }}
            />

            <label htmlFor="a3">SEAMLESS LFD WALL WITH SOUND BAR : </label>
          </span>
          {audioVisualData.LFDwall.value ===
            "SEAMLESS LFD WALL WITH SOUND BAR" && (
            <select
              name=""
              id="a3"
              onChange={(e) =>
                setaudioVisualData({
                  ...audioVisualData,
                  LFDwall: {
                    ...audioVisualData.LFDwall,
                    quantity: e.target.value,
                  },
                })
              }
            >
              <option value="2x2">2x2</option>
              <option value="2x3">2x3</option>
              <option value="3x3">3x3</option>
              <option value="3x4">3x4</option>
              <option value="4x4">4x4</option>
              <option value="3x5">3x5</option>
              <option value="4x5">4x5</option>
              <option value="5x5">5x5</option>
            </select>
          )}
        </div>
        {console.log(audioVisualData)}

        <label htmlFor="a4">P3 LED WALL BLOCK SIZE 576MM X 576MM : </label>
        <textarea name="" id="a4" cols="30" rows="2"></textarea>

        <label htmlFor="a5">P3 LED WALL BLOCK SIZE 500MM X 500MM : </label>
        <textarea name="" id="a5" cols="30" rows="2"></textarea>

        <label htmlFor="a6">P2 LED WALL BLOCK SIZE 576MM X 576MM : </label>
        <textarea name="" id="a6" cols="30" rows="2"></textarea>

        <label htmlFor="a7">P2 LED WALL BLOCK SIZE 500MM X 500MM : </label>
        <textarea name="" id="a7" cols="30" rows="2"></textarea>

        <label htmlFor="a8">CURVED LED WALL BLOCK SIZE 576MM X 576MM : </label>
        <textarea name="" id="a8" cols="30" rows="2"></textarea>

        <label htmlFor="a9">TOUCH SCREEN DISPLAY WITH CPU : </label>
        <textarea name="" id="a9" cols="30" rows="2"></textarea>

        <label htmlFor="a10">PUBLIC ADDRESS SYSTEM : </label>
        <textarea name="" id="a10" cols="30" rows="2"></textarea>
      </form>
    </div>
  );
};

export default WallCovering;
