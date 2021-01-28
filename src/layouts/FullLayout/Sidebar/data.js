import { HomeTwoTone, LockOpenTwoTone, ErrorTwoTone, AccountCircleTwoTone, BallotTwoTone} from '@material-ui/icons';

const Menuitems = [
    {
      href: '/app/home',
      icon: HomeTwoTone,
      title: 'Dashboard'
    },
    {
      href: '/app/table',
      icon: BallotTwoTone,
      title: 'Table'
    },
    {
      href: '/app/profile',
      icon: AccountCircleTwoTone,
      title: 'Profile'
    },
    {
      href: '/app/chart',
      icon: ErrorTwoTone,
      title: 'Chart'
    },
    {
      href: '/404',
      icon: ErrorTwoTone,
      title: 'Error'
    },
    {
      href: '/login',
      icon: LockOpenTwoTone,
      title: 'Login'
    }
 
 ];

 export default Menuitems;