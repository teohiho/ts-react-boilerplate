import * as React from 'react'
import {  WithStyles, withStyles } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import * as classNames from 'classnames'


import CardBodyStyle from './CardBody.style'
import { TRootState } from 'conf/redux/reducer'

export interface ICardBodyStateProps {
}

export interface ICardBodyDispatchProps {

}
export namespace CardBody {
  export interface Props extends WithStyles<typeof CardBodyStyle>, ICardBodyStateProps, ICardBodyDispatchProps {
    className?: any,
    plain?: boolean,
    profile?: boolean,
  }

  export interface State {
  }
}
class CardBody extends React.Component<CardBody.Props, CardBody.State> {
  public render(): JSX.Element {
    const {
      classes,
      className,
      children,
      plain,
      profile,
      ...rest } = this.props
    const cardBodyClasses: any = classNames({
        [classes.cardBody]: true,
        [classes.cardBodyPlain]: plain,
        [classes.cardBodyProfile]: profile,
        [className]: className !== undefined,
      })
    return (
      <div className={cardBodyClasses} {...rest} >
        {children}
      </div>
    )
  }
}

export default (withStyles(CardBodyStyle)<CardBody.Props>(CardBody))
