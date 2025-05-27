export const HeaderSection = {
  logo: {
    icon: "/icon/Logo.svg",
    path: "/",
  },
  nav: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Product",
      path: "/product",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ],
  serch: {
    name: "serch",
    icon: "/icon/search1.svg",
    placeholder: "Search",
  },
  user: {
    name: "user",
    icon: "/icon/user-circle.svg",
    path: "/",
  },
  cart: {
    name: "Cart",
    icon: "/icon/shoppingbag.svg",
    path: "/",
    item: "2",
  },
  wishlist: {
    name: "Wishlist",
    icon: "icon/heart.svg",
    path: "/",
    item: "2",
  },
  button: {
    name: "Sign In",
    path: "/",
    radius: "radius_6",
  },
  media: [
    {
      icon: "/icon/instagram.svg",
      path: "/",
    },
    {
      icon: "/icon/facebook.svg",
      path: "/",
    },
    {
      icon: "/icon/youtube.svg",
      path: "/",
    },
  ],
};

export const FooterSection = {
  logo: {
    icon: "3legant.",
    path: "/",
  },
  tagline: "Gift & Decoration Store",
  navigationLinks: [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/" },
    { name: "Product", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Contact Us", path: "/" },
  ],
  legal: {
    copyright: "© 2023 3legant. All rights reserved",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
  },
  socialLinks: [
    {
      platform: "Instagram",
      icon: "/icon/ft_instagram.svg",
      url: "https://instagram.com",
    },
    {
      platform: "Facebook",
      icon: "/icon/ft_facebook.svg",
      url: "https://facebook.com",
    },
    {
      platform: "YouTube",
      icon: "/icon/ft_youtube.svg",
      url: "https://youtube.com",
    },
  ],
};

export const HomeData = {
  HeroSlider: {
    slider: [
      {
        path: "/images/hero_img.jpg",
        alt: "slider image",
      },
      {
        path: "/images/hero_img.jpg",
        alt: "slider image",
      },
      {
        path: "/images/hero_img.jpg",
        alt: "slider image",
      },
    ],
    hadding:
      "<h2>Simply Unique<span >/</span> Simply Better <span>.</span></h2>",
    text: "<p><span>3legant</span> is a gift & decorations store based in HCMC,Vietnam. Est since 2019.</p>",
  },
  BannerGrid: [
    {
      name: "Living Room",
      button: {
        name: "Shop Now",
        path: "/",
        icon: "icon/arrow-right.svg",
      },
      image: {
        path: "/images/living.png",
        alt: "living",
      },
      layout: "large",
    },
    {
      name: "Bedroom",
      button: {
        name: "Shop Now",
        path: "/",
        icon: "/icon/arrow-right.svg",
      },
      image: {
        path: "/images/bedroom.png",
        alt: "living",
      },
      layout: "small",
    },
    {
      name: "Kitchen",
      button: {
        name: "Shop Now",
        path: "/",
        icon: "/icon/arrow-right.svg",
      },
      image: {
        path: "/images/kitchen.png",
        alt: "living",
      },
      layout: "small",
    },
  ],
  SalesSection: {
    image: {
      path: "/images/sales.png",
      alt: "sales",
    },
    content: {
      sale: "SALE UP TO 35% OFF",
      heading: "HUNDREDS of New lower prices!",
      text: "It’s more affordable than ever to give every room in your home a stylish makeover",
      button: {
        name: "Shop Now",
        path: "/",
        icon: "icon/arrow-right.svg",
      },
    },
  },
  CardSection: {
    cards: [
      {
        icon: {
          path: "/icon/delivery.svg",
          alt: "delivery",
        },
        title: "Free Shipping",
        description: "Order above $200",
      },
      {
        icon: {
          path: "/icon/money.svg",
          alt: "money",
        },
        title: "Money-back",
        description: "30 days guarantee",
      },
      {
        icon: {
          path: "/icon/lock.svg",
          alt: "lock",
        },
        title: "Secure Payments",
        description: "Secured by Stripe",
      },
      {
        icon: {
          path: "/icon/call.svg",
          alt: "call",
        },
        title: "24/7 Support",
        description: "Phone and Email support",
      },
    ],
  },
  ArticleSection: {
    heading: "Articles",
    headingButton: {
      name: "More Articles",
      path: "/",
      icon: "icon/arrow-right.svg",
    },
    cards: [
      {
        image: {
          path: "/images/sofa.png",
          alt: "Decor",
        },
        heading: "7 ways to decor your home",
        button: {
          name: "Read More",
          path: "/",
          icon: "icon/arrow-right.svg",
        },
      },
      {
        image: {
          path: "/images/chairs.png",
          alt: "chairs",
        },
        heading: "7 ways to decor your home",
        button: {
          name: "Read More",
          path: "/",
          icon: "icon/arrow-right.svg",
        },
      },
      {
        image: {
          path: "/images/bed.png",
          alt: "Bed",
        },
        heading: "7 ways to decor your home",
        button: {
          name: "Read More",
          path: "/",
          icon: "icon/arrow-right.svg",
        },
      },
    ],
  },
  NewsletterSection: {
    bgImage: "/images/newsletter.png",
    title: "Join Our Newsletter",
    subtitle: "Sign up for deals, new products and promotions",
    icon: {
      path: "/icon/email.svg",
      alt: "email",
    },
    input: {
      placeholder: "Email address",
      type: "email",
    },
    buttonText: "Signup",
  },
};

export const ContactData = {
  BreadCrumb: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Contact Us",
      url: "/contact",
      class: "active",
    },
  ],
  ContactHeader: {
    heading:
      "We believe in sustainable decor. We’re passionate about life at home.",
    description:
      "Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.",
  },
  ContactAbout: {
    containerSize: "",
    image: {
      path: "/images/sales.png",
      alt: "sales",
    },
    content: {
      sale: "",
      heading: "About Us",
      text: "3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.Our customer service is always prepared to support you 24/7",
      button: {
        name: "Shop Now",
        path: "/",
        icon: "icon/arrow-right.svg",
      },
    },
  },
  contactForm: {
    sectionTitle: "Contact Us",
    formCard: [
      {
        icon: {
          path: "/icon/store.svg",
          alt: "store",
        },
        title: "ADDRESS",
        description: "234 Hai Trieu, Ho Chi Minh City, Viet Nam",
      },
      {
        icon: {
          path: "/icon/call.svg",
          alt: "call",
        },
        title: "CONTACT US",
        description: "+84 234 567 890",
      },
      {
        icon: {
          path: "/icon/mail.svg",
          alt: "mail",
        },
        title: "EMAIL",
        description: "hello@3legant.com",
      },
    ],
    form: {
      name: {
        label: "FULL NAME",
        placeholder: "Your Name",
        type: "text",
        name: "name",
      },
      email: {
        label: "EMAIL ADDRESS",
        placeholder: "Your Email",
        type: "email",
        name: "email",
      },
      message: {
        label: "MESSAGE",
        placeholder: "Your message",
        type: "textarea",
        name: "message",
      },
      submitButton: "Send Message",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.515951282227!2d106.70232187504185!3d10.771739089376767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f414519d1f9%3A0xc0bd40da46e38fe0!2zxJAuIEjhuqNpIFRyaeG7gXUsIELhur9uIE5naMOpLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2sin!4v1748327811976!5m2!1sen!2sin",
      alt: "Map of Ho Chi Minh City",
    },
  },
  ContactCards: [
      {
        icon: {
          path: "/icon/store.svg",
          alt: "store",
        },
        title: "ADDRESS",
        description: "234 Hai Trieu, Ho Chi Minh City, Viet Nam",
      },
      {
        icon: {
          path: "/icon/call.svg",
          alt: "call",
        },
        title: "CONTACT US",
        description: "+84 234 567 890",
      },
      {
        icon: {
          path: "/icon/mail.svg",
          alt: "mail",
        },
        title: "EMAIL",
        description: "hello@3legant.com",
      },
    ],
};
