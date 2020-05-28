import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withA11y } from '@storybook/addon-a11y';

import { Button } from '@storybook/angular/demo';
import * as emojiNotes from './emoji-notes.md';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, withA11y],
};

export const withKnobss = () => ({
  component: Button,
  props: {
    text: text('text', 'Hello button component'),
  },
});

export const Text = () => ({
  component: Button,
  props: {
    text: 'Hello Button',
  },
});

export const Emoji = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: emojiNotes },
};

export const WithSomeEmojiAndAction = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
    onClick: action('This was clicked OMG'),
  },
});

WithSomeEmojiAndAction.story = {
  name: 'with some emoji and action',
  parameters: { notes: 'My notes on a button with emojis' },
};

export const ButtonWithLinkToAnotherStory = () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
