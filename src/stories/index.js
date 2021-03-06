import React from 'react';
import 'typeface-roboto';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs/react';

import { Button, Welcome } from '@storybook/react/demo';
import Typography from '@material-ui/core/Typography';
import MobileButton from '../components/MobileButton';
import IconedButton from '../components/IconedButton';
import MobileSearch from '../components/MobileSearch';
import StatusWelcome from '../components/Welcome';

storiesOf('Welcome', module)
  .add('To Status-Storybook', () => <StatusWelcome />)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('MobileButton', module)
  .addDecorator(withKnobs)
  .add('default', () => <MobileButton />)
  .add('with text', () => <MobileButton text={text('Text', 'with text')} onClick={action('clicked')}/>)
  .add('with custom styling', () => <MobileButton text={text('Text', 'with custom styling')} style={object('Styles', { margin: '10px 0 0 35%' })} onClick={action('clicked')}/>)

storiesOf('IconedButton', module)
  .addDecorator(withKnobs)
  .add('default', () => <IconedButton color={text('color (name or hex)', 'white')} backgroundColor={text('background-color', '#00352c')} />);

storiesOf('MobileSearch', module)
  .add('default', () => <MobileSearch />)
  .add('wide', () => <MobileSearch wide />)
  .add('placeholder', () => <MobileSearch placeholder="placeholder" />)

storiesOf('Typography', module)
  .add('Display 4', () =>
    <Typography variant="display4" gutterBottom>
      Display 4
    </Typography>
  )
  .add('Display 3', () =>
    <Typography variant="display3" gutterBottom>
      Display 3
    </Typography>
  )
  .add('Display 2', () =>
    <Typography variant="display2" gutterBottom>
      Display 2
    </Typography>
  )
  .add('Display 1', () =>
    <Typography variant="display1" gutterBottom>
      Display 1
    </Typography>
  )
  .add('Headline', () =>
    <Typography variant="Headline" gutterBottom>
      Headline
    </Typography>
  )
  .add('Title', () =>
    <Typography variant="title" gutterBottom>
      Title
    </Typography>
  )
  .add('Subheading', () =>
    <Typography variant="subheading" gutterBottom>
      Subheading
    </Typography>
  )
  .add('Body 2', () =>
    <Typography variant="body2" gutterBottom>
      Body 2
    </Typography>
  )
  .add('Body 1', () =>
    <Typography variant="body1" gutterBottom>
      Body 1
    </Typography>
  )
  .add('Caption', () =>
    <Typography variant="caption" gutterBottom>
      Caption
    </Typography>
  )
  .add('Button', () =>
    <Typography variant="button" gutterBottom>
      Button
    </Typography>
  )
