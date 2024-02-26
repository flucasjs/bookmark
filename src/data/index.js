import logoChrome from "../../public/images/logo-chrome.svg";
import logoFirefox from "../../public/images/logo-firefox.svg";
import logoOpera from "../../public/images/logo-opera.svg";

const features = [
  {
    label: "Simple Bookmarking",
    title: "Bookmark in one click",
    body: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    illustration: "bookmark",
  },
  {
    label: "Speedy Searching",
    title: "Intelligent search",
    body: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    illustration: "search",
  },
  {
    label: "Easy Sharing",
    title: "Share your bookmarks",
    body: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    illustration: "share",
  },
];

const extensions = [
  {
    browser: "Chrome",
    version: "62",
    logo: logoChrome,
  },
  {
    browser: "Firefox",
    version: "55",
    logo: logoFirefox,
  },
  {
    browser: "Opera",
    version: "46",
    logo: logoOpera,
  },
];

const faq = [
  {
    heading: "What is Bookmark?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    heading: "How can I request a new browser?",
    body: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    heading: "Is there a mobile app?",
    body: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    heading: "What about other Chromium browsers?",
    body: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

export {
  features,
  extensions,
  faq,
};