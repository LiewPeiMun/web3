export interface ICatItem {
    id: number;
    name: string;
    status: number;
  }
  
  export interface ICatState {
    apiData: ICatItem[];
    loading: boolean;
    error: unknown;
  }
  