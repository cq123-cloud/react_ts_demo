//组件形式路由写法

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Comp1 from "@/views/comp1/comp1";
import App from'../App'
const BaseRouter =()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                {/* 重定向 */}
                <Route path="/"  element={<Navigate to="/comp1"/>}></Route>
                <Route path="/comp1"  element={<Comp1/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default BaseRouter