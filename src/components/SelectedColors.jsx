export default function SelectedColors({
  selected,
  setSelected,
  toggleDropDown,
}) {
  const remove = (colorName) => {
    setSelected((colors) => colors.filter((color) => color.name !== colorName));
  };

  let selectedColors = [];
  if (selected.length > 0) {
    selectedColors = selected.map((color) => {
      return (
        <div
          key={color.name}
          style={{
            color: color.color,
            backgroundColor: color.backgroundColor,
          }}
          className="px-2 gap-2 flex items-center rounded-sm "
        >
          <p className="capitalize"> {color.name}</p>
          <span
            onClick={() => remove(color.name)}
            className="hover:bg-red-400 rounded-full hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      );
    });
  } else {
    selectedColors = <p className="text-gray-500">Lets Select Some Colors</p>;
  }

  return (
    <div
      onClick={() => {
        if (selected.length === 0) {
          toggleDropDown();
        }
      }}
      className="flex gap-2 flex-wrap flex-1"
    >
      {selectedColors}
    </div>
  );
}
