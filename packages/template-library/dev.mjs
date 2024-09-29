import process from "node:process";
import { runBuild } from "hohoro";

await runBuild({
  rootDirectory: process.cwd(),
  logger: console,
});
