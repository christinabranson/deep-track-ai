import { web } from "projen";
const project = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: "main",
  name: "deep-track-ai",
  projenrcTs: true,

  deps: ['gray-matter', 'remark','remark-html', 'tailwindcss', 'preline', 'postcss', 'autoprefixer'],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  tailwind: false,          /* Setup Tailwind CSS as a PostCSS plugin. */
});

 




project.addTask('clean-npm', {
  exec: 'npm cache clean --force',
});

project.addTask('eslint', {
  exec: 'eslint --ext .ts,.tsx --fix --no-error-on-unmatched-pattern $@ src test pages build-tools projenrc .projenrc.ts',
});


project.synth();