import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("fridge-magnets", "routes/fridge-magnets.tsx"),
	route("photo-magnets", "routes/photo-magnets.tsx"),
	route("retro-prints", "routes/retro-prints.tsx"),
	route("save-the-date", "routes/save-the-date.tsx"),
	route("learn-and-make", "routes/learn-and-make.tsx"),
	route("about", "routes/about.tsx"),
	route("contact", "routes/contact.tsx"),
	route("help", "routes/help.tsx"),
	route("shipping", "routes/shipping.tsx"),
	route("returns", "routes/returns.tsx"),
	route(":slug", "routes/product.$slug.tsx"),
] satisfies RouteConfig;
