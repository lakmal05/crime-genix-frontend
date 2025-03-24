import { lazy } from "react";

const Routes = [
  {
    path: "/not-found",
    component: lazy(() => import("../pages/NotFoundPage")),
  },

  {
    path: "/login",
    component: lazy(() => import("../pages/LoginPage")),
  },
  {
    path: "/sign-up",
    component: lazy(() => import("../pages/SignUpPage")),
  },
  {
    path: "/dna-upload",
    component: lazy(() => import("../pages/DNAUploadPage")),
  },
  {
    path: "/add-perpetrators",
    component: lazy(() => import("../pages/AddPerpetratorsPage")),
  },
  {
    path: "/update-perpetrator",
    component: lazy(() => import("../pages/UpdatePerpetratorsPage")),
  },
  {
    path: "/view-perpetrators",
    component: lazy(() => import("../pages/ViewPerpetratorsPage")),
  },
  {
    path: "/perpetrator-profile",
    component: lazy(() => import("../pages/PerpetratorProfilePage")),
  },
  {
    path: "/dna-result",
    component: lazy(() => import("../pages/PerpetratorIdentifyPage")),
  },
  {
    path: "/my-profile",
    component: lazy(() => import("../pages/MyProfilePage")),
  },
];

export default Routes;
