import React from "react";
import {
  Avatar, Button, Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid, InputAdornment,   
  TextField,
  Typography,
  withStyles
} from "@material-ui/core";
import {LoginProps} from "./LoginProps";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailIcon from '@material-ui/icons/Email';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import { NavLink  } from "react-router-dom";


const styles = (theme) => createStyles({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


//const history = useHistory();
class Login extends React.Component<LoginProps>
{
 
  constructor(props:LoginProps) {
    super(props);   
        
  }
  
  submitForm (e) {
    e.preventDefault();   
  }
  
  render()
  {    
    const { classes } = this.props;    
    return (<Container component="main" maxWidth={"xs"}>
      <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Sign in
        </Typography>
          <form onSubmit={this.submitForm.bind(this)} className={classes.form} method="POST" >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <NavLink  to="/app">
            <Button              
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Sign In
            </Button>
            </NavLink >
            <Grid container>
              <Grid item xs>
                <NavLink  to="#" variant="body2">
                  Forgot password?
                </NavLink >
              </Grid>
              <Grid item>
                <NavLink  to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink >
              </Grid>
            </Grid>
          </form>

        </div>
      </Container>)
  }
}

const LoginComponent=withStyles(styles)(Login); 
export default LoginComponent;  