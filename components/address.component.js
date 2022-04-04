const Address = ({account}) => {
  return (
    <span className="inline-block  border-b-4 border-red-20 w-[85%] text-black font-semibold truncate px-4 py-2 bg-gray-200 rounded-lg border-gray-300">
      {account}
    </span>
  );
};

export default Address