import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';

import Sidebar from './Sidebar';
import defaultTheme from '../defaultTheme';

const styles = theme => ({
    root: {
        width: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        marginLeft: 0,
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
        [theme.breakpoints.up('xs')]: {
            marginTop: '4em',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '3em',
            padding: 0,
        },
    },
    contentShift: {
        [theme.breakpoints.up('sm')]: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    },
    loader: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 16,
        zIndex: 1200,
        color: 'white',
    },
});

class Layout extends Component {
    render() {
        const {
            classes,
        } = this.props;

        return (
            <div className={ classes.root }>
                <div className={ classes.appFrame }>
                    <Sidebar/>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object,
};

Layout.defaultProps = {
    theme: defaultTheme,
};

const enhance = compose(
    withStyles(styles),
);

export default enhance(Layout);
