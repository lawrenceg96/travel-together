export type User = {
  id: string;
  name: string;
};

const STORAGE_KEY = "travel-together-users";

export function usersExist() {
  if (typeof window === "undefined") return false;

  return localStorage.getItem(STORAGE_KEY) !== null;
}

export function getUsers(): User[] {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) return [];

  return JSON.parse(stored);
}

export function createUsers(firstName: string) {
  if (typeof window === "undefined") return;

  const name = firstName.trim();

  let users: User[];

  if (name.toLowerCase() === "lawrence") {
    users = [
      {
        id: "lawrence",
        name: "Lawrence",
      },
      {
        id: "ciara",
        name: "Ciara",
      },
    ];
  } else if (name.toLowerCase() === "ciara") {
    users = [
      {
        id: "lawrence",
        name: "Lawrence",
      },
      {
        id: "ciara",
        name: "Ciara",
      },
    ];
  } else {
    users = [
      {
        id: "user-1",
        name,
      },
    ];
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(users)
  );
}

const ACTIVE_USER_KEY = "travel-together-active-user";

export function setActiveUser(id: string) {
  if (typeof window === "undefined") return;

  localStorage.setItem(ACTIVE_USER_KEY, id);
}

export function getActiveUser() {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(ACTIVE_USER_KEY);
}