import useOptions from "../hooks/useOptions";

export default function DropDown({ dropDown, selected, setSelected }) {
  const select = (color) => {
    setSelected((colors) => {
      const exist = colors.some((c) => c.name === color.name);
      if (exist) {
        return colors;
      } else {
        return [...colors, color];
      }
    });
  };

  const options = useOptions(setSelected);

  const colorOptions = options.map((color) => {
    const isSelected = selected.some((c) => c.name === color.name);
    return (
      <div
        style={{
          color: color.color,
          backgroundColor: color.backgroundColor,
        }}
        className="py-1 px-2 capitalize rounded-sm flex justify-between gap-2 items-center"
        onClick={() => {
          select(color);
        }}
      >
        <p> {color.name}</p>
        {isSelected && (
          <p className="px-2 font-semibold text-sm bg-rose-400 text-white">
            Selected
          </p>
        )}
      </div>
    );
  });

  return (
    dropDown && (
      <div className="w-full border shadow-md p-2 rounded-md space-y-2 max-h-60 overflow-auto">
        {colorOptions}
      </div>
    )
  );
}
