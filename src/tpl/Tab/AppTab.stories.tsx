import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
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
