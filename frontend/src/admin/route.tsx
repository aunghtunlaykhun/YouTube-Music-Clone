import React from "react"
const LazyPosts = React.lazy(()=>import('./component/posts/posts'));
const LazyDashboard = React.lazy(()=>import('./component/dashboard/dashboard'));
export const AdminRoute = [
    {
        path:"/admin",
        element:<LazyDashboard/>
    },
    {
        path:'/posts',
        element:<LazyPosts/>
    }
]
