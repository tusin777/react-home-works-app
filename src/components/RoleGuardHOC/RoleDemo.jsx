import { withRoleGuard } from "./withRoleGuard";

const AdminPanel = ({ title }) => {
  return <p>Это панель: {title}</p>;
};

const UserPanel = ({ title }) => {
  return <p>Это панель: {title}</p>;
};

export const GuardedAdminPanel = withRoleGuard(AdminPanel, ["admin"]);

export const GuardedUserPanel = withRoleGuard(UserPanel, ["admin", "user"]);
