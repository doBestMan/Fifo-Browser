/* Copyright (c) 2021-2022 SnailDOS */

export interface ISearchEngine {
  name?: string;
  url?: string;
  keywordsUrl?: string;
  keyword?: string;
  icon?: string;
}

export interface IStartupBehavior {
  type: 'continue' | 'urls' | 'empty';
}

export type TopBarVariant = 'default' | 'compact';

export interface ISettings {
  invisibleTabs: any;
  theme: string;
  themeAuto: boolean;
  shield: boolean;
  multrin: boolean;
  notnew: boolean;
  httpsEnforce: boolean;
  animations: boolean;
  bookmarksBar: boolean;
  suggestions: boolean;
  searchEngine: number;
  searchEngines: ISearchEngine[];
  startupBehavior: IStartupBehavior;
  warnOnQuit: boolean;
  version: number;
  darkContents: boolean;
  downloadsDialog: boolean;
  downloadsPath: string;
  doNotTrack: boolean;
  globalPrivacyControl: boolean;
  topBarVariant: TopBarVariant;
}
