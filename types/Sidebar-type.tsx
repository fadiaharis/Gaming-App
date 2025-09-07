import { ElementType, ReactNode } from "react";

export type SidebarItemProps = {
  href: string;
  label?: string;
  labelNode?: ReactNode;
  Icon: ElementType;
  RightIcon?: ElementType;
  collapsed?: boolean;
  active?: boolean;
  badge?: string;
  className?: string;
};

export type SectionChild = {
  href: string;
  label: string;
  Icon: ElementType;
};

export type SidebarDropdownProps = {
  parentHref: string;
  label: string;
  Icon: ElementType;
  items: SectionChild[];
  collapsed?: boolean;
  className?: string;
};

export type BlockItem = {
  href: string;
  Icon: ElementType;
  label: string;
};

export type SidebarBlocksProps = {
  items: BlockItem[];
  collapsed?: boolean;
};
