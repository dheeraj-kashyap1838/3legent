
interface LinkResolver {
    type?: string;
    uid: string | null;
}


export default function LinkResolver(page:LinkResolver) {
  switch (page.type) {
    case "homepage":
      return "/";
    case "blog":
      return `/blog/${page.uid}`;
    case "blogs":
      return `/blog`;

    case "page":
      return `/${page.uid}`;

    default:
      return "/";
  }
}
