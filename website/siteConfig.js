/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [];

const siteConfig = {
  title: "Open Source Mentorship" /* title for your website */,
  tagline: "Resources for mentoring and contributing to open source",
  url: "https://facebookmicrosites.github.io" /* your website url */,
  baseUrl: "/fbmentorship/" /* base url for your project */,
  projectName: "fbmentorship",
  organizationName: "facebookmicrosites",
  headerLinks: [
    { doc: "program-overview", label: "Docs" },
    { doc: "contributing-getting-started", label: "Contributing" },
    { doc: "mentoring-getting-started", label: "Mentoring" },
    { href: 'https://github.com/facebookmicrosites/fbmentorship', label: 'GitHub'},
    { languages: true },
  ],
  users,
  /* path to images for header/footer */
  headerIcon: "img/oss_logo.svg",
  footerIcon: "img/oss_logo.svg",
  favicon: "img/favicon.png",
  /* colors for website */
  colors: {
    primaryColor: "#203146",
    secondaryColor: "#334a7c"
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    "Copyright © " +
    new Date().getFullYear() +
    " Facebook, Inc.",
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "ocean"
  },
  scripts: [
    "https://buttons.github.io/buttons.js"
  ],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/facebookmicrosites/fbmentorship",
  cleanUrl: true,
};

module.exports = siteConfig;
