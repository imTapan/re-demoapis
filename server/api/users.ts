// server/api/users.ts

import { users } from "../data/users";

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const search = String(query.search || "").toLowerCase();
  const currentPage = parseInt(query.currentPage as string) || 1;
  const perPage = parseInt(query.perPage as string) || 5;
  const sortField = String(query.sortField || "name");
  const sortOrder = String(query.sortOrder || "asc");

  // Filter by search term (in name, email, or status)
  let filtered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.status.toLowerCase().includes(search)
  );

  // Sort
  filtered.sort((a, b) => {
    const aVal = a[sortField as keyof typeof a];
    const bVal = b[sortField as keyof typeof b];

    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "desc" ? bVal - aVal : aVal - bVal;
    }

    return sortOrder === "desc"
      ? String(bVal).localeCompare(String(aVal))
      : String(aVal).localeCompare(String(bVal));
  });

  const total = filtered.length;

  // Paginate
  const start = (currentPage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  return {
    data: paginated,
    meta: {
      total,
      currentPage,
      perPage,
    },
  };
});
