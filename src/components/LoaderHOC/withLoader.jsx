export const withLoader = (WrappedComponent, loaderText) => {
  const WithLoader = (props) => {
    if (props.isLoading === true) {
      return (
        <p>
          {loaderText}(<span>Компонент сейчас скрыт)</span>
        </p>
      );
    }
    return <WrappedComponent {...props} />;
  };
  return WithLoader;
};
