import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react'
import configureStore from 'conf/redux/redux'
import { Provider } from 'react-redux'
import Task from './Task'


const { store } = configureStore()

storiesOf('Task', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('pure', withInfo({ inline: true })(() => <Task tag="" tasks={
	['1', '2', '3']
	// [
	//   {
	//     id: '1',
	//     completed: false,
	//     tags: ['Home'],
	//     title: 'Task 1',
	//   },
	//   {
	//     id: '2',
	//     completed: true,
	//     tags: ['Home'],
	//     title: 'Task 2',
	//   },
	//   {
	//     id: '3',
	//     completed: true,
	//     tags: ['Home'],
	//     title: 'Task 3',
	//   },
	//   {
	//     id: '4',
	//     completed: true,
	//     tags: ['Home'],
	//     title: 'Task 4',
	//   },
	// ]
  } />),
)
