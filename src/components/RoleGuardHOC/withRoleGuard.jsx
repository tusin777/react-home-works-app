export const withRoleGuard = (WrappedComponent, allowedRoles) => {
  const WithRoleGuard = (props) => {
    if (allowedRoles.includes(props.role)) {
      return <WrappedComponent {...props} />;
    }
    return (
      <div>
        <p>
          Доступ запрещён это панель: {props.title}. Ваша роль: {props.role}.
        </p>
        <p>Доступ разрешен для:</p>
        <ul>
          {allowedRoles.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    );
  };
  return WithRoleGuard;
};
