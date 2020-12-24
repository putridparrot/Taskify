import React from "react";
import { NavLink } from "react-router-dom";
import {
  withStyles,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailIcon from "@material-ui/icons/Email";

const styles = (theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

export interface LoginProps {
  classes;
}

interface LoginState {
  userName: string;
  password: string;
}

// const history = useHistory();
class Login extends React.Component<LoginProps, LoginState> {
  // private userName: string;
  // private password: string;

  constructor(props) {
    super(props);

    // this.userName = "";
    // this.password = "";

    this.state = {
      userName: "",
      password: "",
    };

    this.authenticate = this.authenticate.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
  }

  handleUsernameChange(event) {
    // this.userName = event.target.value;
    this.setState({
      userName: event.target.value,
    });
  }

  handlePasswordChange(event) {
    // this.password = event.target.value;
    this.setState({
      password: event.target.value,
    });
  }

  authenticate(e) {
    const { userName, password } = this.state;
    // eslint-disable-next-line no-console
    console.log(`Nav Link Clicked.. ${userName} ${password}`);
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;

    const { userName, password } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            onSubmit={this.submitForm.bind(this)}
            className={classes.form}
            method="POST"
          >
            <TextField
              value={userName}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={this.handleUsernameChange}
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
              value={password}
              onChange={this.handlePasswordChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <NavLink to="/app" onClick={this.authenticate}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </NavLink>
            <Grid container>
              <Grid item xs>
                <NavLink to="#" variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/signup" variant="body2">
                  Don&apos;t have an account? Sign Up
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Login);
