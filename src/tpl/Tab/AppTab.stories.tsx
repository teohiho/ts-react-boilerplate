import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react'
import AppTab from './AppTab'



storiesOf('Tab', module)
  .add('pure', withInfo({ inline: true })(() => <AppTab headerColor="primary" tabs={[
	{
		tabName: 'A',
		tabContent: <span>abc</span>,
	},
	{
		tabName: 'B',
		tabContent: <span>bcd</span>,
	},
  ]}/>),
)
