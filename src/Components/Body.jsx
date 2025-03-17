import React, { useEffect, useState } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/FireBase";

import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter,RouterProvider, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser , removeUser } from "../utils/userSlice";

function Body()
{



 const appRouter = createBrowserRouter([
{path: "/",
    element: <Login/>
}
,
{path: "/browse",
    element: <Browse/>
}
])



    return(
        <div>

<RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;