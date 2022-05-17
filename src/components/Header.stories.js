import Header from './Header'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Atoms/Header',
    component: Header,
    parameters: {
        actions: { argTypesRegex: '.*' },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphone6'
    }}
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
    components: { Header },
    template: `
        <Header
        @onLogout="onLogout"
        @onLogin="onLogin"
        @onSignUp="onSignUp"
        v-bind="$props"
        />
    `
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: { id: 1, name: 'sasaki' }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  user: {}
}