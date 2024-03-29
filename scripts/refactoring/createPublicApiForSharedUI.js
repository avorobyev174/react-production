import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentDirs = sharedUiDirectory.getDirectories();
function isAbsolute(value) {
  const layers = [ 'app', 'shared', 'entities', 'features', 'widgets', 'pages' ];
  return layers.some((layer) => value.startsWith(layer));
}
componentDirs?.forEach((directory) => {
  const indexFilePath = `${ directory.getPath() }/index.ts`;
  const indexFile = directory.getSourceFile(indexFilePath);
  if (!indexFile) {
    const sourceCode = `export * from './${ directory.getBaseName() }';\n`;
    const file = directory.createSourceFile(indexFilePath, sourceCode);
    file.save();
  }
});

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();
  importDeclarations.forEach((declaration) => {
    const value = declaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');
    const segments = valueWithoutAlias.split('/');
    const isSharedLayer = segments?.[0] === 'shared';
    const isUiSlice = segments?.[1] === 'ui';
    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const res = valueWithoutAlias.split('/').slice(0, 3).join('/');
      declaration.setModuleSpecifier(`@/${ res }`);
    }
  })
});

project.save();
