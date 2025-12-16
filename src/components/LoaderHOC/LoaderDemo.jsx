import { withLoader } from "./withLoader";

const ProfileCard = ({ name, age }) => {
  return (
    <div>
      <p>Имя:{name}</p>
      <p>Возраст:{age}</p>
    </div>
  );
};

export const ProfileCardWithLoader = withLoader(
  ProfileCard,
  "Загрузка профиля..."
);
