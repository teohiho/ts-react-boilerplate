import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import AppButton from './AppButton'



storiesOf('Button', module)
  .add('pure', withInfo({ inline: true })(() => <AppButton  />),
)
