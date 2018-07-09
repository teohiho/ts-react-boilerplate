import { WithStyles, withStyles } from '@material-ui/core'
import * as classNames from 'classnames'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'

import { TRootState } from 'conf/redux/reducer'
import cardStyle from './AppCard.style'

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


export const AppCard = (withStyles(cardStyle)<Card.Props>(Card))
