import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/my-ts-component-library.js",
    format: "cjs"
  },
  plugins: [typescript()]
};
