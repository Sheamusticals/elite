export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/trips/:path*",
    "/reservations/:path*",
    "/properties/:path*",
    "/favourites/:path*"
  ]
};
