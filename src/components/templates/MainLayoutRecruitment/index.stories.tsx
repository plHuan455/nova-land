import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainLayoutRecruitment from '.';

export default {
  title: 'Components/templates/MainLayoutRecruitment',
  component: MainLayoutRecruitment,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <MainLayoutRecruitment>
      <div style={{ marginTop: 100, marginBottom: 100 }}>
        Wise man call me a crazy
        Loving foolishly
        Dream about you all the time
        Everynight I fall asleep
        Chasing and dreaming
        Looking for your eyes Daisy!

        I am the foolish Gatsby who is found drown in love
        Can not you see my heart burning right through my hands?
        Cos your smile lifts me above and beyond the blue sky
        In the darkest moments here I still can see your eyes

        Love you to the moon and back
        I can not let you know this fact
        Love you to the moon and back
        I am so freaking missing you

        Aim for the moon yet so far
        I can not land among the stars
        Love you to the moon and back
        I am so freaking missing you

        I will never let my love get so close to you cos it hurts
        Swear to God!
        I wish I could

        I am the foolish Gatsby who is found drown in love
        Can not you see my heart burning right through my hands?
        Cos your smile lifts me above and beyond the blue sky
        In the darkest moments here I still can see your eyes

        Love you to the moon and back
        I can not let you know this fact
        Love you to the moon and back
        I am so freaking missing you

        Aim for the moon yet so far
        I can not land among the stars
        Love you to the moon and back
        I am so freaking missing you

        Love you to the moon and back
        I can not let you know this fact
        Love you to the moon and back
        I am so freaking missing you

        Aim for the moon yet so far
        I can not land among the stars
        Love you to the moon and back
        I am so freaking missing you
      </div>
    </MainLayoutRecruitment>
  </Router>
);
