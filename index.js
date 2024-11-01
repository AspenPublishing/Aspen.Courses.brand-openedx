// eslint-disable-next-line import/no-unresolved
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';

export { default as logoHeader } from './logo.svg';
export { default as footerLogo } from './logo-footer.svg';
export { default as svgSprite } from './svg-sprite.svg';

export const footerIcons = [
  {
    url: 'https://twitter.com/AspenPublishing',
    title: 'twitter-x',
    icon: 'ico-twitter-x-circle',
  },
  {
    url: 'https://www.linkedin.com/company/aspenpublishing/',
    title: 'linkedin',
    icon: 'ico-linkedin',
  },
  {
    url: 'https://www.youtube.com/@aspenpublishing6830',
    title: 'youtube',
    icon: 'ico-youtube',
  },
  {
    url: 'https://www.facebook.com/profile.php?id=61555997104704',
    title: 'facebook',
    icon: 'ico-facebook',
  },
];

export const footerLinks = [
  {
    href: 'https://aspenpublishing.com/pages/jdnext',
    message: messages['footer.staticPages.about'],
    targetBlank: true,
  },
  {
    href: 'https://support.aspenpublishing.com/hc/en-us/categories/19204583377428-JD-Next',
    message: messages['footer.staticPages.support'],
    targetBlank: true,
  },
  {
    href: `${getConfig().LMS_BASE_URL}/agreement`,
    message: messages['footer.staticPages.agreement'],
    targetBlank: false,
  },
  {
    href: `${getConfig().LMS_BASE_URL}/tos`,
    message: messages['footer.staticPages.tos'],
    targetBlank: false,
  },
  {
    href: `${getConfig().LMS_BASE_URL}/privacy`,
    message: messages['footer.staticPages.privacy'],
    targetBlank: false,
  },
  {
    href: `${getConfig().LMS_BASE_URL}/disclosure`,
    message: messages['footer.staticPages.disclosure'],
    targetBlank: false,
  },
];

export const isFooterDark = true;

export const displayCreatedByBlock = false;
