const OrderTotal = ({ totalPrice }) => {
  return (
    <div className="mt-12 w-full flexCenter flex-col gap-2">
      <p className="w-56 flexBetween">
        <span className="text-xl text-stone-400">Total: </span>
        <span className="text-2xl text-yellow-500">${totalPrice}</span>
      </p>
    </div>
  );
};

export default OrderTotal;
