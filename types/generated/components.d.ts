import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialLinksSocialLink extends Schema.Component {
  collectionName: 'components_global_social_links';
  info: {
    displayName: 'SocialLink';
    description: '';
  };
  attributes: {
    platform: Attribute.String;
    url: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ServicesComponentsSousServices extends Schema.Component {
  collectionName: 'components_services_components_sous_services_s';
  info: {
    displayName: 'SousServices ';
    icon: '';
    description: '';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
    category: Attribute.String;
    type: Attribute.String;
    title: Attribute.String;
    features: Attribute.Text;
    button: Attribute.Component<'global.main-btn'>;
    parentId: Attribute.Relation<
      'services-components.sous-services',
      'oneToOne',
      'api::service.service'
    >;
    slug: Attribute.String;
  };
}

export interface NewsLatterNewsLatterForm extends Schema.Component {
  collectionName: 'components_news_latter_news_latter_forms';
  info: {
    displayName: 'NewsLatterForm';
  };
  attributes: {
    placeholder: Attribute.String;
    btn_text: Attribute.String;
  };
}

export interface NavigationLinksSousLinks extends Schema.Component {
  collectionName: 'components_navigation_links_sous_links';
  info: {
    displayName: 'sousLinks';
    description: '';
  };
  attributes: {
    sub_subServices: Attribute.Relation<
      'navigation-links.sous-links',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface NavigationLinksNavigationLink extends Schema.Component {
  collectionName: 'components_navigation_links_navigation_links';
  info: {
    displayName: 'NavigationLink';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    subLinks: Attribute.Component<'navigation-links.sous-links'>;
    service: Attribute.Relation<
      'navigation-links.navigation-link',
      'oneToOne',
      'api::service.service'
    >;
  };
}

export interface HomePageWhatWeDo extends Schema.Component {
  collectionName: 'components_home_page_what_we_dos';
  info: {
    displayName: 'whatWeDo';
  };
  attributes: {
    desc: Attribute.Text;
    button: Attribute.Component<'global.main-btn'>;
    title: Attribute.Component<'global.main-title'>;
  };
}

export interface HomePageTestimonials extends Schema.Component {
  collectionName: 'components_home_page_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    desc: Attribute.Text;
    author_role: Attribute.String;
    author: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface HomePageTeam extends Schema.Component {
  collectionName: 'components_home_page_teams';
  info: {
    displayName: 'Team';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'global.main-title'>;
    team_members: Attribute.Relation<
      'home-page.team',
      'oneToMany',
      'api::team-member.team-member'
    >;
    btn: Attribute.Component<'global.main-btn'>;
  };
}

export interface HomePageServices extends Schema.Component {
  collectionName: 'components_home_page_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    title: Attribute.Component<'global.main-title'>;
    services: Attribute.Relation<
      'home-page.services',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface HomePageLatestNewsAndBlogs extends Schema.Component {
  collectionName: 'components_home_page_latest_news_and_blogs';
  info: {
    displayName: 'LatestNews&Blogs';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'global.main-title'>;
    blogs: Attribute.Relation<
      'home-page.latest-news-and-blogs',
      'oneToMany',
      'api::blog.blog'
    >;
    btnText: Attribute.String;
  };
}

export interface HomePageHeroSection extends Schema.Component {
  collectionName: 'components_home_page_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    top_title: Attribute.String;
    middle_title: Attribute.String;
    highlighted_title: Attribute.String;
    desc: Attribute.Text;
    button: Attribute.Component<'global.main-btn'>;
  };
}

export interface HomePageClients extends Schema.Component {
  collectionName: 'components_home_page_clients';
  info: {
    displayName: 'Clients';
    description: '';
  };
  attributes: {
    clients: Attribute.Relation<
      'home-page.clients',
      'oneToMany',
      'api::client.client'
    >;
    title: Attribute.String;
  };
}

export interface GlobalSousServices extends Schema.Component {
  collectionName: 'components_global_sous_services';
  info: {
    displayName: 'sous_services';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface GlobalSimpleSection extends Schema.Component {
  collectionName: 'components_global_simple_sections';
  info: {
    displayName: 'simple Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GlobalQuestion extends Schema.Component {
  collectionName: 'components_global_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
    icon: Attribute.String;
  };
}

export interface GlobalPageHero extends Schema.Component {
  collectionName: 'components_global_page_heroes';
  info: {
    displayName: 'pageHero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'global.main-btn'>;
  };
}

export interface GlobalMainTitle extends Schema.Component {
  collectionName: 'components_global_main_titles';
  info: {
    displayName: 'MainTitle';
  };
  attributes: {
    title: Attribute.String;
    highlighted_title: Attribute.String;
  };
}

export interface GlobalMainBtn extends Schema.Component {
  collectionName: 'components_global_main_btns';
  info: {
    displayName: 'main_btn';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'second', 'third']>;
    href: Attribute.String;
  };
}

export interface GlobalLatestBlog extends Schema.Component {
  collectionName: 'components_global_latest_blogs';
  info: {
    displayName: 'latestBlog';
    description: '';
  };
  attributes: {
    blog: Attribute.Relation<
      'global.latest-blog',
      'oneToOne',
      'api::blog.blog'
    >;
    btnText: Attribute.String;
  };
}

export interface GlobalFaq extends Schema.Component {
  collectionName: 'components_global_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    title: Attribute.Component<'global.main-title'>;
    question: Attribute.Component<'global.question', true>;
  };
}

export interface GlobalEngagementSection extends Schema.Component {
  collectionName: 'components_global_engagement_sections';
  info: {
    displayName: 'Engagement-Section';
  };
  attributes: {
    title: Attribute.Component<'global.main-title'>;
    Advantage: Attribute.Component<'global.advantage', true>;
  };
}

export interface GlobalCategories extends Schema.Component {
  collectionName: 'components_global_categories';
  info: {
    displayName: 'categories';
    description: '';
  };
  attributes: {};
}

export interface GlobalBlogsSectino extends Schema.Component {
  collectionName: 'components_global_blogs_sectinos';
  info: {
    displayName: 'blogsSectino';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'global.main-title'>;
    blogs: Attribute.Relation<
      'global.blogs-sectino',
      'oneToMany',
      'api::blog.blog'
    >;
    categories: Attribute.Relation<
      'global.blogs-sectino',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface GlobalAdvantage extends Schema.Component {
  collectionName: 'components_global_advantages';
  info: {
    displayName: 'Advantage';
  };
  attributes: {
    icon: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface FooterLinksFooterLink extends Schema.Component {
  collectionName: 'components_footer_links_footer_links';
  info: {
    displayName: 'FooterLink';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'social-links.social-link': SocialLinksSocialLink;
      'services-components.sous-services': ServicesComponentsSousServices;
      'news-latter.news-latter-form': NewsLatterNewsLatterForm;
      'navigation-links.sous-links': NavigationLinksSousLinks;
      'navigation-links.navigation-link': NavigationLinksNavigationLink;
      'home-page.what-we-do': HomePageWhatWeDo;
      'home-page.testimonials': HomePageTestimonials;
      'home-page.team': HomePageTeam;
      'home-page.services': HomePageServices;
      'home-page.latest-news-and-blogs': HomePageLatestNewsAndBlogs;
      'home-page.hero-section': HomePageHeroSection;
      'home-page.clients': HomePageClients;
      'global.sous-services': GlobalSousServices;
      'global.simple-section': GlobalSimpleSection;
      'global.question': GlobalQuestion;
      'global.page-hero': GlobalPageHero;
      'global.main-title': GlobalMainTitle;
      'global.main-btn': GlobalMainBtn;
      'global.latest-blog': GlobalLatestBlog;
      'global.faq': GlobalFaq;
      'global.engagement-section': GlobalEngagementSection;
      'global.categories': GlobalCategories;
      'global.blogs-sectino': GlobalBlogsSectino;
      'global.advantage': GlobalAdvantage;
      'footer-links.footer-link': FooterLinksFooterLink;
    }
  }
}
