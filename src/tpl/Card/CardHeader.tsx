import * as React from 'react'
import { CardContent, WithStyles, withStyles } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import * as classNames from 'classnames'


import cardHeaderStyle from './CardHeader.style'
import { TRootState } from 'conf/redux/reducer'
import { equals } from 'ramda'

export interface ICardHeaderStateProps {
}

export interface ICardHeaderDispatchProps {

}
export namespace CardHeader {
  export interface Props extends WithStyles<typeof cardHeaderStyle>, ICardHeaderStateProps, ICardHeaderDispatchProps {
    className?: any,
    color?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose' | any,
    plain?: boolean,
    stats?: boolean,
    icon?: boolean,
    tabSeletedId?: number
  }

  export interface State {
  }
}
class CardHeader extends React.Component<CardHeader.Props, CardHeader.State> {
  shouldComponentUpdate(nextProps: any) {
    return nextProps.tabSeletedId !== this.props.tabSeletedId
  }

  public render(): JSX.Element {
    const {
      classes,
      className,
      children,
      color,
      plain,
      stats,
      icon,
      ...rest } = this.props
    const cardHeaderClasses = classNames({
      [classes.cardHeader]: true,
      [classes[color + 'CardHeader']]: color,
      [classes.cardHeaderPlain]: plain,
      [classes.cardHeaderStats]: stats,
      [classes.cardHeaderIcon]: icon,
      [className]: className !== undefined,
    })
    return (
      <div className={cardHeaderClasses} {...rest}>
        {children}
      </div>
  )
  }
}
export default (withStyles(cardHeaderStyle)<CardHeader.Props>(CardHeader))
