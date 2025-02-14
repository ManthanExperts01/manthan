const FormButton = ({
  text,
  alt,
  state,
  className,
}: {
  text: string;
  alt: string;
  state: boolean;
  className?: string;
}) => {
  return (
    <>
      <button
        type="submit"
        className={`bg-emerald-900 hover:bg-emerald-950 text-white  py-2 px-4 rounded ${className}`}
        disabled={state}
      >
        {state ? alt : text}
      </button>
    </>
  );
};

export default FormButton;
