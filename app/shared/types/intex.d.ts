declare interface DockItemType {
  name: string;
  icon: string;
  img: string;
  type: 'iframe' | 'component' | 'link';
  iframe?: {
    url: string;
    width: number;
    height: number;
  };
  position?: {
    top: string;
    left: string;
  };
  link?: string;
  component?: Component;
  color?: string;
  background?: string;
}
