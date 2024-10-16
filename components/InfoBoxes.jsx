"use client";
import InfoBox from "./InfoBox";

const infoBoxesArray = [
  {
    title: "For Renters",
    description:
      "Find your dream rental property.Bookmark properties and contact owners.",
    buttonName: "Browse Properties",
    buttonBackground: "bg-black",
    backgroundColor: "bg-base-200",
  },
  {
    title: "For Property Owners",
    description:
      "List your properties and reach potential tenants.Rent as an airbnb or longterm.",
    buttonName: "Add Property",
    buttonBackground: "bg-blue-400",
    backgroundColor: "bg-blue-200",
  },
];
const InfoBoxes = () => {
  return (
    <>
      <section>
        <div className="container-xl lg:container m-auto border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {infoBoxesArray?.map((infoBoxVal, index) => {
              return <InfoBox infoBoxVal={infoBoxVal} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoBoxes;
