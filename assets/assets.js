import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import fondAcceuil from './fondAcceuil.png';
import chambre1 from './chambre1.jpg';
import chambre2 from './chambre2.jpg';
import chambre3 from './chambre3.jpg';
import etageComplet from './etageComplet.jpg';

// Photos supplémentaires pour la galerie
import chambre1_2 from './chambre1_2.jpg'; // Utiliser les mêmes images pour l'instant
import chambre1_3 from './chambre1.jpg';
import chambre2_2 from './chambre2_2.jpg';
import chambre2_3 from './chambre2.jpg';
import chambre3_2 from './chambre3_2.jpg'; // Utiliser la vraie image chambre3_2
import chambre3_3 from './chambre3.jpg';
import etage_2 from './etageComplet.jpg';
import etage_3 from './etageComplet.jpg';



export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    fondAcceuil,
    chambre1,
    chambre2,
    chambre3,
    etageComplet,
    chambre1_2,
    chambre1_3,
    chambre2_2,
    chambre2_3,
    chambre3_2,
    chambre3_3,
    etage_2,
    etage_3
};

export const workData = [
    {
        title: 'Chambre 1 spacieuse',
        description: '3 personnes - 28 m2',
        description2: 'A partir de: 32 € ',
        bgImage: chambre1,
        gallery: [chambre1, chambre1_2, chambre1_3],
    },
    {
        title: 'Chambre 2 détente',
        description: '2 personnes - 12 m2 ',
        description2: 'A partir de: 23 € ',
        bgImage: chambre2,
        gallery: [chambre2, chambre2_2, chambre2_3],
    },
    {
        title: 'Chambre 3 lumineuse',
        description: '2 personnes - 14 m2  ',
        description2: 'A partir de: 23 € ',
        bgImage: chambre3,
        gallery: [chambre3, chambre3_2, chambre3_3],
    },
    {
        title: 'Étage complet',
        description: '7 personnes - 80 m2 ',
        description2: 'A partir de: 78 € ',
        bgImage: etageComplet,
        gallery: [etageComplet, etage_2, etage_3],
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];