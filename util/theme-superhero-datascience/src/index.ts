
import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the Superhero data science
 */
const plugin: JupyterLabPlugin<void> = {
  id: 'theme-superhero-datascience:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: 'Superhero data science',
      load: function() {
        return manager.loadCSS('theme-superhero-datascience/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
