import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { SectionAppBar, Content } from "./AppBar.styled";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Content>
      <SectionAppBar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </SectionAppBar>
    </Content>
  );
};
