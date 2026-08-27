// Application entry point for cPanel / Passenger Node.js
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const serverPath = path.resolve(process.cwd(), ".output/server/index.mjs");
if (fs.existsSync(serverPath)) {
  import(pathToFileURL(serverPath).href).catch((err) => {
    console.error("Failed to boot server:", err);
  });
} else {
  console.error("Build output not found at", serverPath);
}
