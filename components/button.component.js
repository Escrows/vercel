const Button = ({action, text}) => {
  return (
    <button
      onClick={action}
      className="inline-block mt-10 ml-1 w-[45%] border-b-4 border-red-700 rounded-lg bg-red-500 text-white font-semibold uppercase text-lg  py-2"
    >{text}</button>
  );
};

export default Button;
