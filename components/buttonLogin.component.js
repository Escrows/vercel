const Login = ({connect}) => {
  return (
    <div>
      <button
        onClick={connect}
        className="block w-full p-4 border-b-4 border-red-700 rounded-lg bg-red-500 text-white font-semibold uppercase text-lg leafing-none px-4 py-2"
      >
        SIGN-UP METAMASK
      </button>
    </div>
  );
};

export default Login