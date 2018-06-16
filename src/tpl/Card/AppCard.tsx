import * as React from 'react'
import { WithStyles, withStyles } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import * as classNames from 'classnames'

import cardStyle from './AppCard.style'
import { TRootState } from 'conf/redux/reducer'

export interface ICardStateProps {
}

export interface ICardDispatchProps {

}
export namespace Card {
  export interface Props extends WithStyles<typeof cardStyle>, ICardStateProps, ICardDispatchProps {
    title?: string,
    className?: string,
    chart?: boolean,
    profile?: boolean,
    plain?: boolean,
  }

  export interface State {
  }
}
class Card extends React.Component<Card.Props, Card.State> {
  public render(): JSX.Element {
    const {
        classes,
        className,
        children,
        plain,
        profile,
        chart,
        ...rest  } = this.props
      const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile,
        [classes.cardChart]: chart,
        // [className]: className !== undefined,
      })
    return (
        <div className={cardClasses} {...rest}>
            {children}
         </div>
    )
  }
}
const mapStateToProps = (state: TRootState): ICardStateProps => ({
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Card.Props): any => ({
  // ...mapDispatchToProps
})

export const AppCard =  (withStyles(cardStyle)<Card.Props>(connect(mapStateToProps, mapDispatchToProps)(Card)))