import { HiOutlineTrash } from "react-icons/hi"
import { LiaThumbsUp } from "react-icons/lia"
import { LuRadio } from "react-icons/lu"
import { MdOutlineInsertChartOutlined, MdOutlineOutlinedFlag } from "react-icons/md"
import { PiPlaylistLight, PiShareFatLight } from "react-icons/pi"
import { RiPlayList2Fill } from "react-icons/ri"
import { SlUser } from "react-icons/sl"
import { TbPlaylistAdd, TbPlaylistX } from "react-icons/tb"

export const content_list = [
    'Sleep','Relax','Sad','Romance','Energize','Party',
    'Commute','Feel good','Focus','Workout'
]

export const musicType = [
    'All','Familiar','Discover','Popular','Deep cuts','Pump-up','Metal','Rock','Pumped up','Hard Rock','Pop rock','Grunge','Down'
]

export const Extra = [
    {
        title:'Start radio',
        icon:<LuRadio/>
    },
    {
        title:'Play next',
        icon:<RiPlayList2Fill/>
    },
    {
        title:'Add to queue',
        icon:<PiPlaylistLight/>
    },
    {
        title:'Add to lied songs',
        icon:<LiaThumbsUp/>
    },
    {
        title:'Save to playlist',
        icon:<TbPlaylistAdd/>
    },
    {
        title:'Remove from queue',
        icon:<HiOutlineTrash/>
    },
    {
        title:'Go to artist',
        icon:<SlUser/>
    },
    {
        title:'Share',
        icon:<PiShareFatLight/>
    },
    {
        title:'Report',
        icon:<MdOutlineOutlinedFlag/>
    },
    {
        title:'Dismis queue',
        icon:<TbPlaylistX/>
    },
    {
        title:'Stats for Nerds',
        icon:<MdOutlineInsertChartOutlined/>
    }

]

export const Moods = [
    [
        'Pop','K-Pop','Energy Boosters','Commute'
    ],
    [
        'Romance','Workout','Hiphop','Party'
    ],
    [
        'Meta','Rock','Chill','Feel Good'
    ],
    [
        'J-Pop','Sad','Indie & Alternative','Focus'
    ],
    [
        'Family','Dance & Electronic','2000s','Soundtracks & Musicals'
    ],
    [
        'Indonesian','Korean Hip-Hop','Reggae & Caribbean','1980s'
    ],
    [
        'Classical','UK Rap','1990s','J-Rap'
    ],
    [
        '1970s','Blues','1960s','Country & Americana'
    ],
    [
        'Jazz','African','Rock en Espanol','Mandopop & Cantopop'
    ],
    [
        'Thai','Latin','1950s','Thai Pop'
    ],
    [
        'Arabic','Bollywood & Indian','Desi Hip-Hop','French Hip-Hop'
    ],
    [
        'Turkish Hip-Hop','Arabic Hip-Hop','Hip-Hop en Espanol','Brazian Hip-Hop'
    ],
    [
        'Luk thung','Thai Rock','German Hip-Hop','Iraqi'
    ]
]