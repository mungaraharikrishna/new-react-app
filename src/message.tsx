function Message() {
  const name = "Harikrishna";
  return (
    <>
      <h1>{name ? `Welcome ${name}` : "Welcome World"}</h1>
    </>
  );
}

export default Message;
