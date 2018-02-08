export interface NavItems {
  title: string;
  stateName: string;
  stateParams: any;
}

export interface HeaderConfig {
  title: string;
  navItems: NavItems[];
}
