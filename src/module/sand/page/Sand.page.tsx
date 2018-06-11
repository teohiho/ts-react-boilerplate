import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Theme, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';

interface ISandboxStateProps {}

interface ISandboxDispatchProps {}

interface ISandboxProps extends RouteComponentProps<void>, WithStyles<typeof styles> {
  renderRouter?: Function,
}

interface ISandboxState {}

class Sandbox extends React.Component<ISandboxProps, ISandboxState> {
  private renderRouter() {
    if (this.props.renderRouter) return this.props.renderRouter()
    return this.props.children
  }
  public render() {
    return (
      <div>
        <div>
          {this.renderRouter()}
        </div>
      </div>
    );
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing.unit * 10,
  },
});

const mapStateToProps = (state: any): ISandboxStateProps => {
  return {
    // ...mapStateToProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): ISandboxDispatchProps => {
  return {
    // ...mapDispatchToProps
  };
};

export default (withStyles(styles)<{}>(connect(mapStateToProps, mapDispatchToProps)(Sandbox)));

