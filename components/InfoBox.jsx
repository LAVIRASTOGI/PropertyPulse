const InfoBox = ({ infoBoxVal }) => {
  const { title, description, buttonName, buttonBackground, backgroundColor } =
    infoBoxVal;
  return (
    <div
      key={title}
      className={`card w-auto m-8 shadow-xl ${
        backgroundColor ? backgroundColor : "bg-base-100"
      }`}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <button
            className={`btn text-white  ${
              buttonBackground ? buttonBackground : "bg-black"
            }  hover:bg-blue-500 border-transparent`}
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
