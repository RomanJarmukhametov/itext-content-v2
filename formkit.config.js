import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import myTailwindTheme from "./tailwind-theme.js"; // change to your theme's path
import { en, ru } from "@formkit/i18n";
import {
  createAutoAnimatePlugin,
  createAutoHeightTextareaPlugin,
  createFloatingLabelsPlugin,
} from "@formkit/addons";
import "@formkit/addons/css/floatingLabels";

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
  locales: { en, ru },
  locale: "ru",
  plugins: [
    createAutoAnimatePlugin(),
    createAutoHeightTextareaPlugin(),
    createFloatingLabelsPlugin({
      useAsDefault: true,
    }),
  ],
};
