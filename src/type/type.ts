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
  image: Image;
  layout: string;
}

export interface ErrowButton {
  name: string;
  path: string;
  icon: string;
}

export interface SalesSection {
  image: Image;
  content: {
    sale?: string;
    heading: string;
    text: string;
    button: ErrowButton;
  };
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

export interface BlogCard {
  image: Image;
  title: { name: string; path: string };
  date: string;
}

export interface FilterBlog {
  tabs: { name: string; class?: string }[];
  sortOption: string;
  blogs: BlogCard[];
  button: string;
}

// ========================

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface ArticleContent {
  title: string;
  text: string;
}

export interface Article {
  breadCrumb: BreadCrumb[];
  backBtn: {
    path: string;
    name: string;
  };
  type: string;
  title: string;
  author: string;
  date: string;
  coverImage: Image;
  text: string;
  content: ArticleContent;
}

export interface Image {
  path: string;
  alt: string;
}

export interface ImageGroupContent {
  title: string;
  text: string;
}

export interface ImageGroup {
  images: Image[];
  content: ImageGroupContent[];
}

export interface SplitContentItem {
  title: string;
  text: string;
}

export interface SplitContent {
  image: Image;
  content: SplitContentItem[];
}

export interface SingleBlog {
  blogArticle: Article;
  imageGroup: ImageGroup;
  splitContent: SplitContent;
}
