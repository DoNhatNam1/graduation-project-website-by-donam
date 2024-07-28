export type PostData = {
  DetailPostDesc: {
      id: string;
      PostsId: string;
      DivOrder: number;
      DivTagType: $Enums.Div_Types;
      desc: string | null;
      img: string | null;
      imgWidth: number | null;
      imgHeight: number | null;
      imgAlt: string | null;
  }[];
} | null;
  