import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

export default {
  title: 'Button',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl']
      }
    }
  }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Hello World',
  variant: 'primary',
  size: 'md',
  as: 'a'
};
