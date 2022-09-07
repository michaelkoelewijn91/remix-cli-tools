import { ComponentStory, ComponentMeta } from '@storybook/react';
import ComponentNameComponent from './index';

export default {
    title: 'ComponentName',
    component: ComponentNameComponent,
} as ComponentMeta<typeof ComponentNameComponent>;

const template: ComponentStory<typeof ComponentNameComponent> = (args) => {
    return (
        <ComponentNameComponent {...args} />
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
