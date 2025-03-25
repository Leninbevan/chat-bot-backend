
enum LibraryTypes{
    AGENTS="agents",
    CHARACTERS="characters",
    SPACES="spaces"
}

enum LibraryCategory{
    EDUCATION="education",
    BUSINESS="business"
}

enum LibraryVisibility{
    PRIVATE="private",
    PUBLIC="public"
}

// enum ModelAi{
//     "GPT-4"="gpt-4",
//     "GPT-3.5"="gpt-3.5",
//     "GPT-2"="gpt-2"
// }

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
    modelAI?: string;
    modelAIAccuracy?: string;
    youtubeChannelLink?: string;
    youtubeVideoLink?: string;
    websiteURl?: string;
    webpageLink?: string;
    document?: string;
}
