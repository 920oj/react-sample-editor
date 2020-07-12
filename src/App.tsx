import React, { useContext } from "react";

import { FirebaseContext } from "./Firebase";
import { FirebaseAuth, signInWithRedirect, signOut } from "./FirebaseAuth";

const Content: React.FC = () => {
  const { userId, userName } = useContext(FirebaseContext);
  return (
    <div>
      {userName} ({userId}) がログイン中
    </div>
  );
};

const App: React.FC = () => {
  const NotSignedIn = React.useCallback(() => {
    return <button onClick={() => signInWithRedirect()}>ログイン</button>;
  }, []);

  const Loading = React.useCallback(() => {
    return <div>読み込み中...</div>;
  }, []);

  return (
    <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
      <Content />
      <button onClick={signOut}>ログアウト</button>
    </FirebaseAuth>
  );
};

export default App;
