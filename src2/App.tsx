import { AppBar, Badge, Divider, Drawer, Hidden, IconButton, List, ListItem,
    ListItemIcon, ListItemText, Theme, Toolbar, Typography, WithStyles, withStyles } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps, Router } from 'react-router';
import { Todo } from './model/model';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import { RootState } from './reducers/index';
import withRoot from './withRoot';

export namespace App {
    export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
        todoList: Todo[];
    }

    export interface State {
        mobileOpen: boolean;
    }
}

const history = createBrowserHistory();

class App extends React.Component<App.Props, App.State> {

    state = {
        mobileOpen: true,
    };

    routes = (
        <div className={this.props.classes.content}>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/home" component={HomePage} />
            <Route exact={true} path="/todo" component={TodoPage} />
        </div>
    );
    renderDrawer() {
        const tabs = [
            {
                title: 'Home',
                icon: 'home',
                onClick: () => history.push('/'),
            }, {
                title: 'Todo',
                icon: 'view_list',
                onClick: () => history.push('/todo'),
            },
        ]
        const drawer = tabs.map( tab => (
            <div>
                <Divider />
                <List>
                    <ListItem button onClick={tab.onClick}>
                        <ListItemIcon>
                            <i className="material-icons" style={{color: '#1107da'}}>{tab.icon}</i>
                        </ListItemIcon>
                        <ListItemText primary={tab.title} />
                    </ListItem>
                </List>
            </div>
        ))
        return (
            <div>
                <div className={this.props.classes.drawerHeader} />
                {drawer}
            </div>
        )
    }
    render() {
        // const auth = true;
        let drawer = (
            <div>
                <div className={this.props.classes.drawerHeader} />
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push('/')}>
                        <ListItemIcon>
                            <i className="material-icons" style={{color: '#1107da'}}>home</i>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push('/todo')}>
                        <ListItemIcon>
                            {this.renderTodoIcon()}
                        </ListItemIcon>
                        <ListItemText primary="Todo" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <Router history={history}>
                <div className={this.props.classes.root}>
                    <div className={this.props.classes.appFrame}>
                       
                        <Hidden mdUp>
                            <Drawer
                                variant="temporary"
                                anchor={'left'}
                                open={this.state.mobileOpen}
                                classes={{
                                    paper: this.props.classes.drawerPaper,
                                }}
                                onClose={this.handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden smDown implementation="css">
                            <Drawer
                                variant="permanent"
                                open
                                anchor="bottom"
                                classes={{
                                    paper: this.props.classes.drawerPaper,
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <div className={this.props.classes.bodyRight}>
                        <AppBar position="static" className={this.props.classes.appBar}>
                            <Toolbar>
                                <IconButton
                                    className={this.props.classes.navIconHide}
                                    color="inherit"
                                    onClick={this.handleDrawerToggle} 
                                    aria-label="Menu"
                                >
                                    <i className="material-icons" style={{color: 'white'}}>sort</i>
                                </IconButton>
                                <Typography variant="title" color="inherit">
                                Title
                                </Typography>
                            </Toolbar>
                            </AppBar>
                            {/* <Drawer
                                variant="permanent"
                                open
                                anchor="bottom"
                                classes={{
                                    paper: this.props.classes.drawerPaper2,
                                }}
                            >
                                <h1>Hello</h1>
                            </Drawer> */}
                            {this.routes}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    renderTodoIcon() {
        let uncompletedTodos = this.props.todoList.filter(t => t.completed === false);

        if (uncompletedTodos.length > 0) {
            return (
                <Badge color="secondary" badgeContent={uncompletedTodos.length}>
                    <i className="material-icons" style={{color: '#1107da'}}>view_list</i>
                </Badge>
            );
        } else {
            return (
                <i className="material-icons" style={{color: '#1107da'}}>view_list</i>
            );
        }
    }

    private handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
}

const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'absolute',
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    bodyRight: {
        flex: 1,
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    drawerPaper2: {
        width: 300,
        height: '100%',
    },
    content: {
        // backgroundColor: theme.palette.background.default,
        // width: '100%',
        height: 'calc(100% - 56px)',
        flex: 1,
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

function mapStateToProps(state: RootState) {
    return {
        todoList: state.todoList
    };
}

export default (withRoot(withStyles(styles)<{}>(connect(mapStateToProps)(App))));
