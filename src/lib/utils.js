import { FaGithub, FaYoutube , FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";
import profileImage from "/src/images/profile.png";
// nav link
export const links = [
    {
        url: "#accueil",
        text: "Accueil"
    },
    {
        url: "#features",
        text: "Compétences"
    },
    {
        url: "#resume",
        text: "Expériences"
    },
    // {
    //     url: "#services",
    //     text: "Services",
    // },
    {
        url: "#contact",
        text: "Contact"
    },
];

// social media
export const media = [
    {
        "name": "Github",
        "url": "https://github.com/Izma-shaw", // change it to your Github profile link
        "show": true, // turn it to false if you don't have Github
        'icon' : <FaGithub fill="black"/>
    },
    {
        "name": "Linkedin",
        "url": "https://www.linkedin.com/in/sow-ismael-11871a140/", // change it to your Linkedin profile link
        "show": true, // turn it to false if you don't have Linkedin
        "icon" : <FaLinkedin className="rounded-full" fill="black"/>
    },
    {
        "name": "Twitter",
        "url": "", // change it to your Twitter profile link
        "show": true, // turn it to false if you don't have Twitter
        "icon" : <FaTwitter fill="black"  />
    },
    {
        "name": "Youtube",
        "url": "", // add your Youtube channel link
        "show": false, // turn it to true if you have Youtube
        "icon" : <FaYoutube fill="black"  />
    },
    {
        "name": "Facebook",
        "url": "", // add your facebook profile link
        "show": false, // turn it to false if have Facebook
        "icon" : <FaFacebook fill="black" />
    },
];

// update this variable with your data
export const userData = {
    name: "Ismael",
    image: profileImage, // you need to put your image in /src/images with the name profile.png
    profession: ['Data Scientist', 'Data Analyst', 'Data Engineer', 'Ingénieur power BI', 'Consultant test fonctionnel'],
    descriptionText: "Actuellement en Master 2 Algorithme et Système Intelligent orienté Sciences de Données à l’Université de Caen Normandie, je recherche un stage de fin d’études de 4 à 6 mois à partir de mars 2025. Passionné par la science des données et l’intelligence artificielle, j’ai développé des compétences en gestion de données (Pandas, Numpy, SQL), modélisation prédictive, machine learning (TensorFlow, Keras, PyTorch) et visualisation de données (Power BI, Matplotlib). Curieux et motivé, je suis prêt à relever des défis et contribuer à des projets innovants.", 
    phoneNumber : "+33 7 58 64 42 87",
    email : "sowismael224@gmail.com",
    adress : "114 rue de lebisey, 14000 Caen, France",
}
// your professions
export const wordToType = ['Data Scientist', 'Data Analyst', 'Data Engineer', 'Machine Learning'];

// description
export const descriptionText = "";
