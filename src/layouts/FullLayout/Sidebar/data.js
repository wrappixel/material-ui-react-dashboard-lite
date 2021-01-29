import { HomeTwoTone, LockOpenTwoTone, ErrorTwoTone, AccountCircleTwoTone, BallotTwoTone} from '@material-ui/icons';

const Menuitems = [
    {
      href: '/home',
      icon: HomeTwoTone,
      title: 'Dashboard'
    },
    {
      href: '/table',
      icon: BallotTwoTone,
      title: 'Table'
    },
    {
      href: '/profile',
      icon: AccountCircleTwoTone,
      title: 'Profile'
    },
    {
      href: '/chart',
      icon: ErrorTwoTone,
      title: 'Chart'
    },
    {
      href: '/auth/404',
      icon: ErrorTwoTone,
      title: 'Error'
    },
    {
      href: '/auth/login',
      icon: LockOpenTwoTone,
      title: 'Login'
    }
 
 ];

 export default Menuitems;