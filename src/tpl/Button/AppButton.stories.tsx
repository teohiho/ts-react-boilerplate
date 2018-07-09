import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react'
import AppButton from './AppButton'



storiesOf('Button', module)
  .add('pure', withInfo({ inline: true })(() => <AppButton />),
)
