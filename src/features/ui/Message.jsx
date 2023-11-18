const Message = ({ message }) => {
  return (
    <>{message && <p className="mt-8 text-red-500 text-xl">{message}</p>}</>
  );
};

export default Message;
