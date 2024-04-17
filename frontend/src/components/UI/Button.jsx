export const Button = ({ theme, onClickHandler, className, children }) => {
  const temp = theme || "light";
  const classes =
    temp === "light"
      ? "bg-white  rounded-md font-medium  py-3 text-black border border-black shadow-sm "
      : "bg-[#00df9a]  rounded-md font-medium py-3 text-black ";
  return (
    <button className={classes + className} onClick={onClickHandler}>
      {children}
    </button>
  );
};
