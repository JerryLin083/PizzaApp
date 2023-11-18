const OrderCard = ({ pizza }) => {
  return (
    <li
      key={pizza.id}
      className="w-full md:max-w-2xl flexBetween flex-col md:flex-row"
    >
      <img
        src={pizza.image}
        alt="pizza"
        className="w-64 md:w-48 h-64 md:h-48 rounded-xl object-cover object-center"
      />
      <div className="mt-2 md:mt-0 w-64 md:w-96">
        <h3 className="font-semibold text-orange-500 text-2xl">
          {pizza.name} x {pizza.quantity}
        </h3>
        <p className="font-semibold text-stone-400">{pizza.ingredient}</p>
        <div className="mt-4 flexBetween">
          <p className="text-xl text-yellow-500">$ {pizza.totalPrice}</p>
        </div>
      </div>
    </li>
  );
};

export default OrderCard;
