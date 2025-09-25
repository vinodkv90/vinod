// Image type
export type Image = {
  id: number;
  type: string;
  url: string;
  alternativeText: string;
};

// Hero widget
export type HeroWidget = {
  widgetType: "heroWidget";
  data: {
    title: string;
    description: string;
    image: Image;
  };
  component: "home.hero";
};

// Follow widget link
export type FollowLink = {
  url: string;
  icon: string;
};

// Follow widget
export type FollowWidget = {
  widgetType: "followWidget";
  data: {
    title: string;
    links: FollowLink[];
  };
  component: "contact.follow";
};

// Union of possible widgets
export type Widget = HeroWidget | FollowWidget;

// Root object
export type RootObject = {
  data: {
    seo: Record<string, unknown>;
    widgets: Widget[];
  };
};

export interface ProjectImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  caption: string | null;
}

export interface Project {
  title: string;
  description: string | null;
  image: ProjectImage;
  is_large: boolean;
}

export interface ProjectsResponse {
  title: string;
  description: string | null;
  projects: Project[];
}