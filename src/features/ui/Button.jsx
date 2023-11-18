const Button = ({ children, onClick = null, type, disabled }) => {
  const standardStyles = ` px-2 py-2 rounded-md duration-500 ${
    disabled ? "cursor-not-allowed" : ""
  }`;

  const styles = {
    primary: standardStyles + "underline",
    secondary:
      standardStyles + " rounded-md border border-stone-200 hover:bg-stone-700",
    delete: standardStyles + " bg-red-500 hover:bg-red-700 ",
    login:
      standardStyles +
      " border border-stone-200 hover:bg-orange-600 hover:border-orange-600 ",
    logout:
      standardStyles +
      " border border-stone-200 hover:bg-red-700 hover:border-red-700 ",
    signUp: standardStyles + " bg-yellow-600 hover:bg-yellow-700",
    cart:
      standardStyles + " flexCenter gap-2 bg-orange-600 hover:bg-orange-700",
    order:
      standardStyles +
      " font-semibold tracking-widest hover:bg-green-700 bg-green-600 text-stone-200",
    contact:
      standardStyles +
      " font-semibold tracking-widest border border-orange-600 hover:border-stone-200 hover:bg-transparent bg-orange-600 text-stone-200 ",
    menu:
      standardStyles +
      " mt-8 bg-stone-200 opacity-70 hover:bg-yellow-300 text-black tracking-widest",
    add:
      standardStyles +
      ` flexCenter  text-white ${
        disabled ? "bg-stone-600" : "bg-green-600 hover:bg-green-700"
      }`,
    toggle: standardStyles + " lg:hidden",
    quantity:
      standardStyles + " flexCenter w-8 h-8 bg-green-600 hover:bg-green-700",
  };

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
