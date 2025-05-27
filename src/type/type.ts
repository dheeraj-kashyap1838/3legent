export interface Header {
  logo: { icon: string; path: string };
  nav: { name: string; path: string }[];
  serch: { name: string; icon: string; placeholder: string };
  user: { name: string; icon: string; path: string };
  cart: { name: string; icon: string; path: string; item: string };
  wishlist: { name: string; icon: string; path: string; item: string };
  button: Button;
  media: { icon: string; path: string }[];
}

export interface Button {
  name: string;
  path: string;
  radius: string;
}

export interface heroSlider {
  slider: { path: string; alt: string }[];
  hadding: string;
  text: string;
}

export interface BannerGrid {
  name: string;
  button: ErrowButton;
  image: {
    path: string;
    alt: string;
  };
  layout: string;
}

export interface ErrowButton {
  name: string;
  path: string;
  icon: string;
}

export interface SalesSection {
  image: {
    path: string;
    alt: string;
  };
  content: {
    sale?: string;
    heading: string;
    text: string;
    button: ErrowButton;
  };
}

export interface Image {
  path: string;
  alt: string;
}

export interface SmallCard {
  icon: Image;
  title: string;
  description: string;
}

export interface CardSection {
  cards: SmallCard[];
}

export interface ArticleSection {
  heading: string;
  headingButton: ErrowButton;
  cards: { image: Image; heading: string; button: ErrowButton }[];
}

export interface NewsletterSection {
  bgImage: string;
  title: string;
  subtitle: string;
  icon: Image;
  input: {
    placeholder: string;
    type: string;
  };
  buttonText: string;
}

export interface FooterSection {
  logo: {
    icon: string;
    path: string;
  };
  tagline: string;
  navigationLinks: {
    name: string;
    path: string;
  }[];
  legal: {
    copyright: string;
    privacyPolicy: string;
    termsOfUse: string;
  };
  socialLinks: {
    platform: string;
    icon: string;
    url: string;
  }[];
}

export interface ContactHeader {
  heading: string;
  description: string;
}

export interface BreadCrumb {
  label: string;
  url: string;
  class?: string;
}

export interface contactForm {
  sectionTitle: string;
  formCard: SmallCard[];
  form: {
    name: formInput;
    email: formInput;
    message: formInput;
    submitButton: string;
  };
  map: {
    src: string;
    alt: string;
  };
}

export interface formInput {
  label: string;
  placeholder: string;
  type: string;
  name: string;
}

export interface PageBanner {
  breadCrumb: BreadCrumb[];
  heading: string;
  description: string;
  backGround: string;
}
