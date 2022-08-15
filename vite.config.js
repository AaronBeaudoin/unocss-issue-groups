import UnoCSS from "unocss/vite";
import { transformerVariantGroup } from "unocss";

export default {
  plugins: [
    UnoCSS({
      transformers: [
        transformerVariantGroup()
      ]
    })
  ]
};
