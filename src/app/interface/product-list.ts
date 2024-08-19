export interface Product {
  _id?: number;
  title: string;
  desc: string;
  image: string;
  price: number;
  category?: string;
  isShow: boolean;
}
