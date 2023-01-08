export interface About {
  _id: string;
  icon?: string;
  header?: string;
  items: AboutItem[];
}

export interface AboutItem {
  _id: string;
  itemHeader: string;
  itemText: string;
}
