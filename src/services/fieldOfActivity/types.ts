export type RealEstatesDataTypes = {
  id: number;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  icon: string;
  iconHover: string;
  smallDescription: string;
  items: {
    icon: string;
    description: string;
  }[];
}
