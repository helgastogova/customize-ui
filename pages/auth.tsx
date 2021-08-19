import BaseLayout from '@components/layout/baseLayout';
import Button from '@ui/button';

import {useAuth} from '../lib/auth';

const Auth: React.FC = () => {
  const auth = useAuth();

  return (
    <BaseLayout title="Authentication">
      {auth.user ? (
        <>
          <p>Email: {auth.user.email}</p>
          <br />
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        </>
      ) : (
        <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
      )}
    </BaseLayout>
  );
};

export default Auth;
