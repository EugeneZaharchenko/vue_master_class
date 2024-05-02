import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import AppDate from './components/AppDate.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.component('AppDate', AppDate)
app.use(router)


// async function importAll(r) {
//     const modules = {};
//     for (const path in r) {
//       const name = path.replace(/^\.\/(.+)\.(vue|js)$/, '$1');
//       const module = await r[path]();
//       const baseComponentConfig = module.default || module;
//       const baseComponentName = baseComponentConfig.name || (
//         path
//           .replace(/^.+\//, '')
//           .replace(/\.\w+$/, '')
//       );
//       modules[baseComponentName] = baseComponentConfig;
//     }
//     return modules;
//   }
  
//   // Usage
//   importAll(import.meta.glob('./components/App[A-Z]*.vue'))
//     .then(components => {
//       // Now you can use the imported components
//       for (const componentName in components) {
//         app.component(componentName, components[componentName]);
//       }
//     })
//     .catch(error => {
//       console.error('Error importing components:', error);
//     });

app.mount('#app')
