export interface Main{
  header:Header;
}

export interface Header {
  logo: { icon: string; path: string };
  nav: { name: string; path: string }[];
  serch: { icon: string; placeholder: string };
  user: { icon: string; path: string };
  cart: { name: string; icon: string; path: string; item: string };
  wishlist: { name: string; icon: string; path: string; item: string };
  button: Button;
  media:{icon:string; path:string}[];
}

export interface Button {
  name: string;
  path: string;
  radius: string;
}
