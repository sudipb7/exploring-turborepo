import sharedConfig from "@repo/tailwind/tailwind.config.ts";
import type { Config } from "tailwindcss";

const config = {
  ...sharedConfig,
  theme: {
    extend: {
      colors: {
        foreground: "#030712",
        primary: "#7c3aed",
        background: "#ffffff",
        muted: "#f3f4f6",
        secondary: "#e5e7eb",
      },
    },
  },
} satisfies Config;

export default config;
