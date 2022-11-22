import colors from "tailwindcss/colors";

export default function useOptions() {
  let options = [];
  Object.keys(colors)
    .slice(10, -5)
    .forEach((colorName) => {
      if (typeof colors[colorName] === "object") {
        options.push({
          name: colorName,
          color: colors[colorName][500],
          backgroundColor: colors[colorName][100],
        });
      }
    });

  return options;
}
