import { defineConfig } from "unocss";
import presetWind from "@unocss/preset-wind";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
