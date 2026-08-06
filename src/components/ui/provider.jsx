"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { EmotionRegistry } from "./emotion-registry";

const customSystem = createSystem(defaultConfig, {
  preflight: false,
});

export function Provider({ children }) {
  return (
    <EmotionRegistry>
      <ChakraProvider value={customSystem}>
        {children}
      </ChakraProvider>
    </EmotionRegistry>
  );
}