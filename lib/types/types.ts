export interface Category {
  id: number;
  title: string;
  TitleEn?:string;
  parent?: (number | null) | Category;
  image?:string
  color?:string
  breadcrumbs?:
    | {
        doc?: (number | null) | Category;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  slug?: string | null;
  slugLock?: boolean | null;
  products?: {
    docs?: (number | Product)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number | null;
  /**
   * با ذخیره محصول این فیلد برمبنای درصد تخفیف محاسبه می‌شود
   */
  discountedPrice?: number | null;
  gallery?: null  | string;
  category: number | Category;
  slug?: string | null;
  slugLock?: boolean | null;
  /**
   * میانگین امتیازات این محصول
   */
  ratingAverage?: number | null;
  /**
   * تعداد دفعاتی که این محصول به علاقه‌مندی اضافه شده
   */
  wishCount?: number | null;
  isActive?: boolean | null;
  
//   meta?: {
//     title?: string | null;
//     /**
//      * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
//      */
//     image?: (number | null) | Media;
//     description?: string | null;
//   };
  updatedAt: string;
  createdAt: string;
}
