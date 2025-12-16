import { useEffect, useState } from "react";
import { EnhancedA, EnhancedB } from "../EnhancedComponent";
import { ProfileCardWithLoader } from "../LoaderHOC";
import { LoggedA, LoggedB } from "../LoggerHOC/LogDemo";
import { GuardedAdminPanel, GuardedUserPanel } from "../RoleGuardHOC";
import "./App.css";

function App() {
  const [isLoadR, setIsLoadR] = useState(false);
  const [isLoadA, setIsLoadA] = useState(false);

  useEffect(() => {
    const inA = setInterval(() => {
      setIsLoadA((prev) => !prev);
    }, 20000);

    const inB = setInterval(() => {
      setIsLoadR((prev) => !prev);
    }, 10000);

    return () => {
      clearInterval(inA);
      clearInterval(inB);
    };
  }, []);

  return (
    <div className="app-container">
      <h1>React Homework Template</h1>
      <p>Здесь будет домашнее задание к соответствующему уроку.</p>
      <EnhancedA initialCount={5} />
      <EnhancedB initialCount={10} />
      <LoggedA title={"Карточка A"} value={100} />
      <LoggedB title={"Карточка B"} value={200} />

      <GuardedAdminPanel role="admin" title="Админ-панель" />
      <GuardedUserPanel role="user" title="Панель пользователя" />
      <GuardedAdminPanel role="user" title="Админ-панель" />
      <ProfileCardWithLoader name="Руслан" age={35} isLoading={isLoadR} />
      <ProfileCardWithLoader name="Алена" age={32} isLoading={isLoadA} />
    </div>
  );
}

export default App;
