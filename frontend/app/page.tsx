"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import TitleScreen from "@/components/opening/TitleScreen";
import WelcomeScreen from "@/components/onboarding/WelcomeScreen";
import ProfilePicker from "@/components/onboarding/ProfilePicker";
import SetupComplete from "@/components/onboarding/SetupComplete";

import {
  createUsers,
  getUsers,
  setActiveUser,
} from "@/lib/users";

type User = {
  id: string;
  name: string;
};

type Screen =
  | "splash"
  | "welcome"
  | "setup"
  | "profiles";

export default function HomePage() {
  const router = useRouter();

  const [screen, setScreen] = useState<Screen>("splash");
  const [users, setUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const existingUsers = getUsers();

      if (existingUsers.length > 0) {
        setUsers(existingUsers);
        setScreen("profiles");
      } else {
        setScreen("welcome");
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  function handleFirstLaunch(name: string) {
    createUsers(name);

    setNewUserName(name);

    const createdUsers = getUsers();

    setUsers(createdUsers);

    setScreen("setup");
  }

  function handleSetupContinue() {
    setScreen("profiles");
  }

  function handleSelectUser(user: User) {
    setActiveUser(user.id);
    router.push("/dashboard");
  }

  switch (screen) {
    case "splash":
      return <TitleScreen />;

    case "welcome":
      return (
        <WelcomeScreen
          onContinue={handleFirstLaunch}
        />
      );

    case "setup":
      return (
        <SetupComplete
          name={newUserName}
          onContinue={handleSetupContinue}
        />
      );

    case "profiles":
      return (
        <ProfilePicker
          users={users}
          onSelect={handleSelectUser}
        />
      );

    default:
      return null;
  }
}