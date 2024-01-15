export const useAsset = (name: string) => {
  const path = `../assets/svg/${name}.svg`;
  const svgList = import.meta.glob("../assets/svg/*.svg", { eager: true });
  const mod = svgList[path] as { default: string };

  return mod.default;
};
