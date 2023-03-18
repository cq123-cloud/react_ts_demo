import { Navigate } from "react-router-dom"
import React, { lazy } from "react"

const Comp1 = lazy(() => import('@/views/comp1/comp1')) //懒加载
const Home = lazy(() => import('@/views/Home/home'))
const Page1 = lazy(() => import("@/views/page1/page1"))
const HomePage = lazy(() => import("@/views/homePage/homePage"))
const TableList = lazy(() => import("@/views/tableList/tableList"))
const UserList = lazy(() => import("@/views/UserManagement/UserList"))
const RoleList = lazy(() => import("@/views/UserManagement/RoleList"))
const getElement = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>正在加载中...</div>}>
            {comp}
        </React.Suspense>
    )
}

const router = [
    {
        path: '/',
        element: <Navigate to='/page1'></Navigate>
    },
    {
        path: '/',
        element: <Home />,
        children: [{
            path: "/page1",
            element: getElement(<Page1 />)
        },
        {
            path: "/homePage",
            element: getElement(<HomePage />)
        },
        {
            path: "/tableList",
            element: getElement(<TableList />)
        },
        {
            path: "/UserManagement/UserList",
            element: getElement(<UserList />)
        },
        {
            path: "/UserManagement/RoleList",
            element: getElement(<RoleList />)
        },
        ]
    },
    // {
    //     path: 'comp1',
    //     element: getElement(<Comp1 />)
    // },
    {
        path: 'home',
        element: getElement(<Home />)
    }
]
export default router