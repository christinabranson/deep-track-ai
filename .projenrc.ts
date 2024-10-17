import { web } from "projen";
const project = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: "main",
  name: "deep-track-ai",
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // tailwind: true,          /* Setup Tailwind CSS as a PostCSS plugin. */
});
project.synth();