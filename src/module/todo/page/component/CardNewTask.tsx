import * as React from 'react'
import { WithStyles, withStyles } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import CardNewTaskStyle from './CardNewTask.style'
import { TRootState } from 'conf/redux/reducer'
import { AppCard } from 'tpl'
import CardHeader from 'tpl/Card/CardHeader'
import CardBody from 'tpl/Card/CardBody'

export interface ICardNewTaskStateProps {
}

export interface ICardNewTaskDispatchProps {

}
export namespace CardNewTask {
  export interface Props extends WithStyles<typeof CardNewTaskStyle>, ICardNewTaskStateProps, ICardNewTaskDispatchProps {

  }

  export interface State {
  }
}
class CardNewTask extends React.Component<CardNewTask.Props, CardNewTask.State> {
  public render(): JSX.Element {
    return (
      <div>
        <AppCard
            chart
            title="Add new"
        >
            <CardHeader color={'primary'} plain={false} >
                {'Add new'}
            </CardHeader>
            <CardBody />
        </AppCard>
      </div>
  )
  }
}
const mapStateToProps = (state: TRootState): ICardNewTaskStateProps => ({
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: CardNewTask.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(CardNewTaskStyle)<CardNewTask.Props>(connect(mapStateToProps, mapDispatchToProps)(CardNewTask)))
