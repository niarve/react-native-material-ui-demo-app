import Home from './App/Home.react';
// components
import ActionButton from './ActionButton';
import Avatar from './Avatar';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import IconToggle from './IconToggle';
import List from './List';

export default {
    home: {
        title: 'Select component',
        Page: Home,
    },
    avatar: {
        title: 'Avatars',
        Page: Avatar,
    },
    button: {
        title: 'Buttons',
        Page: Button,
    },
    card: {
        title: 'Cards',
        Page: Card,
    },
    checkbox: {
        title: 'Checkboxes',
        Page: Checkbox,
    },
    actionButton: {
        title: 'Action button',
        Page: ActionButton,
    },
    iconToggle: {
        title: 'Icon toggles',
        Page: IconToggle,
    },
    list: {
        title: 'List items',
        Page: List,
    },
};