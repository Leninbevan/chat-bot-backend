export const TYPE_AGENTS = "agents";
export const TYPE_CHARACTERS = "characters";
export const TYPE_SPACES = "spaces";
export const CATEGORY_EDUCATION="education";
export const CATEGORY_BUSINESS="business";
export const VISIBLITY_PRIVATE="private";
export const VISIBLITY_PUBLIC="public";
export const GPT_2="gpt-2";
export const GPT_3_5="gpt-3.5";
export const GPT_4="gpt-4";

enum LibraryTypes {
    AGENTS=TYPE_AGENTS,
    CHARACTERS = TYPE_CHARACTERS,
    SPACES = TYPE_SPACES
}

enum LibraryCategory {
    EDUCATION = CATEGORY_EDUCATION,
    BUSINESS = CATEGORY_BUSINESS
}

enum LibraryVisibility {
    PRIVATE = VISIBLITY_PRIVATE,
    PUBLIC = VISIBLITY_PUBLIC
}

enum ModelAi{
    "GPT-4"=GPT_4,
    "GPT-3.5"=GPT_3_5,
    "GPT-2"=GPT_2
}

// interface ModelSetting{
//     id?:String;
//     model:ModelAi;
//     accurarcy:Number;
// }

// interface SpaceYoutube{
//     channelLink:String;
//     videoLink:String;
// }

// interface SpaceWebiste{
//     websiteURl:String;
//     webpageLink:String;
// }


export interface Library {
    userId: string;
    type: LibraryTypes;
    image: string;
    title: string;
    describtion: string;
    category: LibraryCategory;
    visibility: LibraryVisibility;
    instruction?: string;
    modelAI?: ModelAi;
    modelAIAccuracy?: string;
    youtubeChannelLink?: string;
    youtubeVideoLink?: string;
    websiteURl?: string;
    webpageLink?: string;
    document?: string;
}
