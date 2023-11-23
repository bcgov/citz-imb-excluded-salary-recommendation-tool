import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { AuthenticationButton } from '../buttons/AuthenticationButton';
import Logo from '../../assets/logo.png';

type NavbarProps = {
  title?: string;
};

export const Navbar = (props: NavbarProps) => {
  const { title } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          sx={{ height: 100, mr: 2 }}
          alt="Government of B.C."
          src={Logo}
        />
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <AuthenticationButton />
      </Toolbar>
      <Box role="presentation" sx={{ height: 5 }} bgcolor="#FCBA19" />
    </AppBar>
  );
};

Navbar.defaultProps = {
  title: '',
};

export default Navbar;