const Balance = ({ balance }) => {
  return (
    <span className="truncate text-lg w-[45%] text-black font-semibold uppercase bg-green-400 border-green-700 rounded-lg p-2 border-b-4">
      {balance} ETH
    </span>
  );
};

export default Balance;
