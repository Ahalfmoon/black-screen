"use client";

import { useState } from "react";
import ScreenTool, { type ScreenColor } from "./ScreenTool";

export default function DeScreenTool() {
  const [color, setColor] = useState<ScreenColor>("#000000");
  return <ScreenTool lang="de" color={color} onColorChange={setColor} />;
}
