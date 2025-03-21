interface RoutesConfig {
  name: string;
  path: string;
}

export const ROUTERS: RoutesConfig[] = [
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "News",
    path: "/news",
  },
  {
    name: "Blockchain",
    path: "/blockchain",
  },
  {
    name: "Lyrics",
    path: "/lyrics",
  },
  {
    name: "MarkDown",
    path: "/markdown",
  },
  {
    name: "Blog",
    path: "/blogs",
  },
];
