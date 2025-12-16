export function withLogger(WrappedComponent, label) {
  function WithLogger(props) {
    console.log(label, WrappedComponent.name, { ...props });
    return <WrappedComponent {...props} />;
  }
  return WithLogger;
}
