
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';

import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
//routers
import { Redirect } from 'react-router-dom'


export const drawerWidth = "20%";
// Snackbar
const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};
class MySnackbarContent extends React.Component{

  constructor(props){
    super(props)
    this.state={open: true}
    this.handleClose=this.handleClose.bind(this)
  }
  handleClose(){
    this.setState({open: false})
  }
  render(){
    const { classes, className, message, onClose, variant, ...other } = this.props;
    const Icon = variantIcon[variant];


    return (<SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }

      {...other}
    />)
  }
}


MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

//----------
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },buttonProgress: {
    color: "green",
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});


class ComeBack extends React.Component {


  constructor(props){
    super(props)
    this.state={drawerState: true}

    this.handleUsername=this.handleUsername.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
    this.doLogin=this.doLogin.bind(this)
    this.renderRedirect=this.renderRedirect.bind(this)

  }


  handleUsername=name => event => {
    this.setState({ username: event.target.value });
  };
  handlePassword=password=>event=>{
    this.setState({password: event.target.value})
  };

  doLogin=()=>{
    this.props.doLogin(this.state.username,this.state.password);

  }


  ToggleDrawer = () => {
    this.setState({ drawerState: !this.state.drawerState });
  };


  renderRedirect = () => {
    return <Redirect to='/' />
  }

  render(){

    const  classes = this.props.classes;
    let loading=this.props.loading;
    let error=this.props.payload.message;

    return (
      <main className={classes.main}>

        {this.props.payload.isLogged!=="undefined"?this.renderRedirect():"-"}
     <CssBaseline />
     <Paper className={classes.paper}>
       <Avatar className={classes.avatar}>
         <LockOutlinedIcon />

       </Avatar>

       <Typography component="h1" variant="h5">
         Sign in
       </Typography>
       {error&&  <MySnackbarContentWrapper
      variant="error"
      className={classes.margin}
      message="wrong username or password"
    />}
       <form className={classes.form}>
         <FormControl margin="normal" required fullWidth>
           <InputLabel htmlFor="email" >Email Address</InputLabel>
           <Input id="email" name="email" onChange={this.handleUsername()} autoComplete="email" autoFocus />
         </FormControl>
         <FormControl margin="normal" required fullWidth>
           <InputLabel htmlFor="password">Password</InputLabel>
           <Input onChange={this.handlePassword()} name="password" type="password" id="password" autoComplete="current-password" />
         </FormControl>
         <FormControlLabel
           control={<Checkbox value="remember" color="primary" />}
           label="Remember me"
         />
         <Button
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
           onClick={this.doLogin}
           disabled={!(this.state.username!==undefined && this.state.password!==undefined )}
         >
           Sign in
         </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}


       </form>
     </Paper>
   </main>

    )
  }
}

ComeBack.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComeBack);
