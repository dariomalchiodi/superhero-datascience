"use strict";
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs-extra"));
const inquirer = __importStar(require("inquirer"));
const path = __importStar(require("path"));
const utils = __importStar(require("./utils"));
const template = `
import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the {{title}}
 */
const plugin: JupyterLabPlugin<void> = {
  id: '{{name}}:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: '{{title}}',
      load: function() {
        return manager.loadCSS('{{name}}/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
`;
    let name = 'theme-superhero-datascience';
    let title = 'Superhero data science';
    let description = 'Theme for \'Superhero data science\'';
    let dest = path.resolve(path.join('.', name));
    if (fs.existsSync(dest)) {
        console.error('Package already exists: ', name);
        process.exit(1);
    }
    fs.copySync(path.resolve('.', 'packages', 'theme-light-extension'), dest);
    let jsonPath = path.join(dest, 'package.json');
    let data = utils.readJSONFile(jsonPath);
    data.name = name;
    data.description = description;
    utils.writePackageData(jsonPath, data);
    // update the urls in urls.css
    let filePath = path.resolve('.', name, 'style', 'urls.css');
    let text = fs.readFileSync(filePath, 'utf8');
    text = text.split('@jupyterlab/theme-light-extension').join(name);
    fs.writeFileSync(filePath, text, 'utf8');
    // remove lib, node_modules and static.
    ['lib', 'node_modules', 'static'].forEach(folder => {
        let folderPath = path.join('.', name, folder);
        if (fs.existsSync(folderPath)) {
            fs.remove(folderPath);
        }
    });
    let readme = `${name}\n${description}\n`;
    fs.writeFileSync(path.join('.', name, 'README.md'), readme, 'utf8');
    let src = template.split('{{name}}').join(name);
    src = src.split('{{title}}').join(title);
    fs.writeFileSync(path.join('.', name, 'src', 'index.ts'), src, 'utf8');
    // Signify successful complation.
    console.log(`Created new theme ${name}`);
