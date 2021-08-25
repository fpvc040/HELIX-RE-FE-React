import React from 'react';

import { addStories } from '.storybook/helpers';

import Button from '.';
import IconAssets from '../../../assets/svg/IconAssets';

const text = 'Button';

addStories('Button/Dump', [
  {
    background: 'Dark',
    component: () => (
      <Button>
        {text}
      </Button>
    ),
    label: 'Primary Light',
  },
  {
    component: () => (
      <Button dark>
        {text}
      </Button>
    ),
    label: 'Primary Dark',
  },
  {
    component: () => (
      <Button sidebar>
        {text}
      </Button>
    ),
    label: 'Primary Sidebar',
  },
  {
    background: 'Dark',
    component: () => (
      <Button secondary>
        {text}
      </Button>
    ),
    label: 'Secondary Light',
  },
  {
    component: () => (
      <Button dark secondary>
        {text}
      </Button>
    ),
    label: 'Secondary Dark',
  },
  {
    component: () => (
      <Button secondary sidebar>
        {text}
      </Button>
    ),
    label: 'Secondary Sidebar',
  },
  {
    background: 'Dark',
    component: () => (
      <Button disabled>
        {text}
      </Button>
    ),
    label: 'Primary Light Disabled',
  },
  {
    component: () => (
      <Button dark disabled>
        {text}
      </Button>
    ),
    label: 'Primary Dark Disabled',
  },
  {
    component: () => (
      <Button disabled sidebar>
        {text}
      </Button>
    ),
    label: 'Primary Sidebar Disabled',
  },
  {
    background: 'Dark',
    component: () => (
      <Button disabled secondary>
        {text}
      </Button>
    ),
    label: 'Secondary Light Disabled',
  },
  {
    component: () => (
      <Button dark disabled secondary>
        {text}
      </Button>
    ),
    label: 'Secondary Dark Disabled',
  },
  {
    component: () => (
      <Button disabled secondary sidebar>
        {text}
      </Button>
    ),
    label: 'Secondary Sidebar Disabled',
  },
  {
    component: () => (
      <Button simple>
        {text}
      </Button>
    ),
    label: 'Simple',
  },
  {
    component: () => (
      <Button disabled simple>
        {text}
      </Button>
    ),
    label: 'Simple Disabled',
  },
  {
    component: () => (
      <Button size="xs">
        {text}
      </Button>
    ),
    label: 'Extra Small',
  },
  {
    component: () => (
      <Button size="sm">
        {text}
      </Button>
    ),
    label: 'Small',
  },
  {
    component: () => (
      <Button size="md">
        {text}
      </Button>
    ),
    label: 'Medium',
  },
  {
    component: () => (
      <Button size="lg">
        {text}
      </Button>
    ),
    label: 'Large',
  },
]);

addStories('Button/Icon/Dark', [
  {
    component: () => (
      <Button dark icon>
        <IconAssets />
      </Button>
    ),
    label: 'Primary',
  },
  {
    component: () => (
      <Button dark icon secondary>
        <IconAssets />
      </Button>
    ),
    label: 'Secondary',
  },
  {
    component: () => (
      <Button dark disabled icon>
        <IconAssets />
      </Button>
    ),
    label: 'Primary Disabled',
  },
  {
    component: () => (
      <Button dark disabled icon secondary>
        <IconAssets />
      </Button>
    ),
    label: 'Secondary Disabled',
  },
], {
  background: 'Light',
});

addStories('Button/Icon/Light', [
  {
    component: () => (
      <Button icon>
        <IconAssets />
      </Button>
    ),
    label: 'Primary',
  },
  {
    component: () => (
      <Button icon secondary>
        <IconAssets />
      </Button>
    ),
    label: 'Secondary',
  },
  {
    component: () => (
      <Button disabled icon>
        <IconAssets />
      </Button>
    ),
    label: 'Primary Disabled',
  },
  {
    component: () => (
      <Button disabled icon secondary>
        <IconAssets />
      </Button>
    ),
    label: 'Secondary Disabled',
  },
  {
    component: () => (
      <Button icon="circle">
        <IconAssets />
      </Button>
    ),
    label: 'Circle',
  },
], {
  background: 'Dark',
});
