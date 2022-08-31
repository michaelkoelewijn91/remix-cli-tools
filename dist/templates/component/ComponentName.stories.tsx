import { ComponentStory, ComponentMeta } from '@storybook/react';
import ComponentName from './index';

export default {
    title: 'Component',
    component: ComponentName,
} as ComponentMeta<typeof ComponentName>;

const template: ComponentStory<typeof ComponentName> = (args) => {
    return (
        <ComponentName {...args} />
    )
};

export const Default = template.bind({});

// Set default arguments for storybook controls
Default.args = {
};

// Use decorators for wrapping your component in custom tags inside of storybook
Default.decorators = [
    (Story) => (
        <>{Story()}</>
    )   
]
