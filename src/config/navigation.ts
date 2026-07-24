import { ROUTES } from "./routes";

export const NAVIGATION = [
  {
    title: "Home",
    path: ROUTES.HOME,
  },
  {
    title: "About",
    path: ROUTES.ABOUT,
  },
  {
    title: "Services",
    path: ROUTES.SERVICES,
  },
  {
    title: "Gallery",
    path: ROUTES.GALLERY,
  },
  {
    title: "Contact",
    path: ROUTES.CONTACT,
  },
] as const;