import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  externals: ["estree", "@babel/types"],
});