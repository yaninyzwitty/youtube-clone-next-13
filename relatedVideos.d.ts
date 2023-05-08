export interface Root {
    items:         Item[];
    kind:          string;
    nextPageToken: string;
    pageInfo:      PageInfo;
   }
   
   export interface Item {
    id:      ID;
    kind:    ItemKind;
    snippet: Snippet;
   }
   
   export interface ID {
    kind:    IDKind;
    videoId: string;
   }
   
   export enum IDKind {
    YoutubeVideo = "youtube#video",
   }
   
   export enum ItemKind {
    YoutubeSearchResult = "youtube#searchResult",
   }
   
   export interface Snippet {
    channelId:            string;
    channelTitle:         string;
    description:          string;
    liveBroadcastContent: LiveBroadcastContent;
    publishTime:          Date;
    publishedAt:          Date;
    thumbnails:           Thumbnails;
    title:                string;
   }
   
   export enum LiveBroadcastContent {
    Live = "live",
    None = "none",
   }
   
   export interface Thumbnails {
    default:   Default;
    high:      Default;
    maxres?:   Default;
    medium:    Default;
    standard?: Default;
   }
   
   export interface Default {
    height: number;
    url:    string;
    width:  number;
   }
   
   export interface PageInfo {
    resultsPerPage: number;
    totalResults:   number;
   }
   