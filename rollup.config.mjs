import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import packageJson from "./package.json" with { type: "json" };

const name = packageJson.main.replace(/\.js$/, "");

const bundle = (config) => ({
   ...config,
   input: "src/index.ts",
   external: (id) => !/^[./]/.test(id),
});

export default [
   bundle({
      plugins: [esbuild()],
      output: [
         {
            file: `${name}.cjs`,
            format: "cjs",
            sourcemap: true,
         },
         {
            file: `${name}.js`,
            format: "es",
            sourcemap: true,
         },
      ],
   }),
   bundle({
      plugins: [dts()],
      output: {
         file: `${name}.d.ts`,
         format: "es",
      },
   }),
];
