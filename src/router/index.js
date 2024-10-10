import { createBrowserRouter } from 'react-router-dom' 
 
import App from '../App';
import Register from '../Register';
 
const router = createBrowserRouter([ 
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/Register",
    element:<Register></Register>
  }
])
 
// 4.暴露路由实例，用于在App.js主入口组件
export default router;