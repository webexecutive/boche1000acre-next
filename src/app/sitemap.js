import rooms from "../data/roomsData";
import blogData from "../data/blogData";
import events from "../data/events";
import { packages } from "../data/packagesData";
import { aboutData } from "../data/aboutData";

const BASE_URL = "https://boche1000acre.com";

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/stays",
    "/packages-and-offers",
    "/adventures",
    "/events",
    "/blog",
    "/gallery",
    "/booking",
    "/contact",
    "/boomiputhra",
    "/privacy-policy",
    "/terms-conditions",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const stayRoutes = rooms.map((room) => ({
    url: `${BASE_URL}/stays/${room.id}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes = blogData.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const eventRoutes = events.map((event) => ({
    url: `${BASE_URL}/events/${event.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const packageRoutes = packages.map((pkg) => ({
    url: `${BASE_URL}/packages-and-offers/${pkg.id}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const aboutRoutes = aboutData.map((item) => ({
    url: `${BASE_URL}/about/${item.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...stayRoutes,
    ...blogRoutes,
    ...eventRoutes,
    ...packageRoutes,
    ...aboutRoutes,
  ];
}
