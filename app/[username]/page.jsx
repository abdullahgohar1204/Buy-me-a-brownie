import React from "react";

const User = ({ params }) => {
  const { username } = React.use(params); // ← unwrap with React.use()
  return (
    <>
      <div>Hello {username}</div>
    </>
  );
};

export default User;
