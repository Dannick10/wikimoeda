export interface Inoticias {
  count: number;
  page: number;
  totalPages: number;
  showingTo: number;
  items: {
    id: string;
    titulo: string;
    introducao: string;
    data_publicacao: string;
    link: string;
  }[];
}
